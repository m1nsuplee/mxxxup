import { KakaoLoginButton } from '@/components/auth';
import { cn } from '@/lib';

export default async function LoginPage() {
  return (
    <main className={cn('min-h-screen', 'flex justify-center items-center')}>
      <div
        className={cn(
          'w-80 border border-gray/20',
          'rounded-md flex flex-col justify-between items-center',
          'py-4'
        )}
      >
        <h1 className={cn('text-xl text-white/90 font-semibold')}>
          {'SKRRT 스껅~!🔥'}
        </h1>
        <KakaoLoginButton />
      </div>
    </main>
  );
}
