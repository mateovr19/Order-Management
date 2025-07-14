'use client'

import React, { useState } from 'react'
import Dialog from '@/components/molecules/DialogTransation/index'

interface MastersProps {
  masterId: number
  productName: string
}

export default function Masters({ masterId, productName }: MastersProps) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const handleOpenDialog = () => setDialogOpen(true);
  const handleCloseDialog = () => setDialogOpen(false);

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={handleOpenDialog}
            className="gradient-primary text-white p-2 bg-primary rounded-md"
          >
            Agregar Transacción
          </button>
        </div>
      </div>
      <Dialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        masterId={masterId}
        productName={productName}
      />
    </>
  );
}
