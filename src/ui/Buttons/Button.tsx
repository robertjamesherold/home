import React, {
  Children,
  cloneElement,
  isValidElement,
} from 'react';
import type { ReactElement, ReactNode } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'outline';

export interface ButtonProps {
  children?: ReactNode;
  onClick?: () => void;
  label?: ReactNode;
  className?: string;
  icon?: ReactElement<{ className?: string }>;
  autoIcon?: boolean;
  iconIndex?: number;
  iconClassName?: string;
  iconPosition?: 'left' | 'right';
  variant?: ButtonVariant;
  type?: 'button' | 'submit' | 'reset';
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-purple-600 text-white hover:bg-purple-700 font-bold text-lg',
  secondary:
    'bg-gray-900 text-white hover:bg-gray-800 font-bold text-lg',
  outline:
    'border-2 border-gray-300 hover:border-purple-300 font-semibold text-gray-900',
};

const baseClasses =
  'inline-flex items-center justify-center space-x-2 rounded-lg transition px-4 py-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-500 disabled:opacity-50 disabled:cursor-not-allowed';

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  onClick,
  label,
  className = '',
  icon,
  autoIcon = false,
  iconIndex = 0,
  iconClassName = 'w-6 h-6',
  iconPosition = 'left',
  type = 'button',
}) => {
  const childArray = Children.toArray(children);
  let resolvedIcon: ReactElement | null = null;
  let restChildren: ReactNode[] = childArray;

  const withClassName = (
    element: ReactElement<{ className?: string }>,
    extra: string,
  ) => {
    const existing = element.props.className ?? '';
    return cloneElement(element, {
      className: [existing, extra].filter(Boolean).join(' '),
    });
  };

  if (icon) {
    resolvedIcon = withClassName(icon, iconClassName);
  } else if (autoIcon) {
    const candidate = childArray[iconIndex];
    if (candidate && isValidElement(candidate)) {
      resolvedIcon = withClassName(
        candidate as ReactElement<{ className?: string }>,
        iconClassName,
      );
      restChildren = childArray.filter((_, index) => index !== iconIndex);
    }
  }

  const iconNode = resolvedIcon ? (
    <span className="flex-none">{resolvedIcon}</span>
  ) : null;

  const labelNode = label ? (
    <span className="flex-1 text-center">{label}</span>
  ) : null;

  const contentNode = restChildren.length > 0 ? (
    <span
      className={
        label
          ? 'flex-none inline-flex items-center space-x-2'
          : 'flex-1 inline-flex items-center justify-center space-x-2'
      }
    >
      {restChildren}
    </span>
  ) : null;

  return (
    <button
      type={type}
      onClick={onClick}
      className={[baseClasses, variantClasses[variant], className]
        .filter(Boolean)
        .join(' ')}
    >
      {iconPosition === 'left' && iconNode}
      {labelNode}
      {contentNode}
      {iconPosition === 'right' && iconNode}
    </button>
  );
};

export default Button;
