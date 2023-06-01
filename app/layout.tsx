import { siteConfig } from '@/config';
import '@/styles/globals.css';
import type { Metadata } from 'next';
import ClientLayout from './client-layout';
import { cn } from '@/lib';
import localFont from 'next/font/local';

type RootLayoutProps = {
  children: React.ReactNode;
};

const pretendardFont = localFont({
  src: '../public/pretendard-variable.woff2',
});

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ko">
      <body
        className={cn(
          'min-h-screen bg-primary text-white',
          'flex justify-center items-start',
          pretendardFont.className
        )}
      >
        <ClientLayout>{children}</ClientLayout>
        <div id="modal" />
      </body>
    </html>
  );
}
