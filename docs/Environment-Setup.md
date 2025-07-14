# Environment Setup

This project uses WooCommerce API credentials that can be configured in two ways:

## Primary Configuration: .env.local

The primary method is to use a `.env.local` file in the root directory:

```bash
# WooCommerce API Configuration
NEXT_PUBLIC_WC_CONSUMER_KEY=your_consumer_key_here
NEXT_PUBLIC_WC_CONSUMER_SECRET=your_consumer_secret_here
NEXT_PUBLIC_WC_STORE_URL=your_store_url_here
```

## Backup Configuration: apiKeys.js

If `.env.local` is not available, the system will automatically fall back to using credentials from `Woocommerce/apiKeys.js`.

## Setup Script

You can automatically create the `.env.local` file from the backup configuration:

```bash
node scripts/setup-env.js
```

This script will:
1. Read the credentials from `Woocommerce/apiKeys.js`
2. Create a `.env.local` file with those credentials
3. Provide feedback on the setup process

## Environment Variables

The following environment variables are used:

- `NEXT_PUBLIC_WC_CONSUMER_KEY`: WooCommerce consumer key
- `NEXT_PUBLIC_WC_CONSUMER_SECRET`: WooCommerce consumer secret  
- `NEXT_PUBLIC_WC_STORE_URL`: WooCommerce store URL

## Priority Order

1. `.env.local` file (highest priority)
2. `Woocommerce/apiKeys.js` (fallback)
3. Hardcoded fallbacks in API routes (lowest priority)

## Security Notes

- `.env.local` is gitignored and should not be committed to version control
- `apiKeys.js` contains backup credentials and should be kept secure
- Never commit actual API keys to version control 