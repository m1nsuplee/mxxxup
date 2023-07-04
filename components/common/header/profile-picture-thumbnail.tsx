import { Path } from '@/lib';
import Link from 'next/link';
import Image from 'next/image';

type ProfilePictureThumbnailProps = {
  user: User;
};

export default function ProfilePictureThumbnail({
  user,
}: ProfilePictureThumbnailProps) {
  return (
    <Link
      href={Path.auth.mypage}
      className="w-10 h-10"
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
