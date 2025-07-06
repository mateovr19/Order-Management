'use server'
import { NextResponse } from "next/server";
import { prisma } from '@/libs/prisma';
import bcrypt from 'bcrypt';

export async function POST(request: Request) {
    const data = await request.json();
    const salt = await bcrypt.genSalt(10);
    data.password = await bcrypt.hash(data.password, salt);
    console.log(data);

    const newUser = await prisma.user.create({ data });
    const { password: _, ...user } = newUser
    return NextResponse.json(user, {
        status: 201,
    });
}