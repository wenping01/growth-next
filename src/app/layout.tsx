'use client';

import './globals.css';
import Header from '@/components/Header';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="box-border font-sans bg-white text-primary">
        <Header />
        {children}
      </body>
    </html>
  );
}
