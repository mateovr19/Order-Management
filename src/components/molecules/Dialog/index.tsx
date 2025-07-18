'use client'
import React, { useState } from 'react';
import { useEffect } from 'react';
import { TextField, Button, Text } from '@radix-ui/themes';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-hot-toast';
interface DialogProps {
  open: boolean;
  onClose: () => void;
  url: string;
  method: 'POST' | 'PUT';
  initialValues?: { name: string; balance: number };
  id?: number;
}

export default function Dialog({ open, onClose, url, method, initialValues = { name: '', balance: 0 }, id }: DialogProps) {
  const [loading, setLoading] = useState(false);
  const { control, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: initialValues,
  });

  useEffect(() => {
    reset(initialValues);
  }, [initialValues, reset]);

  const handleDelete = async () => {
    setLoading(true);
    try {
      await axios.delete(`${url}/${id}`);
      toast.success('Maestro eliminado con éxito');
      setLoading(false);
      onClose();
      window.location.href = `${window.location.origin}/masterful`;
    } catch (error) {
      toast.error('Error al eliminar el maestro');
      console.error('Error al eliminar el maestro:', error);
      setLoading(false);
    }

  }

  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);
    try {
      const res = await axios({ method, url: `${url}${id ? `/${id}` : ''}`, data});
      toast.success('Maestro guardado con éxito');
      console.log(res);
      setLoading(false);
      onClose();
      window.location.href = `${window.location.origin}/masterful`;
    } catch (error) {
      toast.error('Error al crear el maestro');
      console.error('Error al crear el maestro:', error);
      setLoading(false);
    }
  });

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">{method === 'POST' ? 'Crear Maestro' : 'Editar Maestro'}</h2>

        <div className="space-y-4">
            <form onSubmit={onSubmit} className="space-y-4">
              <label htmlFor="name" className="block text-sm font-medium">Nombre del Maestro</label>
              <Controller
                  name='name'
                  control={control}
                  rules= {{
                    required: {
                      message: 'El nombre del maestro es requerido',
                      value: true,
                    }
                  }}
                  render={({field}) => (
                    <div>
                      <TextField.Root 
                        id='name'
                        type='text' 
                        placeholder='Ingresa el nombre del maestro'
                        { ... field }
                      />
                      { errors.name && <Text color='red' className='text-xs'>{errors.name.message}</Text>}
                    </div>
                  )}
                />
                <label htmlFor="balance" className="block text-sm font-medium">Saldo Inicial</label>
                <Controller
                  name='balance'
                  control={control}
                  rules={{
                    required: {
                      message: 'El saldo es obligatorio',
                      value: true,
                    },
                    min: {
                      message: 'La cantidad debe ser mayor a 0',
                      value: 1,
                    }
                  }}
                  render={({field}) => (
                    <div>
                      <TextField.Root 
                        id='balance'
                        type='number' 
                        placeholder='Ingresa el saldo inicial'
                        { ... field }
                      />
                      { errors.balance && <Text color='red' className='text-xs'>{errors.balance.message}</Text>}
                    </div>
                  )}
                />

                <div className="flex justify-end space-x-2 mt-4 gap-2">
                    <Button type='submit' disabled={loading} onClick={onClose} mt="4" color='red' style={{ cursor: 'pointer' }}>
                        Cancelar
                    </Button>
                    {method === 'PUT' && id && (
                    <Button type="button" disabled={loading} onClick={handleDelete} mt="4" color="gold" style={{ cursor: 'pointer' }}>
                      {loading ? 'Eliminando...' : 'Eliminar'}
                    </Button>
                  )}

                  <Button type="submit" disabled={loading} mt="4" color="green" style={{ cursor: 'pointer' }}>
                    {loading
                      ? method === 'POST' ? 'Creando...' : 'Actualizando...'
                      : method === 'POST' ? 'Crear Maestro' : 'Actualizar Maestro'}
                  </Button>
                </div>
            </form>
        </div>
      </div>
    </div>
  );
}