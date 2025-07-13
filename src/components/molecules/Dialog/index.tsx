'use client'
import React, { useState } from 'react';

interface DialogProps {
  open: boolean;
  onClose: () => void; // Función para cerrar el modal
}

export default function Dialog({ open, onClose }: DialogProps) {
  const [name, setName] = useState('');
  const [balance, setBalance] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleAddMaster = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onClose(); // Llamar la función onClose para cerrar el modal
      setName('');
      setBalance(0);
    }, 2000); // Simulando el proceso de creación con un delay
  };

  // Si el modal no está abierto, no renderizamos nada
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Crear Nuevo Maestro</h2>

        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">Nombre del Maestro</label>
            <input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ingresa el nombre del maestro"
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div>
            <label htmlFor="balance" className="block text-sm font-medium">Saldo Inicial</label>
            <input
              id="balance"
              type="number"
              value={balance}
              onChange={(e) => setBalance(Number(e.target.value))}
              placeholder="Ingresa el saldo inicial"
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div className="flex justify-end space-x-2 mt-4">
            <button
              onClick={onClose} // Usamos la función onClose para cerrar el modal
              className="border border-gray-300 px-4 py-2 rounded-md"
            >
              Cancelar
            </button>
            <button
              onClick={handleAddMaster}
              disabled={loading}
              className="gradient-primary text-white px-4 py-2 rounded-md"
            >
              {loading ? "Creando..." : "Crear Maestro"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}