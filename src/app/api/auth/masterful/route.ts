import { NextResponse } from "next/server";
import { prisma } from '@/libs/prisma';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../../../libs/auth0ptions';

export async function POST(request: Request) {
    const data = await request.json();
    const session = await getServerSession(authOptions);
    console.log(session);
    console.log(data);
    const newMaster = await prisma.master.create({
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

    return NextResponse.json(newMaster, {
        status: 201,
    });
}