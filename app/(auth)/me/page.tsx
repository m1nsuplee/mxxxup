import { getCurrentUser, Path } from '@/lib';
import { Profile } from '@/components/auth';
import { Button } from '@/components/common';
import Link from 'next/link';

export default async function MyPage() {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <div className="max-w-3xl w-full h-screen flex flex-col justify-center items-center gap-y-10">
        <h1 className="text-xl">{'사용자 정보가 존재하지 않습니다.'}</h1>
        <Link
          href={Path.login}
          className="w-60 h-14"
        >
          <Button type="button">{'로그인'}</Button>
        </Link>
      </div>
    );
  }

  return (
    <main className="max-w-3xl w-full min-h-screen mx-auto">
      <Profile user={currentUser} />
    </main>
  );
}
