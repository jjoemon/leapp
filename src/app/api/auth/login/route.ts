import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get('x-forwarded-for') || // works on Vercel
    req.ip ||
    'unknown';

  const body = await req.json();
  // Store login + IP in MongoDB
  await db.collection('userLogs').insertOne({
    email: body.email,
    ip,
    timestamp: new Date()
  });

  return NextResponse.json({ success: true });
}
