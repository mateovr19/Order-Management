import React, { useState } from 'react'
import Masters from '@/components/Templates/Masterful/index'
import MasterTable from '@/components/organisms/MasterTable';
import { prisma } from '@/libs/prisma';

async function loadMasters() {
  return await prisma.master.findMany({
    include: {
      creator: {
        select: {
          email: true,
        },
      },
    },
  });
}

export default async function MasterfulPage() {
  let master = await loadMasters();
  const masters = master.map((m) => ({
    id: m.id,
    name: m.name,
    balance: m.balance,
    email: m.creator.email,
    createdAt: m.createdAt.toISOString(),
  }));

  return (
    <div className="space-y-6 p-6">
      <Masters />
      <MasterTable masters={masters} />
      
    </div>
    
  );
}