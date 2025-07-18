'use client';

import React, { useState } from 'react';
import { TextField, Button, RadioGroup } from '@radix-ui/themes';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';

interface MovementDialogProps {
  open: boolean;
  onClose: () => void;
  productName: string;
  masterId: number;
}

export default function MovementDialog({ open, onClose, masterId, productName}: MovementDialogProps) {
  const [loading, setLoading] = useState(false);
  const { control, handleSubmit } = useForm({
    defaultValues: {
      type: 'entrada',
      quantity: 0,
    },
  });
  const router = useRouter();

  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);
    try {
      const res = await axios.post('/api/auth/transation', { ...data, productName, masterId });
      toast.success('Movimiento registrado con éxito');
      console.log(res.data);
      setLoading(false);
      onClose();
      router.refresh();
    } catch (error) {
      toast.error('Error al registrar el movimiento');
      console.error('Error al registrar el movimiento:', error);
      setLoading(false);
    }
  });

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Agregar Movimiento - {productName}</h2>

        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Tipo de Movimiento</label>
            <Controller
              name="type"
              control={control}
              render={({ field }) => (
                <RadioGroup.Root
                  value={field.value}
                  onValueChange={field.onChange}
                  className="flex gap-4 cursor-pointer"
                >
                  <div className="flex items-center gap-2 cursor-pointer">
                    <RadioGroup.Item value="entrada" id="entrada" />
                    <label htmlFor="entrada" className="text-sm cursor-pointer">Entrada</label>
                  </div>
                  <div className="flex items-center gap-2 cursor-pointer">
                    <RadioGroup.Item value="salida" id="salida" />
                    <label htmlFor="salida" className="text-sm cursor-pointer">Salida</label>
                  </div>
                </RadioGroup.Root>
              )}
            />
          </div>

          <div>
            <label htmlFor="quantity" className="block text-sm font-medium">Cantidad</label>
            <Controller
              name="quantity"
              control={control}
              render={({ field }) => (
                <TextField.Root
                  id="quantity"
                  type="number"
                  placeholder="Ingresa la cantidad"
                  {...field}
                />
              )}
            />
          </div>

          <div className="flex justify-end gap-2 pt-4">
            <Button type="button" color="gray" onClick={onClose} disabled={loading} style={{ cursor: 'pointer' }}>
              Cancelar
            </Button>
            <Button type="submit" color="orange" disabled={loading} style={{ cursor: 'pointer' }}>
              {loading ? "Creando..." : "Crear Movimiento"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
