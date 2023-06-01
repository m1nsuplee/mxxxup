'use client';

import { HTMLInputTypeAttribute } from 'react';
import { RegisterOptions, useFormContext } from 'react-hook-form';

type InputProps = {
  name: string;
  placeholder?: string;
  className?: string;
  accept?: string;
  type?: HTMLInputTypeAttribute;
} & RegisterOptions;

const Input: React.FC<InputProps> = (props) => {
  const {
    name,
    placeholder,
    type = 'text',
    className,
    accept,
    ...registerOptions
  } = props;

  const { register } = useFormContext();

  return (
    <input
      className={`${className}`}
      accept={accept}
      type={type}
      placeholder={typeof placeholder === 'string' ? placeholder : undefined}
      {...register(name, registerOptions)}
    />
  );
};

export default Input;
