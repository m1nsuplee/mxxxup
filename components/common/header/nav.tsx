import { Path } from '@/lib';
import { Button } from '..';
import Link from 'next/link';
import clsx from 'clsx';

export default function Nav() {
  return (
    <Link
      href={Path.auth.login}
      className="w-40 h-10"
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
