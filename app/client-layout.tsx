'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RecoilRoot } from 'recoil';

type ClientLayoutProps = {
  children: React.ReactNode;
};

const queryClient = new QueryClient();

export default function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools />
      </QueryClientProvider>
    </RecoilRoot>
  );
}
