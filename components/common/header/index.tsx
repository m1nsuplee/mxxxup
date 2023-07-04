import Link from 'next/link';
import { Path } from '@/lib';
import { Montserrat } from 'next/font/google';
import clsx from 'clsx';
import Nav from './nav';

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
  return (
    <header className="w-full h-10 flex justify-between items-center">
      <Link
        href={Path.home}
        className={clsx(logoFont.className, 'text-2xl')}
      >
        {'ZeroSugarHigh'}
      </Link>
      <Nav user={user} />
    </header>
  );
}
