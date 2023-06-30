'use client';

import Link from 'next/link';
import Button from './button';
import { Path } from '@/lib';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

type HeaderProps = {
  user: User | undefined;
};

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
    <header className="w-full flex justify-between items-center h-10">
      <Link href={Path.home}>{'skrrt'}</Link>
      {isAuthPage(currentPage) ? null : (
        <Link
          href={user ? Path.auth.mypage : Path.auth.login}
          className={user ? 'w-10 h-10' : 'w-16 h-10'}
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
            <Button
              type="button"
              variant="grayscale"
              className="text-sm text-gray-400 hover:text-white"
            >
              {'로그인'}
            </Button>
          )}
        </Link>
      )}
    </header>
  );
}
