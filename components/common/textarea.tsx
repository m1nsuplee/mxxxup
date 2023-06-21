import clsx from 'clsx';
import { RegisterOptions, useFormContext } from 'react-hook-form';

type TextareaProps = {
  name: string;
  placeholder?: string;
  className?: string;
  maxLength?: number;
  rows?: number;
} & RegisterOptions;

const Textarea: React.FC<TextareaProps> = ({
  name,
  placeholder,
  className,
  maxLength,
  rows = 1,
  ...registerOptions
}) => {
  const { register } = useFormContext();

  const handleTextareaInput = (event: React.FormEvent<HTMLTextAreaElement>) => {
    event.currentTarget.style.height = 'auto';
    event.currentTarget.style.height = `${event.currentTarget.scrollHeight}px`;
  };

  return (
    <textarea
      className={clsx(
        className,
        'focus:outline-none text-black w-full p-3',
        'rounded-lg text-sm'
      )}
      placeholder={placeholder}
      maxLength={maxLength}
      rows={rows}
      onInput={handleTextareaInput}
      {...register(name, registerOptions)}
    />
  );
};

export default Textarea;
