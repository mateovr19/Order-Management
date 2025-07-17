'use client';
import React from 'react';

interface Transition {
  id: number;
  date: string;
  type: string;
  quantity: number;
  name: string;
}

interface TransitionTableProps {
  transitions: Transition[];
}

export default function TransitionTable({ transitions }: TransitionTableProps) {
  return (
    <div className="card flex flex-col gap-5">

       <h3>
        Historial de Transacciones
      </h3>
        {transitions.length > 0 ? (
          <div className="max-h-90 overflow-y-auto">
            <table className="table-base">
              <thead>
                <tr >
                  <th  className="table-header-cell" >ID</th>
                  <th  className="table-header-cell">Fecha</th>
                  <th  className="table-header-cell">Tipo</th>
                  <th  className="table-header-cell">Cantidad</th>
                  <th  className="table-header-cell">Name</th>
                </tr>
              </thead>
              <tbody>
                {transitions.map((transiciones) => (
                  <tr key={transiciones.id} className="border-b table-row">
                    <td className="table-cell ">{transiciones.id}...</td>
                    <td className="table-cell">{new Date(transiciones.date).toLocaleDateString()}</td>
                    <td className="table-cell">
                      <span className={`px-2 py-1 rounded text-sm font-medium ${transiciones.type === 'Entrada' ? 'bg-green-300' : 'bg-red-300'}`}>
                        {transiciones.type}
                      </span>
                    </td>
                    <td className="table-cell">
                      <span className="px-2 py-1 rounded text-sm font-medium">
                        {transiciones.type === 'Entrada' ? '+' : '-'}
                        {transiciones.quantity}
                      </span>
                    </td>
                    <td className="table-cell">{transiciones.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-gray-500">No hay transiciones registradas.</p>
        )}
      </div>
  );
}