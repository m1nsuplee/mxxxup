import '@/styles/globals.css';
import localFont from 'next/font/local';
import clsx from 'clsx';
import AuthProvider from './auth-provider';
import type { Metadata } from 'next';
import { siteConfig } from '@/config';
import { Header } from '@/components/common';
import { getCurrentUser } from '@/lib';

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

export default async function RootLayout({ children }: RootLayoutProps) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="ko">
      <body
        className={clsx(
          'min-h-screen bg-dark text-white',
          'max-w-3xl mx-auto py-4',
          pretendardFont.className
        )}
      >
        <AuthProvider>
          <Header user={currentUser} />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
