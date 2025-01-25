import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'StudyTown - Your Perfect Study Sanctuary in Satna',
  description: 'A premium study space with 24/7 access, high-speed WiFi, and a focused learning environment at just ₹1000 per month in satna.',
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