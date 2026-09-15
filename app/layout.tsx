import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { MotionEnhancements } from '@/components/MotionEnhancements';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Akhil Gajula | Software Developer & AI Builder',
  description:
    'Portfolio of Akhil Gajula, a student software developer building full-stack applications, AI tools, robotics systems, and technology for community impact.',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Akhil Gajula | Software Developer & AI Builder',
    description: 'Building technology that solves real problems.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <MotionEnhancements />
      </body>
    </html>
  );
}
