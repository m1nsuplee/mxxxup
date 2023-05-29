import { cn } from '@/lib';
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
      className={cn(
        className,
        'w-full h-full rounded',
        'border border-border-gray'
      )}
      disabled={isLoading}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
