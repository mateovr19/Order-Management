'use client';
import React, { useState } from 'react';
import { Button } from '@radix-ui/themes';
import Dialog from '@/components/molecules/Dialog/index';
import { useSession } from 'next-auth/react';

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
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedMaster, setSelectedMaster] = useState<Master | null>(null);
  const { data: session } = useSession();
  const user = session?.user;
  const role = user?.role

  const openEditDialog = (master: Master) => {
    setSelectedMaster(master); // Establecer el maestro seleccionado
    setIsDialogOpen(true); // Abrir el modal
  };

  const closeDialog = () => {
    setIsDialogOpen(false); // Cerrar el modal
  };

  return (
    <div className="card flex flex-col gap-5 h-full min-h-0">
      <h3 className="text-xl font-semibold text-gray-800">
        Lista de Maestros
      </h3>

      {masters.length > 0 ? (
        <div className="flex-1 min-h-0 overflow-y-auto border border-gray-200 rounded">
          <table className="table-base w-full text-sm">
            <thead className="sticky top-0 bg-gray-100 z-10">
              <tr>
                <th className="table-header-cell !px-7 !py-3">ID</th>
                <th className="table-header-cell !px-7 !py-3">Nombre</th>
                <th className="table-header-cell !px-7 !py-3">Saldo</th>
                <th className="table-header-cell !px-7 !py-3">Creador</th>
                <th className="table-header-cell !px-7 !py-3">Fecha de Creación</th>
                {role === 'ADMIN' && (
                  <th className="table-header-cell !px-7 !py-3">Acciones</th>
                )}
              </tr>
            </thead>
            <tbody>
              {masters.map((master) => (
                <tr key={master.id} className="border-b hover:bg-gray-50">
                  <td className="table-cell px-4 py-3 align-middle">{master.id}</td>
                  <td className="table-cell px-4 py-3 align-middle">{master.name}</td>
                  <td className="table-cell px-4 py-3 align-middle">{master.balance}</td>
                  <td className="table-cell px-4 py-3 align-middle">{master.email}</td>
                  <td className="table-cell px-4 py-3 align-middle">
                    {new Date(master.createdAt).toLocaleDateString()}
                  </td>
                  {role === 'ADMIN' && (
                    <td className="table-cell px-4 py-3 align-middle">
                      <Button
                        onClick={() => openEditDialog(master)}
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
        <p className="text-gray-500">No hay maestros registrados.</p>
      )}

      {selectedMaster && (
        <Dialog
          open={isDialogOpen}
          onClose={closeDialog}
          url="/api/auth/masterful"
          method="PUT"
          initialValues={{
            name: selectedMaster.name,
            balance: selectedMaster.balance,
          }}
          id={selectedMaster.id}
        />
      )}
    </div>
  );
}