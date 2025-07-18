'use client'
import React, { useState } from 'react'
import Dialog from '@/components/molecules/Dialog/index'
import { Button } from '@radix-ui/themes';
import { useSession } from 'next-auth/react';

export default function Masters() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const toggleDialog = () => setDialogOpen(prev => !prev);
  const { data: session } = useSession();
  const user = session?.user;
  const role = user?.role;

  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-brand-dark">Maestros</h1>
          <p className="text-brand-dark/60">Gestiona el catálogo de productos</p>
        </div>
        <div className="flex items-center space-x-4">
          {role === 'ADMIN' && (
            <Button onClick={toggleDialog} mt="4" color='yellow' size="3" style={{ cursor: 'pointer' }}>
              Agregar Maestro
            </Button>
          )}
        </div>
      </div>
      <Dialog 
        open={dialogOpen} 
        onClose={toggleDialog}
        url="/api/auth/masterful"
        method="POST"
        initialValues={{ name: '', balance: 0 }}
      />
    </>
  );
}