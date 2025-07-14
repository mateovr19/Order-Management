'use client';
import React from 'react';

interface Master {
  id: number;
  name: string;
  balance: number;
  email: string;
  createdAt: string;
}

interface MasterTableProps {
  masters: Master[];
}

export default function MasterTable({ masters }: MasterTableProps) {
  return (
    <div className="rounded-md border shadow-sm">
      <div className="p-4 border-b">
        <h2 className="text-lg font-semibold">Lista de Maestros</h2>
      </div>
      <div className="p-4">
        {masters.length > 0 ? (
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th>ID</th>
                <th>Nombre</th>
                <th>Saldo</th>
                <th>Creador</th>
                <th>Fecha de Creación</th>
              </tr>
            </thead>
            <tbody>
              {masters.map((master) => (
                <tr key={master.id} className="border-b hover:bg-gray-50">
                  <td className="font-mono">{master.id}...</td>
                  <td>{master.name}</td>
                  <td>{master.balance}</td>
                  <td>{master.email}</td>
                  <td>{new Date(master.createdAt).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-gray-500">No hay maestros registrados.</p>
        )}
      </div>
    </div>
  );
}