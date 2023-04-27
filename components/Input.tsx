import { HTMLInputTypeAttribute, InputHTMLAttributes } from 'react';
import { RegisterOptions, useFormContext } from 'react-hook-form';

type InputProps = {
  name: string;
  className?: string;
  accept?: string;
  type?: HTMLInputTypeAttribute;
} & RegisterOptions &
  Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>;

const Input: React.FC<InputProps> = (props) => {
  const {
    name,
    placeholder,
    type = 'text',
    className,
    accept,
    ...registerOptions
  } = props;

  const { register, formState, getFieldState } = useFormContext();

  const { error } = getFieldState(name, formState);

  return (
    <div className="flex flex-col w-full">
      <input
        className={`${className}`}
        accept={accept}
        type={type}
        placeholder={typeof placeholder === 'string' ? placeholder : undefined}
        {...register(name, registerOptions)}
      />
      {error && <p className="text-red-500">{error.message}</p>}
    </div>
  );
};

export default Input;
