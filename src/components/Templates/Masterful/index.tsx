'use client'
import React, { useState } from 'react'
import Dialog from '@/components/molecules/Dialog/index'
import { Button } from '@radix-ui/themes';

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
          <Button onClick={handleOpenDialog} mt="4" color='yellow' size="3" style={{ cursor: 'pointer' }}>
            Agregar Maestro
          </Button>
        </div>
      </div>
      <Dialog open={dialogOpen} onClose={handleCloseDialog}/>
    </>
  );
}