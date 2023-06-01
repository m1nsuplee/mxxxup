import { db, getCurrentUser, PATH } from '@/lib';
import { redirect } from 'next/navigation';

export default async function HomePage() {
  const { data: countries } = await db.from('countries').select();

  const currentUser = await getCurrentUser();

  if (!currentUser) {
    redirect(PATH.login);
  }

  if (!countries) {
    return <p>no country data.</p>;
  }

  return (
    <main>
      {countries.map((country) => (
        <p key={country.id}>{country.name}</p>
      ))}
    </main>
  );
}
