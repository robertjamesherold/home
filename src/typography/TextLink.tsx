import type { ReactNode } from 'react';

type TextLinkProps = {
  text?: string;
  lg?: boolean;
  md?: boolean;
  sm?: boolean;
  xs?: boolean;
  className?: string;
  children?: ReactNode;
  href: string;
};

const TextLink: React.FC<TextLinkProps> = ({
  text,
  lg,
  md,
  sm,
  xs,
  className = '',
  children,
  href,
}) => {
  const sizeClass = lg
    ? 'text-lg'
    : md
      ? 'text-base'
      : sm
        ? 'text-sm'
        : xs
          ? 'text-xs'
          : 'text-base';
  const content = children ?? text;

  if (content == null || content === '') {
    return null;
  }

  return (
    <a
      href={href}
      className={`${sizeClass} leading-relaxed ${className} hover:text-blue-400 hover:underline`}
    >
      {content}
    </a>
  );
};

export default TextLink;
