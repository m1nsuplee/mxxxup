'use client';

import { Path } from '@/lib';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/common';
import clsx from 'clsx';

type NavProps = {
  user: User | undefined;
};

export default function Nav({ user }: NavProps) {
  const currentPage = usePathname();

  const isAuthenticationRequiredPage = (page: string | null) => {
    if (page) {
      const authPages = Object.values(Path.auth);

      return authPages.includes(page);
    }

    return false;
  };

  if (isAuthenticationRequiredPage(currentPage)) {
    return null;
  }

  if (user) {
    return (
      <Link
        href={Path.auth.mypage}
        className="w-10 h-full"
      >
        <Image
          src={user.image || ''}
          alt="User Profile Picture"
          width={40}
          height={40}
          className="w-full h-full rounded-full"
        />
      </Link>
    );
  }

  return (
    <Link
      href={Path.auth.login}
      className="w-40 h-full"
    >
      <div className="flex gap-x-4">
        <Button
          type="button"
          variant="grayscale"
          className="text-sm text-gray-400 hover:text-white"
        >
          {'로그인'}
        </Button>
        <Button
          type="button"
          variant="primary"
          className={clsx(
            'text-sm text-gray-100 hover:text-white',
            'rounded-[99px] border border-gray-700'
          )}
        >
          {'회원가입'}
        </Button>
      </div>
    </Link>
  );
}
