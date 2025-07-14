// /app/api/cart/route.ts
import { NextRequest, NextResponse } from 'next/server';

// In-memory cart store for demo (replace with DB or Redis in production)
let cart: { productId: number; quantity: number }[] = [];

export async function GET(req: NextRequest) {
  return NextResponse.json(cart);
}

export async function POST(req: NextRequest) {
  const { productId, quantity } = await req.json();
  const existing = cart.find(item => item.productId === productId);
  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({ productId, quantity });
  }
  return NextResponse.json({ success: true, cart });
}

export async function PUT(req: NextRequest) {
  const { productId, quantity } = await req.json();
  cart = cart.map(item =>
    item.productId === productId ? { ...item, quantity } : item
  );
  return NextResponse.json({ success: true, cart });
}

export async function DELETE(req: NextRequest) {
  const { productId } = await req.json();
  cart = cart.filter(item => item.productId !== productId);
  return NextResponse.json({ success: true, cart });
}
