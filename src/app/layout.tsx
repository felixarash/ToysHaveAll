import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { CartProvider } from '@/context/CartContext';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SideCart from '@/components/cart/SideCart';

const geist = Geist({
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "ToyLand - Magical Toys for Children",
  description: "Discover our amazing collection of toys that bring joy and imagination to children worldwide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geist.className}>
      <head>
        {/* Preload images */}
        <link rel="preload" as="image" href="/toys/teddy.webp" type="image/webp" />
        <link rel="preload" as="image" href="/toys/blocks.webp" type="image/webp" />
        <link rel="preload" as="image" href="/toys/actions.webp" type="image/webp" />
        <link rel="preload" as="image" href="/toys/board.webp" type="image/webp" />
      </head>
      <body className="min-h-screen flex flex-col">
        <CartProvider>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <SideCart />
        </CartProvider>
      </body>
    </html>
  );
}
