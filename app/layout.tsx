import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BroklyMaster - Master Web Development with Expert Instructors',
  description: 'Learn frontend, backend, and full-stack development from industry experts. Join BroklyMaster and transform your career in tech with hands-on projects and personalized mentorship.',
  keywords: 'web development, programming courses, React, Node.js, full stack development, coding bootcamp',
  authors: [{ name: 'BroklyMaster Team' }],
  openGraph: {
    title: 'BroklyMaster - Master Web Development',
    description: 'Transform your career with expert-led web development courses',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}