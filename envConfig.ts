import dotenv from 'dotenv'

// Load environment variables from .env.local
dotenv.config({ path: '.env.local' })

// Fallback to apiKeys.js if environment variables are not set
if (!process.env.NEXT_PUBLIC_WC_CONSUMER_KEY || !process.env.NEXT_PUBLIC_WC_CONSUMER_SECRET || !process.env.NEXT_PUBLIC_WC_STORE_URL) {
  try {
    const apiKeys = require('./Woocommerce/apiKeys.js')
    process.env.NEXT_PUBLIC_WC_CONSUMER_KEY = process.env.NEXT_PUBLIC_WC_CONSUMER_KEY || apiKeys.env.NEXT_PUBLIC_WC_CONSUMER_KEY
    process.env.NEXT_PUBLIC_WC_CONSUMER_SECRET = process.env.NEXT_PUBLIC_WC_CONSUMER_SECRET || apiKeys.env.NEXT_PUBLIC_WC_CONSUMER_SECRET
    process.env.NEXT_PUBLIC_WC_STORE_URL = process.env.NEXT_PUBLIC_WC_STORE_URL || apiKeys.env.NEXT_PUBLIC_WC_STORE_URL
    process.env.NEXT_PUBLIC_TEST_VAR = process.env.NEXT_PUBLIC_TEST_VAR || apiKeys.env.NEXT_PUBLIC_TEST_VAR
    console.log('🔧 Using WooCommerce credentials from apiKeys.js as fallback')
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    console.warn('⚠️ Could not load apiKeys.js fallback:', errorMessage)
  }
}
