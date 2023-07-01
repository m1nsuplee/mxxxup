'use client';

import Link from 'next/link';
import Button from './button';
import { Path } from '@/lib';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Montserrat } from 'next/font/google';
import clsx from 'clsx';

type HeaderProps = {
  user: User | undefined;
};

const logoFont = Montserrat({
  preload: true,
  style: 'normal',
  weight: '200',
  subsets: ['latin'],
});

const isAuthPage = (page: string | null) => {
  if (page) {
    const authPages = Object.values(Path.auth);

    return authPages.includes(page);
  }

  return false;
};

export default function Header({ user }: HeaderProps) {
  const currentPage = usePathname();

  return (
    <header className="w-full h-10 flex justify-between items-center">
      <Link
        href={Path.home}
        className={clsx(logoFont.className, 'text-2xl')}
      >
        {'idkyet'}
      </Link>
      {isAuthPage(currentPage) ? null : (
        <Link
          href={user ? Path.auth.mypage : Path.auth.login}
          className={user ? 'w-10 h-10' : 'h-10 w-40'}
        >
          {user ? (
            <Image
              src={user.image || ''}
              alt="User Profile Image"
              width={40}
              height={40}
              className="w-full h-full rounded-full"
            />
          ) : (
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
                className="text-sm text-gray-100 hover:text-white"
              >
                {'회원가입'}
              </Button>
            </div>
          )}
        </Link>
      )}
    </header>
  );
}
