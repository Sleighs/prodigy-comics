import type { Metadata } from "next";
import { Roboto } from 'next/font/google';
import { Roboto_Condensed } from 'next/font/google';
import { Poppins } from 'next/font/google';

import "./globals.css";
import "@/styles/carousel.css";
import "@/styles/home.css";
import { Navbar, NavbarCenter } from "@/components/Navbar";
import NotificationBar from "@/components/NotificationBar";


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

export const metadata: Metadata = {
  title: "PRODIGY - Action Adventure Superhero Series",
  description: "A world where humans are evolving into something more. The GODSTRAND has been discovered.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${roboto.variable} ${robotoCondensed.variable} ${robotoBold.variable}`}>
      <body className="roboto">
        <Navbar />
        {/* <NotificationBar 
          message="Pre-order PRODIGY: Hell on Earth Book #0 now and get exclusive rewards!" 
          link="https://www.indiegogo.com/projects/prodigy-new-age-hell-on-earth-book-0#/"
          linkText="Pre-order Now"
          type="info"
        /> */}
        {children}
      </body>
    </html>
  );
}
