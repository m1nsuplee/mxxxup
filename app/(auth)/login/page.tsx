import { KakaoLoginButton } from '@/components/auth';
import SpeechBubble from '@/components/speech-bubble';
import clsx from 'clsx';

export default async function LoginPage() {
  return (
    <main className={clsx('min-h-screen', 'flex justify-center items-center')}>
      <div className="flex flex-col justify-center items-center gap-y-4">
        <SpeechBubble>{'3초 만에 회원가입하기'}</SpeechBubble>
        <KakaoLoginButton />
      </div>
    </main>
  );
}
