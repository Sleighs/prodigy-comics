import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next"
import { Roboto } from 'next/font/google';
import { Roboto_Condensed } from 'next/font/google';
import { Poppins } from 'next/font/google';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { ProductProvider } from '@/contexts/ProductContext';
import { CartProvider } from '@/contexts/CartContext';
import { defaultMetadata } from '@/config/metadata';

import "./globals.css";
import "@/styles/carousel.css";
import "@/styles/home.css";
import "@/styles/metal-gear.css";
import "@/styles/page-header.css";
import MetalGearNavbar from "@/components/MetalGearNavbar";
import NotificationBar from "@/components/NotificationBar";
import { Navbar } from "@/components/Navbar";
import DemoAlert from "@/components/DemoAlert";


const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
});
const robotoCondensed = Roboto_Condensed({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto-condensed',
});
const robotoBold = Roboto({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-roboto-bold',
});
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-poppins',
});
const poppinsLight = Poppins({
  subsets: ['latin'],
  weight: ['300'],
  variable: '--font-poppins-light',
});
const poppinsBold = Poppins({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-poppins-bold',
});
const poppinsSemibold = Poppins({
  subsets: ['latin'],
  weight: ['600'],
  variable: '--font-poppins-semibold',
});
const poppinsMedium = Poppins({
  subsets: ['latin'],
  weight: ['500'],
  variable: '--font-poppins-medium',
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const navLinks = [
    { path: '/', label: 'HOME', code: 'HOM' },
    { path: '/story', label: 'STORY', code: 'STY' },
    { path: '/characters', label: 'CHARACTERS', code: 'CHR' },
    { path: '/news', label: 'NEWS', code: 'NEW' },
    { path: '/store', label: 'STORE', code: 'STR' },
    { path: '/about', label: 'ABOUT', code: 'ABT' },
  ];

  return (
    <html lang="en" className={`${roboto.variable} ${robotoCondensed.variable} ${robotoBold.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&family=Roboto+Condensed:wght@700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="roboto bg-gradient-to-b from-gray-900 to-black text-white ">
        <ThemeProvider>
          <ProductProvider>
            <CartProvider>
              <Navbar />
              <DemoAlert />
              {children}
              <Analytics />
            </CartProvider>
          </ProductProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
