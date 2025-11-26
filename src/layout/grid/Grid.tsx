import type { FC, PropsWithChildren } from 'react';

type GridProps = PropsWithChildren<{
  className?: string;
}>;

const Grid: FC<GridProps> = ({ children, className = '' }) => (
  <div className={['grid', className].filter(Boolean).join(' ')}>
    {children}
  </div>
);

export default Grid;
