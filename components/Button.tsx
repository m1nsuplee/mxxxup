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
    <button type={type} className={`${className}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
