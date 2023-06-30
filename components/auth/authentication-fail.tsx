import Link from 'next/link';
import { Button } from '@/components/common';
import { Path } from '@/lib';

export default function AuthenticationFail() {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-y-10">
      <h1 className="text-xl">{'사용자 정보가 존재하지 않습니다.'}</h1>
      <Link
        href={Path.login}
        className="w-60 h-14"
      >
        <Button
          type="button"
          variant="grayscale"
        >
          {'로그인'}
        </Button>
      </Link>
    </div>
  );
}
