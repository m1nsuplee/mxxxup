import clsx from 'clsx';
import { ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'grayscale';

type ButtonProps = {
  type: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  className?: string;
  isLoading?: boolean;
  variant: ButtonVariant;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'>;

const Button: React.FC<ButtonProps> = ({
  type,
  className,
  isLoading,
  children,
  variant,
  ...rest
}) => {
  return (
    <button
      type={type}
      className={clsx(
        className,
        'w-full h-full p-2',
        variant === 'primary' ? 'bg-primary' : 'bg-dark'
      )}
      disabled={isLoading}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
