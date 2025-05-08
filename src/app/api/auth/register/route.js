import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';
 
const prisma = new PrismaClient();
 
export async function POST(req) {
  const { email, password, firstName, lastName, phone } = await req.json();
  if (!email || !password || !firstName || !lastName || !phone) {
    return NextResponse.json({ error: 'All fields required' }, { status: 400 });
  }
 
  const normalizedEmail = email.trim().toLowerCase();
  const existingUser = await prisma.user.findUnique({ where: { email: normalizedEmail } });
  if (existingUser) {
    return NextResponse.json({ error: 'User exists' }, { status: 400 });
  }
 
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: { email: normalizedEmail, password: hashedPassword, firstName, lastName, phone },
  });
 
  return NextResponse.json({
    message: 'User created',
    user: {
      id: user.id, email: user.email, firstName: user.firstName, lastName: user.lastName,
      phone: user.phone, createdAt: user.createdAt,
    },
  });
}