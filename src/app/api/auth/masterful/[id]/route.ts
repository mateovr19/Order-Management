import { NextResponse } from "next/server";
import { NextRequest } from 'next/server';
import { prisma } from '@/libs/prisma';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../../../../libs/auth0ptions';

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params;
    const data = await request.json();
    const session = await getServerSession(authOptions);
    const updatedMaster = await prisma.master.update({
        where: { id: parseInt(id) },
        data: {
            name: data.name,
            balance: parseInt(data.balance),
            creator: {
                connect: {
                    id: parseInt(session?.user.id)
                }
            }
        }
    });

    return NextResponse.json(updatedMaster, {
        status: 201,
    });
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;
  const deletionMaster = await prisma.master.delete({
    where: { id: parseInt(id) },
  });

  return NextResponse.json(deletionMaster, {
    status: 201,
  });
}