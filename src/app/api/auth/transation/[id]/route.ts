import { NextResponse } from 'next/server';
import { prisma } from '@/libs/prisma';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/libs/auth0ptions';

export async function PUT(request: Request, context: { params: Promise<{ id: string }> }) {
    try {
      const session = await getServerSession(authOptions);
      if (!session || !session.user?.id) {
        return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
      }
  
      const id = parseInt((await context.params).id);
      const data = await request.json();
      const { type, quantity, date } = data;
  
      if (!type || !quantity || !date) {
        return NextResponse.json({ error: 'Campos incompletos' }, { status: 400 });
      }
  
      const parsedQuantity = parseInt(quantity);
  
      const updated = await prisma.transaction.update({
        where: { id },
        data: {
          type: type === 'entrada' ? 'Entrada' : 'Salida',
          quantity: parsedQuantity,
          date: new Date(date),
        },
      });
  
      return NextResponse.json(updated);
    } catch (error) {
      console.error('[PUT /api/transaction/:id]', error);
      return NextResponse.json({ error: 'Error al editar la transacción' }, { status: 500 });
    }
  }

export async function DELETE(request: Request, context: { params: Promise<{ id: string }> }) {
    const id = parseInt((await context.params).id);
  try {
    const session = await getServerSession(authOptions);
    if (!session || !session.user?.id) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }

    // Obtener la transacción antes de eliminar
    const transaction = await prisma.transaction.findUnique({
      where: { id },
    });

    if (!transaction) {
      return NextResponse.json({ error: 'Transacción no encontrada' }, { status: 404 });
    }

    // Eliminar la transacción
    await prisma.transaction.delete({
      where: { id },
    });

    // Revertir el balance del maestro
    await prisma.master.update({
      where: { id: transaction.masterId },
      data: {
        balance: {
          increment: transaction.type === 'Entrada' ? -transaction.quantity : transaction.quantity,
        },
      },
    });

    return NextResponse.json({ message: 'Transacción eliminada correctamente' });
  } catch (error) {
    console.error('[DELETE /api/transaction/:id]', error);
    return NextResponse.json({ error: 'Error al eliminar la transacción' }, { status: 500 });
  }
}
