import { NextRequest, NextResponse } from 'next/server';

interface SubscriptionRequest {
  email: string;
  plan?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: SubscriptionRequest = await request.json();
    const { email, plan = 'newsletter' } = body;

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));

    // Mock successful subscription
    console.log(`New subscription: ${email} for plan: ${plan}`);
    
    // Simulate different responses based on email domain for demo purposes
    const domain = email.split('@')[1];
    const mockResponses = [
      { message: 'Welcome to ContentBoost AI! Check your inbox for confirmation.' },
      { message: 'Thanks for joining! Your free trial starts now.' },
      { message: 'Subscription successful! Welcome to the ContentBoost family.' },
    ];
    
    const responseIndex = domain.length % mockResponses.length;
    const response = mockResponses[responseIndex];

    return NextResponse.json({
      success: true,
      ...response,
      data: {
        email,
        plan,
        subscribedAt: new Date().toISOString(),
        trialEndsAt: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(), // 14 days from now
      }
    });

  } catch (error) {
    console.error('Subscription error:', error);
    
    return NextResponse.json(
      { 
        error: 'We\'re experiencing high demand. Please try again in a moment.',
        success: false 
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'ContentBoost AI Subscription API',
    version: '1.0.0',
    endpoints: {
      subscribe: 'POST /api/subscribe',
    },
    status: 'operational'
  });
}