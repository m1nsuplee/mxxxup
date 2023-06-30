import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib';

export const getCurrentUser = async () => {
  const session = await getServerSession(authOptions);

  return session?.user;
};
