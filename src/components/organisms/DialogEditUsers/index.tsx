'use client';

import React, { useState, useEffect } from 'react';
import { TextField, Button, RadioGroup } from '@radix-ui/themes';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';

interface UserDialogProps {
  open: boolean;
  onClose: () => void;
  url: string;
  method: 'POST' | 'PUT';
  initialValues?: {
    name: string;
    email: string;
    role: 'ADMIN' | 'USER';
  };
  id?: number;
}

export default function UserDialog({
  open,
  onClose,
  url,
  method,
  initialValues = { name: '', email: '', role: 'USER' },
  id,
}: UserDialogProps) {
  const [loading, setLoading] = useState(false);
  const { control, handleSubmit, reset } = useForm({
    defaultValues: initialValues,
  });
  const router = useRouter();
  const [password, setPassword] = useState('');

  useEffect(() => {
    reset(initialValues);
  }, [initialValues, reset]);

  const handleDelete = async () => {
    setLoading(true);
    try {
      await axios.delete(`${url}/${id}`);
      toast.success('Usuario eliminado con éxito');
      setLoading(false);
      onClose();
      router.refresh();
    } catch (error) {
      toast.error('Error al eliminar el usuario');
      console.error('Error al eliminar el usuario:', error);
      setLoading(false);
    }
  };

  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);
    try {
      const payload = {
        ...data,
        ...(method === 'POST' && { password }), // Solo incluir contraseña al crear
      };

      await axios({
        method,
        url: `${url}${id ? `/${id}` : ''}`,
        data: payload,
      });

      toast.success('Usuario guardado con éxito');
      setLoading(false);
      onClose();
      router.refresh();
    } catch (error) {
      toast.error('Error al guardar el usuario');
      console.error('Error al guardar el usuario:', error);
      setLoading(false);
    }
  });

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">
          {method === 'POST' ? 'Crear Usuario' : 'Editar Usuario'}
        </h2>

        <form onSubmit={onSubmit} className="space-y-4">
          <label className="block text-sm font-medium">Nombre</label>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <TextField.Root placeholder="Nombre del usuario" {...field} />
            )}
          />

          <label className="block text-sm font-medium">Email</label>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextField.Root type="email" placeholder="Email" {...field} />
            )}
          />

          {method === 'POST' && (
            <>
              <label className="block text-sm font-medium">Contraseña</label>
              <TextField.Root
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </>
          )}

          <label className="block text-sm font-medium">Rol</label>
          <Controller
            name="role"
            control={control}
            render={({ field }) => (
              <RadioGroup.Root
                defaultValue={field.value}
                onValueChange={field.onChange}
                className="flex gap-4"
              >
                <RadioGroup.Item value="USER">Usuario</RadioGroup.Item>
                <RadioGroup.Item value="ADMIN">Administrador</RadioGroup.Item>
              </RadioGroup.Root>
            )}
          />

          <div className="flex justify-end space-x-2 mt-4 gap-2">
            <Button type="button" disabled={loading} onClick={onClose} color="red">
              Cancelar
            </Button>

            {method === 'PUT' && id && (
              <Button
                type="button"
                disabled={loading}
                onClick={handleDelete}
                color="gold"
              >
                {loading ? 'Eliminando...' : 'Eliminar'}
              </Button>
            )}

            <Button type="submit" disabled={loading} color="green">
              {loading
                ? method === 'POST'
                  ? 'Creando...'
                  : 'Actualizando...'
                : method === 'POST'
                ? 'Crear Usuario'
                : 'Actualizar Usuario'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
