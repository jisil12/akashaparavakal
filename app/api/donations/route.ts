import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    // Handle form data with file upload
    const formData = await request.formData();
    
    const amount = formData.get('amount') as string;
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const isMonthly = formData.get('isMonthly') === 'true';
    const screenshot = formData.get('screenshot') as File;
    
    if (!amount || !name) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create donation record in database
    const donation = await prisma.donation.create({
      data: {
        amount: parseFloat(amount),
        donorName: name,
        donorEmail: email,
        isMonthly,
        status: 'pending',
        // We would typically upload the screenshot to a storage service
        // and store the URL here, but for now we'll just mark it as received
        message: screenshot ? 'Payment screenshot received' : null,
      },
    });

    return NextResponse.json({
      success: true,
      donation
    });
  } catch (error) {
    console.error('Error processing donation:', error);
    return NextResponse.json(
      { error: 'Failed to process donation: ' + (error instanceof Error ? error.message : 'Unknown error') },
      { status: 500 }
    );
  }
}
