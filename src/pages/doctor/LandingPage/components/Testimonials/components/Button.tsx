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
    className={`p-3 border-2 border-slate-300 bg-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 ${className}`}
  >
    {children}
  </button>
);

export default Button