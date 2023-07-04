'use client';

import Link from 'next/link';
import { Path } from '@/lib';
import { usePathname } from 'next/navigation';
import { Montserrat } from 'next/font/google';
import clsx from 'clsx';
import Nav from './nav';
import ProfilePictureThumbnail from './profile-picture-thumbnail';

type HeaderProps = {
  user: User | undefined;
};

const logoFont = Montserrat({
  preload: true,
  style: 'normal',
  weight: '200',
  subsets: ['latin'],
});

export default function Header({ user }: HeaderProps) {
  const currentPage = usePathname();

  const isAuthenticationRequiredPage = (page: string | null) => {
    if (page) {
      const authPages = Object.values(Path.auth);

      return authPages.includes(page);
    }

    return false;
  };

  const renderProfilePictureTumbnailOrNav = () => {
    if (isAuthenticationRequiredPage(currentPage)) {
      return null;
    }

    if (user) {
      return <ProfilePictureThumbnail user={user} />;
    }

    return <Nav />;
  };

  return (
    <header className="w-full h-10 flex justify-between items-center">
      <Link
        href={Path.home}
        className={clsx(logoFont.className, 'text-2xl')}
      >
        {'ZeroSugarHigh'}
      </Link>
      {renderProfilePictureTumbnailOrNav()}
    </header>
  );
}
