import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, role, experience, availability } = body

    const volunteer = await prisma.volunteer.create({
      data: {
        name,
        email,
        phone,
        interests: [role],
        experience,
        availability: [availability],
      },
    })

    return NextResponse.json(volunteer)
  } catch (error) {
    console.error('Error creating volunteer:', error)
    return NextResponse.json(
      { error: 'Failed to create volunteer' },
      { status: 500 }
    )
  }
}
