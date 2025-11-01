import type { ReactNode } from 'react';

type TextParagraphProps = {
  text?: string;
  lg?: boolean;
  md?: boolean;
  sm?: boolean;
  className?: string;
  children?: ReactNode;
};

const TextParagraph: React.FC<TextParagraphProps> = ({
  text,
  lg,
  md,
  sm,
  className = '',
  children,
}) => {
  const sizeClass = lg
    ? 'text-lg'
    : md
      ? 'text-base'
      : sm
        ? 'text-sm'
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
