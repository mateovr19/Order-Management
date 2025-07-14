'use client'
import React, { useState } from 'react';
import { TextField, Button } from '@radix-ui/themes';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/navigation';
interface DialogProps {
  open: boolean;
  onClose: () => void;
}

export default function Dialog({ open, onClose }: DialogProps) {
  const [loading, setLoading] = useState(false);
  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: '',
      balance: 0,
    },
  });
  const router = useRouter();
  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);
    try {
      const res = await axios.post('/api/auth/masterful', data);
      console.log(res);
      setLoading(false);
      onClose();
      router.refresh();
    } catch (error) {
      console.error('Error al crear el maestro:', error);
      setLoading(false);
    }
  });

  // Si el modal no está abierto, no renderizamos nada
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Crear Nuevo Maestro</h2>

        <div className="space-y-4">
            <form onSubmit={onSubmit} className="space-y-4">
                <label htmlFor="name" className="block text-sm font-medium">Nombre del Maestro</label>
                <Controller
                    name='name'
                    control={control}
                    render={({field}) => {
                        return (
                        <TextField.Root 
                            id='name'
                            type='text' 
                            placeholder='Ingresa el nombre del maestro'
                            { ... field }
                        />
                        );
                    }}
                />
                <label htmlFor="balance" className="block text-sm font-medium">Saldo Inicial</label>
                <Controller
                    name='balance'
                    control={control}
                    render={({field}) => {
                        return (
                        <TextField.Root 
                            id='balance'
                            type='number' 
                            placeholder='Ingresa el saldo inicial'
                            { ... field }
                        />
                        );
                    }}
                />

                <div className="flex justify-end space-x-2 mt-4 gap-2">
                    <Button type='submit' disabled={loading} onClick={onClose} mt="4" color='red'>
                        Cancelar
                    </Button>
                    <Button type='submit' disabled={loading} mt="4" color='green'>
                        {loading ? "Creando..." : "Crear Maestro"}
                    </Button>
                </div>
            </form>
        </div>
      </div>
    </div>
  );
}