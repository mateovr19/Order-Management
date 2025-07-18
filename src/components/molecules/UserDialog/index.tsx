'use client';

import React, { useState } from 'react';
import { TextField, Button, Select } from '@radix-ui/themes';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';

interface CreateUserDialogProps {
  open: boolean;
  onClose: () => void;
}

export default function CreateUserDialog({ open, onClose }: CreateUserDialogProps) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      role: 'USER', // valor por defecto
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);
    try {
      await axios.post('/api/auth/register', data);
      toast.success('Usuario creado con éxito');
      setLoading(false);
      reset();
      onClose();
      router.refresh();
    } catch (error) {
      toast.error('Error al crear el usuario');
      console.error('Error al crear el usuario:', error);
      setLoading(false);
    }
  });

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Crear Nuevo Usuario</h2>

        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">Nombre</label>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <TextField.Root id="name" placeholder="Nombre del usuario" {...field} />
              )}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium">Email</label>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <TextField.Root id="email" type="email" placeholder="correo@ejemplo.com" {...field} />
              )}
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium">Contraseña</label>
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <TextField.Root id="password" type="password" placeholder="********" {...field} />
              )}
            />
          </div>

          <div>
            <label htmlFor="role" className="block text-sm font-medium">Rol</label>
            <Controller
              name="role"
              control={control}
              render={({ field }) => (
                <Select.Root onValueChange={field.onChange} defaultValue="USER">
                  <Select.Trigger />
                  <Select.Content>
                    <Select.Item value="USER">Usuario</Select.Item>
                    <Select.Item value="ADMIN">Administrador</Select.Item>
                  </Select.Content>
                </Select.Root>
              )}
            />
          </div>

          <div className="flex justify-end gap-2 pt-4">
            <Button type="button" color="gray" onClick={onClose} disabled={loading}>
              Cancelar
            </Button>
            <Button type="submit" color="green" disabled={loading}>
              {loading ? 'Creando...' : 'Crear Usuario'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
