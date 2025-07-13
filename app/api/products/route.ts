import { NextRequest, NextResponse } from 'next/server';

// WooCommerce Product Interface
interface WooCommerceProduct {
  id: number;
  name: string;
  slug: string;
  permalink: string;
  description: string;
  short_description: string;
  price: string;
  regular_price: string;
  sale_price: string;
  on_sale: boolean;
  purchasable: boolean;
  stock_status: string;
  average_rating: string;
  rating_count: number;
  shipping_required: boolean;
  images: Array<{
    id: number;
    src: string;
    name: string;
    alt: string;
  }>;
  categories: Array<{
    id: number;
    name: string;
    slug: string;
  }>;
  tags: Array<{
    id: number;
    name: string;
    slug: string;
  }>;
}

export async function GET(request: NextRequest) {
  console.log("")
  try {
    // Check for query parameters
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const tag = searchParams.get('tag');
    const limit = searchParams.get('limit');
    const page = searchParams.get('page');

    // WooCommerce API configuration - using your working solution
    const url = process.env.NEXT_PUBLIC_WC_STORE_URL || 'https://rnbwx-73-193-146-47.a.free.pinggy.link/';
    const key = process.env.NEXT_PUBLIC_WC_CONSUMER_KEY || 'ck_aec01c53e7513e20ba6fb6771376ff262e39d312';
    const secret = process.env.NEXT_PUBLIC_WC_CONSUMER_SECRET || 'cs_d0c59a6d526238231f5c1e4e78dbee14ca0a5850';

    // const url = `https://rnswk-73-193-146-47.a.free.pinggy.link/`;
    // const key = 'ck_57fed75228f8510fb7c239cb1aec1205f58ea136';
    // const secret = 'cs_c6a197478a24338560d3e7d0ffa12aa9670e4c20';

    // Build the API URL with parameters
    let apiUrl = `${url}/wp-json/wc/v3/products?consumer_key=${key}&consumer_secret=${secret}`;
    console.log('');
    console.log("API URL: ", apiUrl);
    console.log("TEST_VAR: ", process.env.NEXT_PUBLIC_TEST_VAR, process.env.TEST_VAR);
    console.log('');
    if (category) {
      apiUrl += `&category=${category}`;
    }

    if (tag) {
      apiUrl += `&tag=${tag}`;
    }
    
    if (limit) {
      apiUrl += `&per_page=${limit}`;
    }

    if (page) {
      apiUrl += `&page=${page}`;
    }

    const res = await fetch(apiUrl);
    
    if (!res.ok) {
      console.log("Failed to fetch products: ", res.statusText);
      throw new Error(`WooCommerce API error: ${res.status} ${res.statusText}`);
    } else {
      console.log("Successfully fetched products from WooCommerce API");
    }
    
    const data = await res.json();
    let products: WooCommerceProduct[] = data;
    
    // Add a flag to indicate this is real data from WooCommerce
    products = products.map(product => ({
      ...product,
      _source: 'woocommerce_api'
    }));

    // Add CORS headers
    const response = NextResponse.json(products);
    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    return response;
  } catch (error) {
    console.error('Error fetching products from WooCommerce:', error);
    
    // Fallback to local data if API fails
     try {
      console.log('Loading fallback data from local JSON file...');
      // Import local sample product data
      const localData = await import('@/Woocommerce/sample-product-data.json');
      const products: WooCommerceProduct[] = localData.default.map(product => ({
        ...product,
        _source: 'sample_data'
      }));
      
      const response = NextResponse.json(products);
      response.headers.set('Access-Control-Allow-Origin', '*');
      response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
      response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
      
      return response;
    } catch (fallbackError) {
      console.error('Error loading fallback data:', fallbackError);
      return NextResponse.json(
        { error: 'Failed to fetch products' },
        { status: 500 }
      );
    }
  }
}

export async function OPTIONS(request: NextRequest) {
  const response = new NextResponse(null, { status: 200 });
  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  return response;
}