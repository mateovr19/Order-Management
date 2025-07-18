import React from 'react'
import Masters from '@/components/Templates/Masterful/index'
import MasterTable from '@/components/organisms/MasterTable';
import { prisma } from '@/libs/prisma';
export const dynamic = 'force-dynamic';

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
  const master = await loadMasters();
  const masters = master.map((m) => ({
    id: m.id,
    name: m.name,
    balance: m.balance,
    email: m.creator.email,
    createdAt: m.createdAt.toISOString(),
  }));

  return (
    <div className="flex flex-col h-full min-h-0 space-y-6">
      <Masters />
      <div className="flex-1 min-h-0">
        <MasterTable masters={masters} />
      </div>
    </div>
  );
}