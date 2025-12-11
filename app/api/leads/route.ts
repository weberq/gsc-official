import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, city } = body;

    if (!name || !phone) {
       return NextResponse.json({ error: 'Name and Phone are required' }, { status: 400 });
    }

    const lead = await prisma.lead.create({
      data: {
        name,
        phone,
        city: city || 'Unknown',
      },
    });

    return NextResponse.json(lead, { status: 201 });
  } catch (error) {
    console.error('Error creating lead:', error);
    return NextResponse.json({ error: 'Error creating lead' }, { status: 500 });
  }
}
