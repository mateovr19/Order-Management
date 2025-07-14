'use client'
import React, { useState } from 'react'
import Dialog from '@/components/molecules/Dialog/index'

export default function Masters() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const handleOpenDialog = () => setDialogOpen(true);
  const handleCloseDialog = () => setDialogOpen(false);

  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-brand-dark">Maestros</h1>
          <p className="text-brand-dark/60">Gestiona el catálogo de productos</p>
        </div>
        <div className="flex items-center space-x-4">
          {/* Botón para abrir el modal */}
          <button
            onClick={handleOpenDialog}
            className="gradient-primary text-black p-2 bg-amber-400 rounded-md"
          >
            Agregar Maestro
          </button>
        </div>
      </div>
      <Dialog open={dialogOpen} onClose={handleCloseDialog}/>
    </>
  );
}