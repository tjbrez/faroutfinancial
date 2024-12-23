import './globals.css';
import { Providers } from "./providers";
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
  title: {
    default: 'Far Out Financial | Catch the "Three Bucket Strategy" wave to financial freedom',
    template: '%s | Far Out Financial'
  },
  description: "Simplify your financial journey with Far Out Financial's modern approach to the three bucket strategy. Join our waitlist for early access.",
  icons: {
    icon: '/favicon.ico',
  },
  keywords: ['financial planning', 'three bucket strategy', 'money management', 'retirement planning', 'personal finance'],
  openGraph: {
    title: 'Far Out Financial | Catch the "Three Bucket Strategy" wave to financial freedom',
    description: "Simplify your financial journey with Far Out Financial's modern approach to the three bucket strategy.",
    url: 'https://faroutfinancial.com',
    siteName: 'Far Out Financial',
    images: [
      {
        url: 'https://faroutfinancial.com/images/background.jpg',
        width: 1200,
        height: 630,
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Far Out Financial | Catch the "Three Bucket Strategy" wave to financial freedom',
    description: "Simplify your financial journey with Far Out Financial's modern approach to the three bucket strategy.",
    images: ['https://faroutfinancial.com/images/background.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

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
        <Providers>{children}</Providers>
        <Toaster />
      </body>
    </html>
  );
}
