'use client';
import React from 'react';

interface Transition {
  id: number;
  date: string;
  quantity: number;
  name: string;
}

interface TransitionTableProps {
  transitions: Transition[];
}

export default function TransitionTable({ transitions }: TransitionTableProps) {
  return (
    <div className="rounded-md border shadow-sm">
      <div className="p-4 border-b">
        <h2 className="text-lg font-semibold">Historial de Transacciones</h2>
      </div>
      <div className="p-4">
        {transitions.length > 0 ? (
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th>ID</th>
                <th>Fecha</th>
                <th>Cantidad</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {transitions.map((transiciones) => (
                <tr key={transiciones.id} className="border-b hover:bg-gray-50">
                  <td className="font-mono">{transiciones.id}...</td>
                  <td>{transiciones.date}</td>
                  <td>{transiciones.quantity}</td>
                  <td>{transiciones.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-gray-500">No hay transiciones registradas.</p>
        )}
      </div>
    </div>
  );
}