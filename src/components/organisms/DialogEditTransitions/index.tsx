'use client'
import React, { useState, useEffect } from 'react';
import { TextField, Button, RadioGroup} from '@radix-ui/themes';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/navigation';

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
  const { control, handleSubmit, reset } = useForm({
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
      setLoading(false);
      onClose();
      router.refresh();
    } catch (error) {
      console.error('Error al eliminar la transacción:', error);
      setLoading(false);
    }
  };

  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);
    try {
      const res = await axios({
        method,
        url: `${url}${id ? `/${id}` : ''}`,
        data,
      });
      console.log(res);
      setLoading(false);
      onClose();
      router.refresh();
    } catch (error) {
      console.error('Error al enviar la transacción:', error);
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
          <label htmlFor="type" className="block text-sm font-medium">
            Tipo de transacción
          </label>
          <Controller
                name="type"
                control={control}
                render={({ field }) => (
                    <RadioGroup.Root
                    defaultValue={field.value}
                    onValueChange={field.onChange}
                    className="flex gap-4"
                    >
                    <RadioGroup.Item value="entrada">Entrada</RadioGroup.Item>
                    <RadioGroup.Item value="salida">Salida</RadioGroup.Item>
                    </RadioGroup.Root>
                )}
                />

          <label htmlFor="quantity" className="block text-sm font-medium">
            Cantidad
          </label>
          <Controller
            name="quantity"
            control={control}
            render={({ field }) => (
              <TextField.Root
                id="quantity"
                type="number"
                placeholder="Cantidad"
                {...field}
              />
            )}
          />

          <label htmlFor="date" className="block text-sm font-medium">
            Fecha
          </label>
          <Controller
            name="date"
            control={control}
            render={({ field }) => (
              <TextField.Root
                id="date"
                type="date"
                placeholder="Fecha"
                {...field}
              />
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
