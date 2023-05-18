import { db } from '@/lib/db';

export async function fetchCountries() {
  const { data: countries } = await db.from('countries').select();

  return countries;
}

export default async function Home() {
  const countries = await fetchCountries();

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
