'use client';
import React, { useState, useEffect } from 'react';
import { TextField, Button, RadioGroup, Text } from '@radix-ui/themes';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';

interface DialogProps {
  open: boolean;
  onClose: () => void;
  url: string;
  method: 'POST' | 'PUT';
  initialValues?: { type: string; quantity: number; date: string };
  id?: number;
}

export default function TransactionDialog({
  open,
  onClose,
  url,
  method,
  initialValues = { type: 'entrada', quantity: 0, date: '' },
  id,
}: DialogProps) {
  const [loading, setLoading] = useState(false);
  const { control, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: initialValues,
  });
  const router = useRouter();

  useEffect(() => {
    reset(initialValues);
  }, [initialValues, reset]);

  const handleDelete = async () => {
    setLoading(true);
    try {
      await axios.delete(`${url}/${id}`);
      toast.success('Transacción eliminada con éxito');
      setLoading(false);
      onClose();
      router.refresh();
    } catch (error) {
      console.error('Error al eliminar la transacción:', error);
      toast.error('Error al eliminar la transacción');
      setLoading(false);
    }
  };

  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);
    try {
      await axios({
        method,
        url: `${url}${id ? `/${id}` : ''}`,
        data,
      });
      toast.success('Transacción guardada con éxito');
      setLoading(false);
      onClose();
      router.refresh();
    } catch (error) {
      console.error('Error al guardar la transacción:', error);
      toast.error('Error al guardar la transacción');
      setLoading(false);
    }
  });

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">
          {method === 'POST' ? 'Crear Transacción' : 'Editar Transacción'}
        </h2>

        <form onSubmit={onSubmit} className="space-y-4">
          {/* TYPE */}
          <label htmlFor="type" className="block text-sm font-medium">
            Tipo de transacción
          </label>
          <Controller
            name="type"
            control={control}
            rules= {{
              required: {
                message: 'El tipo de transacción es obligatorio',
                value: true,
              }
            }}
            render={({ field }) => (
              <div>
                <RadioGroup.Root value={field.value} onValueChange={field.onChange}>
                  <RadioGroup.Item value="entrada">Entrada</RadioGroup.Item>
                  <RadioGroup.Item value="salida">Salida</RadioGroup.Item>
                </RadioGroup.Root>
                { errors.type && <Text color='red' className='text-xs'>{errors.type.message}</Text>}
              </div>
            )}
          />

          {/* QUANTITY */}
          <label htmlFor="quantity" className="block text-sm font-medium">
            Cantidad
          </label>
          <Controller
            name="quantity"
            control={control}
            rules={{
              required: {
                message: 'La cantidad es obligatoria',
                value: true,
              },
              min: {
                message: 'La cantidad debe ser mayor a 0',
                value: 1,
              }
            }}
            render={({ field }) => (
              <div>
                <TextField.Root
                  id="quantity"
                  type="number"
                  placeholder="Cantidad"
                  {...field}
                  className={errors.quantity ? 'border-red-500' : ''}
                />
                { errors.quantity && <Text color='red' className='text-xs'>{errors.quantity.message}</Text>}
              </div>
            )}
          />

          {/* DATE */}
          <label htmlFor="date" className="block text-sm font-medium">
            Fecha
          </label>
          <Controller
            name="date"
            control={control}
            rules= {{
              required: {
                message: 'La fecha es obligatoria',
                value: true,
              }
            }}
            render={({ field }) => (
              <div>
                <TextField.Root
                  id="date"
                  type="date"
                  placeholder="Fecha"
                  {...field}
                  className={errors.date ? 'border-red-500' : ''}
                />
                { errors.date && <Text color='red' className='text-xs'>{errors.date.message}</Text>}
              </div>
            )}
          />

          <div className="flex justify-end space-x-2 mt-4 gap-2">
            <Button
              type="button"
              disabled={loading}
              onClick={onClose}
              mt="4"
              color="red"
              style={{ cursor: 'pointer' }}
            >
              Cancelar
            </Button>

            {method === 'PUT' && id && (
              <Button
                type="button"
                disabled={loading}
                onClick={handleDelete}
                mt="4"
                color="gold"
                style={{ cursor: 'pointer' }}
              >
                {loading ? 'Eliminando...' : 'Eliminar'}
              </Button>
            )}

            <Button
              type="submit"
              disabled={loading}
              mt="4"
              color="green"
              style={{ cursor: 'pointer' }}
            >
              {loading
                ? method === 'POST'
                  ? 'Creando...'
                  : 'Actualizando...'
                : method === 'POST'
                ? 'Crear Transacción'
                : 'Actualizar Transacción'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
