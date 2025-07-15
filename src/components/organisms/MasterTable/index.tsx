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
    <div className="card flex flex-col gap-5">

      <h3>
        Lista de Maestros
      </h3>

        {masters.length > 0 ? (
          <div className="max-h-90 overflow-y-auto">
            <table className="table-base">
              <thead>
                <tr >
                  <th className="table-header-cell">ID</th>
                  <th className="table-header-cell">Nombre</th>
                  <th className="table-header-cell">Saldo</th>
                  <th className="table-header-cell">Creador</th>
                  <th className="table-header-cell">Fecha de Creación</th>
                </tr>
              </thead>
              <tbody>
                {masters.map((master) => (
                  <tr key={master.id} className="border-b table-row">
                    <td className="table-cell">{master.id}...</td>
                    <td  className="table-cell">{master.name}</td>
                    <td  className="table-cell">{master.balance}</td>
                    <td  className="table-cell">{master.email}</td>
                    <td  className="table-cell">{new Date(master.createdAt).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-gray-500">No hay maestros registrados.</p>
        )}
      </div>

  );
}