import clsx from 'clsx';
import { ButtonHTMLAttributes } from 'react';

type ButtonProps = {
  type: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  className?: string;
  isLoading?: boolean;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'>;

const Button: React.FC<ButtonProps> = ({
  type,
  className,
  isLoading,
  children,
  ...rest
}) => {
  return (
    <button
      type={type}
      className={clsx(
        className,
        'w-full h-full rounded bg-primary',
        'border border-border-gray p-2'
      )}
      disabled={isLoading}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
