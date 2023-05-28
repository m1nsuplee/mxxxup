import { db } from '@/lib/db';

export default async function HomePage() {
  const { data: countries } = await db.from('countries').select();

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
