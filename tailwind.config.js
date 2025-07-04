const { cursorTo } = require('readline');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' }
        }
      },
      animation: {
        scan: 'scan 8s linear infinite'
      },
      textColor: {
        'text-filesystemWhite': '#f0f0f0',
        'text-filesystemYellow': '#00ff00',
      },
      textShadow: {
        'custom': '2px 2px 4px rgba(0, 0, 0, 0.5)',
        'redGlow': '0 0 5px rgba(255, 0, 0, 0.5), 0 0 20px rgba(255, 0, 0, 0.3)',
        'blueGlow': '0 0 5px rgba(0, 0, 255, 0.5), 0 0 20px rgba(0, 0, 255, 0.3)',
        'yellowGlow': '0 0 5px rgba(255, 255, 0, 0.5), 0 0 20px rgba(255, 255, 0, 0.3)',
        'greenGlow': '0 0 5px rgba(0, 255, 0, 0.5), 0 0 20px rgba(0, 255, 0, 0.3)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    function({ addVariant }) {
      addVariant('product-group-hover', '.product-group:hover &');
    }
  ]
}