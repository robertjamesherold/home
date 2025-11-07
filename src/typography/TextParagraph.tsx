import { number } from 'motion/react'
import type { ReactNode } from 'react';

type TextParagraphProps = {
  text?: string | number;
  lg?: boolean;
  md?: boolean;
  sm?: boolean;
  xs?: boolean;
  className?: string;
  children?: ReactNode;
};

const TextParagraph: React.FC<TextParagraphProps> = ({
  text,
  lg,
  md,
  sm,
  xs,
  className = '',
  children,
}) => {
  const sizeClass = lg ? 'text-lg'
    : md ? 'text-base'
      : sm ? 'text-sm'
        : xs ? 'text-xs'
          : 'text-base';
  const content = children ?? text;

  if (content == null || content === '') {
    return null;
  }

  return (
    <p className={`${sizeClass} leading-relaxed ${className}`}>{content}</p>
  );
};

export type { TextParagraphProps };
export default TextParagraph;
