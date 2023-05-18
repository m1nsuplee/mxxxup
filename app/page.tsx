import { supabase } from '@/lib/supabaseClient';

export async function fetchCountries() {
  const { data: countries } = await supabase.from('countries').select();

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
