import { NextResponse } from 'next/server';
import { prisma } from '@/libs/prisma';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/libs/auth0ptions';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const session = await getServerSession(authOptions);

    console.log('Sesión:', session);
    console.log('Datos recibidos:', data);

    if (!session || !session.user?.id) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }

    const { type, quantity, masterId } = data;

    if (!type || !quantity || !masterId) {
      return NextResponse.json({ error: 'Campos incompletos' }, { status: 400 });
    }

    const parsedQuantity = parseInt(quantity);

    // Crear la transacción
    const newTransaction = await prisma.transaction.create({
      data: {
        type: type === 'entrada' ? 'Entrada' : 'Salida',
        quantity: parsedQuantity,
        master: {
          connect: { id: parseInt(masterId) },
        },
        responsible: {
          connect: { id: parseInt(session.user.id) },
        },
      },
    });

    // Actualizar balance del master
    await prisma.master.update({
      where: { id: parseInt(masterId) },
      data: {
        balance: {
          increment: type === 'entrada' ? parsedQuantity : -parsedQuantity,
        },
      },
    });

    return NextResponse.json(newTransaction, { status: 201 });
  } catch (error) {
    console.error('[POST /api/auth/transation]', error);
    return NextResponse.json(
      { error: 'Error al crear el movimiento' },
      { status: 500 }
    );
  }
}

// PUT: Actualiza un maestro (usando body, no ruta dinámica)
export async function PUT(request: Request) {
  try {
    const data = await request.json();
    const { id, name, balance } = data;

    if (!id || !name || balance === undefined) {
      return NextResponse.json({ error: 'Datos incompletos' }, { status: 400 });
    }

    const updatedMaster = await prisma.master.update({
      where: { id: parseInt(id) },
      data: {
        name,
        balance: parseInt(balance),
      },
    });

    return NextResponse.json(updatedMaster, { status: 200 });
  } catch (error) {
    console.error('[PUT /api/auth/transation]', error);
    return NextResponse.json({ error: 'Error al actualizar' }, { status: 500 });
  }
}

// DELETE: Elimina un maestro (usando body, no ruta dinámica)
export async function DELETE(request: Request) {
  try {
    const data = await request.json();
    const { id } = data;

    if (!id) {
      return NextResponse.json({ error: 'ID no proporcionado' }, { status: 400 });
    }

    const deletedMaster = await prisma.master.delete({
      where: { id: parseInt(id) },
    });

    return NextResponse.json(deletedMaster, { status: 200 });
  } catch (error) {
    console.error('[DELETE /api/auth/transation]', error);
    return NextResponse.json({ error: 'Error al eliminar' }, { status: 500 });
  }
}
