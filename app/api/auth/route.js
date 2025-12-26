import { NextResponse } from 'next/server';

// Simple authentication - in a real app you would use a more secure method
const ADMIN_PASSWORD = 'proattestation2024';

export async function POST(req) {
  try {
    const { password } = await req.json();
    
    if (password === ADMIN_PASSWORD) {
      return NextResponse.json({ 
        success: true,
        authenticated: true
      });
    } else {
      return NextResponse.json({ 
        success: false,
        authenticated: false,
        message: 'Invalid password'
      });
    }
  } catch (error) {
    console.error('Auth error:', error);
    return NextResponse.json(
      { success: false, message: error.message || 'Authentication failed' },
      { status: 500 }
    );
  }
} 