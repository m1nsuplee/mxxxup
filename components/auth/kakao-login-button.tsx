'use client';

import { signIn } from 'next-auth/react';
import KakaoLoginSymbol from '@/assets/kakao-login.svg';
import { Path } from '@/lib';

const KakaoLoginButton: React.FC = () => {
  const kakaoLogin = () => {
    signIn('kakao', {
      callbackUrl: Path.auth.mypage,
    });
  };

  return (
    <button
      type="button"
      id="kakao-login"
      onClick={kakaoLogin}
    >
      <KakaoLoginSymbol
        width={288}
        height={80}
      />
    </button>
  );
};

export default KakaoLoginButton;
