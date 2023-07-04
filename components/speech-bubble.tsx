import clsx from 'clsx';

type SpeechBubbleProps = {
  children: React.ReactNode;
};

export default function SpeechBubble({ children }: SpeechBubbleProps) {
  return (
    <div
      className={clsx(
        'relative w-fit h-12 rounded-lg px-4',
        'text-center leading-[3rem]',
        'bg-primary text-white',
        'text-xs animate-bounce'
      )}
    >
      {children}
      <div
        className={clsx(
          'w-0 h-0 absolute left-1/2',
          'border-l-[10px] border-l-transparent',
          'border-t-[10px] border-t-primary',
          'border-r-[10px] border-r-transparent'
        )}
      ></div>
    </div>
  );
}
