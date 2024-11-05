import './globals.css';
import type { Metadata } from 'next';
import { Poppins, Original_Surfer } from 'next/font/google';
import { Toaster } from "@/components/ui/sonner";
import GoogleAnalytics from '@/components/GoogleAnalytics';

const originalSurfer = Original_Surfer({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-original-surfer',
});

const poppins = Poppins({ 
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: "swap",
});

export const metadata: Metadata = {
  title: 'Far Out Financial - Catch the Wave to Financial Freedom',
  description: 'Use the three bucket strategy to manage your savings and investments',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <GoogleAnalytics />
      </head>
      <body className={`${originalSurfer.variable} ${poppins.variable} font-sans bg-[#f5e6d3]`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
