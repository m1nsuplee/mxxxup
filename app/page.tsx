export default function Home() {
  const arrayLength = 10;

  const foo: number[] = Array(arrayLength).fill(0);

  return (
    <main className="min-h-screen flex justify-center items-center">
      {foo.map((_, index) => (
        <span key={index} className="mx-1 hover:text-red-400">
          {++index}
        </span>
      ))}
    </main>
  );
}
