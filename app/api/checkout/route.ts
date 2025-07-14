// /app/api/checkout/route.ts
import { NextRequest, NextResponse } from 'next/server';

const WC_STORE_URL = process.env.WC_STORE_URL || 'https://your.pinggy.link';
const WC_CONSUMER_KEY = process.env.WC_CONSUMER_KEY || 'ck_yourkey';
const WC_CONSUMER_SECRET = process.env.WC_CONSUMER_SECRET || 'cs_yoursecret';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const res = await fetch(`${WC_STORE_URL}/wp-json/wc/v3/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'Basic ' + Buffer.from(`${WC_CONSUMER_KEY}:${WC_CONSUMER_SECRET}`).toString('base64'),
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      throw new Error(`WooCommerce order API error: ${res.status}`);
    }

    const data = await res.json();
    return NextResponse.json({ success: true, order: data });
  } catch (err) {
    console.error('[Checkout Error]', err);

    // fallback to local mock data
    try {
      const fallbackOrder = await import('@/Woocommerce/sample-order.json');
      return NextResponse.json({ success: false, order: fallbackOrder.default, fallback: true });
    } catch (fallbackErr) {
      return NextResponse.json({ error: 'Checkout failed and fallback failed.' }, { status: 500 });
    }
  }
}
