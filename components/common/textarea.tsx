import clsx from 'clsx';
import { RegisterOptions, useFormContext } from 'react-hook-form';

type TextareaProps = {
  name: string;
  placeholder?: string;
  className?: string;
  maxLength?: number;
  rows?: number;
  onSubmit?: () => void;
} & RegisterOptions;

const Textarea: React.FC<TextareaProps> = ({
  name,
  placeholder,
  className,
  maxLength,
  rows = 1,
  ...registerOptions
}) => {
  const { register, reset } = useFormContext();

  const handleTextareaKeyDown = (
    event: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    const isShiftEnter = event.shiftKey && event.key === 'Enter';

    const isEnter = !event.shiftKey && event.key === 'Enter';

    if (isShiftEnter) {
      event.currentTarget.style.height = `${event.currentTarget.scrollHeight}px`;
    } else if (isEnter) {
      reset();
    }
  };

  return (
    <textarea
      className={clsx(
        className,
        'focus:outline-none text-black w-full p-3',
        'rounded-lg text-sm resize-none max-h-72'
      )}
      placeholder={placeholder}
      maxLength={maxLength}
      rows={rows}
      onKeyDown={handleTextareaKeyDown}
      style={{ height: '44px' }}
      {...register(name, registerOptions)}
    />
  );
};

export default Textarea;
