import { KakaoLoginButton } from '@/components/auth';
import clsx from 'clsx';

export default async function LoginPage() {
  return (
    <main className={clsx('min-h-screen', 'flex justify-center items-center')}>
      <div
        className={clsx(
          'w-80 border border-gray/20',
          'rounded-md flex flex-col justify-between items-center',
          'py-4'
        )}
      >
        <h1 className={clsx('text-xl text-white/90 font-semibold')}>
          {'🔥SKRRT🔥'}
        </h1>
        <KakaoLoginButton />
      </div>
    </main>
  );
}
