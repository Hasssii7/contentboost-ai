import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ContentBoost AI - AI-Powered Content Creation for Dropshipping',
  description: 'Boost your dropshipping sales with AI-generated product descriptions, content tracking, and performance analytics. Start your free trial today.',
  keywords: 'dropshipping, AI content, product descriptions, e-commerce, sales optimization',
  authors: [{ name: 'ContentBoost AI Team' }],
  openGraph: {
    title: 'ContentBoost AI - AI-Powered Content Creation for Dropshipping',
    description: 'Boost your dropshipping sales with AI-generated product descriptions and content tracking.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ContentBoost AI - AI Content for Dropshipping',
    description: 'Boost your dropshipping sales with AI-generated content and analytics.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}