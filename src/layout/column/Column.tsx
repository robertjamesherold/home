import type { FC, PropsWithChildren } from 'react';

type ColumnProps = PropsWithChildren<{
  className?: string;
}>;

const Column: FC<ColumnProps> = ({ children, className = '' }) => (
  <div className={['flex flex-col', className].filter(Boolean).join(' ')}>
    {children}
  </div>
);

export default Column;
