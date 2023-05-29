'use client';

import { signIn } from 'next-auth/react';
import KakaoLoginSymbol from '@/assets/kakao-login.svg';
import { PATH } from '@/lib/constants';

const KakaoLoginButton: React.FC = () => {
  const kakaoLogin = () => {
    signIn('kakao', {
      callbackUrl: PATH.mypage,
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
