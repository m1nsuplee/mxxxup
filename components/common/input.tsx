'use client';

import clsx from 'clsx';
import { HTMLInputTypeAttribute } from 'react';
import { RegisterOptions, useFormContext } from 'react-hook-form';

type InputProps = {
  name: string;
  placeholder?: string;
  className?: string;
  accept?: string;
  type?: HTMLInputTypeAttribute;
  maxLength?: number;
} & RegisterOptions;

const Input: React.FC<InputProps> = ({
  name,
  placeholder,
  type = 'text',
  className,
  accept,
  maxLength,
  ...registerOptions
}) => {
  const { register } = useFormContext();

  return (
    <input
      className={clsx(
        className,
        'focus:outline-none text-black w-full p-3',
        'rounded-lg text-sm'
      )}
      accept={accept}
      type={type}
      placeholder={typeof placeholder === 'string' ? placeholder : undefined}
      maxLength={maxLength}
      {...register(name, registerOptions)}
    />
  );
};

export default Input;
