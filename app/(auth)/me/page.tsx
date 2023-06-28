import { getCurrentUser } from '@/lib';
import { AuthenticationFail, Profile } from '@/components/auth';

export default async function MyPage() {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <AuthenticationFail />;
  }

  return (
    <main className="max-w-3xl w-full min-h-screen mx-auto">
      <Profile user={currentUser} />
    </main>
  );
}
