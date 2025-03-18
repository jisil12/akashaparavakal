import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    if (!body) {
      return NextResponse.json(
        { error: "Request body is empty" },
        { status: 400 }
      )
    }
    
    const { name, email, phone, role, experience, availability } = body

    // Match the schema fields correctly
    const volunteer = await prisma.volunteer.create({
      data: {
        name,
        email,
        phone,
        role, // Updated from interests array to role string
        experience,
        availability, // Updated from array to string
      },
    })

    return NextResponse.json(volunteer)
  } catch (error) {
    console.error('Error creating volunteer:', error)
    return NextResponse.json(
      { error: 'Failed to create volunteer: ' + (error instanceof Error ? error.message : 'Unknown error') },
      { status: 500 }
    )
  }
}
