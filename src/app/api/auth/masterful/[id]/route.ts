import { NextResponse } from "next/server";
import { prisma } from '@/libs/prisma';


// PUT: Actualiza un maestro
export async function PUT(request: Request, context: { params: { id: string } }) {
  const { id } = context.params;
  const data = await request.json();

  const updatedMaster = await prisma.master.update({
    where: { id: parseInt(id) },
    data: {
      name: data.name,
      balance: parseInt(data.balance),
    },
  });

  return NextResponse.json(updatedMaster, {
    status: 200, // Código de estado correcto para PUT
  });
}

// DELETE: Elimina un maestro
export async function DELETE(request: Request, context: { params: { id: string } }) {
  const { id } = context.params;

  const deletedMaster = await prisma.master.delete({
    where: { id: parseInt(id) },
  });

  return NextResponse.json(deletedMaster, {
    status: 200, // Código de estado correcto para DELETE
  });
}