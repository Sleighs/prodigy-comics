const fs = require('fs');
const path = require('path');

// Import the API keys from the backup file
const apiKeys = require('../Woocommerce/apiKeys.js');

// Create .env.local content
const envContent = `# WooCommerce API Configuration
# Backup configuration from apiKeys.js
NEXT_PUBLIC_WC_CONSUMER_KEY=${apiKeys.env.NEXT_PUBLIC_WC_CONSUMER_KEY}
NEXT_PUBLIC_WC_CONSUMER_SECRET=${apiKeys.env.NEXT_PUBLIC_WC_CONSUMER_SECRET}
NEXT_PUBLIC_WC_STORE_URL=${apiKeys.env.NEXT_PUBLIC_WC_STORE_URL}
`;

// Write to .env.local
const envPath = path.join(__dirname, '..', '.env.local');

try {
  fs.writeFileSync(envPath, envContent);
  console.log('✅ .env.local file created successfully with WooCommerce credentials from apiKeys.js');
  console.log('📁 File location:', envPath);
  console.log('🔑 Environment variables set:');
  console.log('   - NEXT_PUBLIC_WC_CONSUMER_KEY');
  console.log('   - NEXT_PUBLIC_WC_CONSUMER_SECRET');
  console.log('   - NEXT_PUBLIC_WC_STORE_URL');
} catch (error) {
  console.error('❌ Error creating .env.local file:', error.message);
  console.log('📝 Please create .env.local manually with the following content:');
  console.log('\n' + envContent);
} 