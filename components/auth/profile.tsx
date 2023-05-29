'use client';

import Image from 'next/image';
import { Button } from '@/components/common';
import { signOut } from 'next-auth/react';
import { PATH } from '@/lib';

type ProfileProps = {
  user: User;
};

const Profile: React.FC<ProfileProps> = ({ user }) => {
  const logout = () => {
    signOut({
      callbackUrl: PATH.login,
    });
  };

  return (
    <section className="px-10 py-4 w-full min-h-screen flex flex-col justify-between items-center">
      <div className="w-full flex justify-around">
        <div>
          <h1 className="text-lg font-bold">{`${user.name}님의 프로필`}</h1>
          <h3 className="text-gray text-sm">{user.email}</h3>
        </div>
        <div className="w-20 h-20">
          <Image
            src={user.image || ''}
            alt={`${user.name}님의 프로필 사진`}
            width={500}
            height={500}
            className="w-full h-full rounded-full border border-border-gray"
          />
        </div>
      </div>
      <div className="w-60 h-14">
        <Button
          type="button"
          onClick={logout}
        >
          {'로그아웃'}
        </Button>
      </div>
    </section>
  );
};

export default Profile;
