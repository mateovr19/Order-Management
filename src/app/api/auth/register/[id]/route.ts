import { prisma } from '@/libs/prisma';
import {NextResponse } from 'next/server';

export async function PUT(request: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params;
    if (isNaN(parseInt(id))) {
      return NextResponse.json({ error: 'ID inválido' }, { status: 400 });
    }

    const body = await request.json();
    const { name, email, role } = body;

    if (!name || !email || !role) {
      return NextResponse.json({ error: 'Faltan campos obligatorios' }, { status: 400 });
    }

    const normalizedRole = role.toUpperCase();
    if (normalizedRole !== 'ADMIN' && normalizedRole !== 'USER') {
      return NextResponse.json({ error: 'Rol inválido (solo ADMIN o USER)' }, { status: 400 });
    }

    const updatedUser = await prisma.user.update({
      where: { id: parseInt(id) },
      data: {
        name,
        email,
        role: normalizedRole,
      },
    });

    return NextResponse.json({ message: 'Usuario actualizado con éxito', user: updatedUser });
  } catch (error) {
    console.error('Error actualizando usuario:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}

export async function DELETE(request: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params;
    if (isNaN(parseInt(id))) {
      return NextResponse.json({ error: 'ID inválido' }, { status: 400 });
    }

    await prisma.user.delete({
      where: { id: parseInt(id) },
    });

    return NextResponse.json({ message: 'Usuario eliminado con éxito' });
  } catch (error) {
    console.error('Error eliminando usuario:', error);
    return NextResponse.json({ error: 'Error al eliminar usuario' }, { status: 500 });
  }
}
