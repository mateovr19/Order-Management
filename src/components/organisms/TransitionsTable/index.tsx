'use client';
import React, { useState } from 'react';
import { Button } from '@radix-ui/themes';
import Dialog from '@/components/organisms/DialogEditTransitions/index';
import { useSession } from 'next-auth/react';

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
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedTransition, setSelectedTransition] = useState<Transition | null>(null);

  const { data: session } = useSession();
  const user = session?.user;
  const role = user?.role;

  const openEditDialog = (transition: Transition) => {
    setSelectedTransition(transition); // Establecer el maestro seleccionado
    setIsDialogOpen(true); // Abrir el modal
  };
  const closeDialog = () => {
    setIsDialogOpen(false); // Cerrar el modal
  };
  return (
    <div className="card flex flex-col gap-5">

       <h3>
        Historial de Transacciones
      </h3>
        {transitions.length > 0 ? (
          <div className="max-h-96 overflow-y-auto">
            <table className="table-base">
              <thead>
                <tr >
                  <th  className="table-header-cell" >ID</th>
                  <th  className="table-header-cell">Fecha</th>
                  <th  className="table-header-cell">Tipo</th>
                  <th  className="table-header-cell">Cantidad</th>
                  <th  className="table-header-cell">Name</th>
                  {role === 'ADMIN' && (
                    <td className="table-cell px-4 py-3 align-middle text-md font-semibold">Acciones</td>
                  )}
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
                    {role === 'ADMIN' && (
                      <td className="table-cell px-4 py-3 align-middle">
                        <Button
                          onClick={() => openEditDialog(transiciones)}
                          color="yellow"
                          size="2"
                          style={{ cursor: 'pointer' }}
                          className="!px-4 !py-3"
                        >
                          Editar
                        </Button>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-gray-500">No hay transiciones registradas.</p>
        )}
        {selectedTransition && (
                <Dialog
                  open={isDialogOpen}
                  onClose={closeDialog}
                  url="/api/auth/transation"
                  method="PUT"
                  initialValues={{
                    type: "",
                    quantity: selectedTransition.quantity,
                    date: "",
                  }}
                  id={selectedTransition.id}
                />
              )}
      </div>
  );
}