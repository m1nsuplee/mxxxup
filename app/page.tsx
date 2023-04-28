import { IconAddReaction } from '@/assets/icons';

export default function Home() {
  return (
    <main className="min-h-screen flex justify-center items-center">
      {'m1nsuppp'.split('').map((_, index) => (
        <code key={index}>
          <IconAddReaction width={index * 12} height={index * 12} />
        </code>
      ))}
    </main>
  );
}
