import { KakaoLoginButton } from '@/components/auth';
import clsx from 'clsx';

export default async function LoginPage() {
  return (
    <main className={clsx('min-h-screen', 'flex justify-center items-center')}>
      <KakaoLoginButton />
    </main>
  );
}
