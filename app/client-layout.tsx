'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RecoilRoot } from 'recoil';

type ClientLayoutProps = {
  children: React.ReactNode;
};

const queryCache = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

export default function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryCache}>
        <div className="max-w-xl w-full">{children}</div>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </RecoilRoot>
  );
}
