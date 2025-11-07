import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  'aria-label'?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled,
  className = '',
  'aria-label': ariaLabel,
}) => (
  <button
    onClick={onClick}
    disabled={disabled}
    aria-label={ariaLabel}
    className={`rounded-full border border-[#dceaea] bg-white p-3 text-[#2f6d8b] shadow-sm transition-all duration-300 hover:border-[#2f6d8b]/40 hover:bg-[#f4fbfb] disabled:cursor-not-allowed disabled:opacity-40 ${className}`}
  >
    {children}
  </button>
);

export default Button;
