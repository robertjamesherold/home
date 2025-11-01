import type { ReactNode } from 'react';

type LegacyLevelProps = {
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  h5?: boolean;
  h6?: boolean;
};

type LegacyWeightProps = {
  bold?: boolean;
  semibold?: boolean;
  medium?: boolean;
};

type TitleProps = {
  text?: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  weight?: 'bold' | 'semibold' | 'medium' | 'normal';
  className?: string;
  children?: ReactNode;
} & LegacyLevelProps &
  LegacyWeightProps;

const sizeMap: Record<1 | 2 | 3 | 4 | 5 | 6, string> = {
  1: 'text-5xl',
  2: 'text-4xl',
  3: 'text-3xl',
  4: 'text-2xl',
  5: 'text-base',
  6: 'text-sm',
};

const weightMap: Record<'bold' | 'semibold' | 'medium' | 'normal', string> = {
  bold: 'font-bold',
  semibold: 'font-semibold',
  medium: 'font-medium',
  normal: 'font-normal',
};

const resolveLevel = (props: TitleProps): 1 | 2 | 3 | 4 | 5 | 6 => {
  if (props.level) {
    return props.level;
  }

  if (props.h1) return 1;
  if (props.h2) return 2;
  if (props.h3) return 3;
  if (props.h4) return 4;
  if (props.h5) return 5;
  if (props.h6) return 6;

  return 3;
};

const resolveWeight = (
  props: TitleProps
): 'bold' | 'semibold' | 'medium' | 'normal' => {
  if (props.weight) {
    return props.weight;
  }

  if (props.bold) return 'bold';
  if (props.semibold) return 'semibold';
  if (props.medium) return 'medium';

  return 'normal';
};

const Title: React.FC<TitleProps> = ({
  text,
  className = '',
  children,
  ...rest
}) => {
  const level = resolveLevel(rest);
  const weight = resolveWeight(rest);
  const Tag = `h${level}` as keyof React.JSX.IntrinsicElements;
  const content = children ?? text;

  if (content == null || content === '') {
    return null;
  }

  return (
    <Tag className={`${sizeMap[level]} ${weightMap[weight]} ${className}`}>
      {content}
    </Tag>
  );
};

export type { TitleProps };
export default Title;
