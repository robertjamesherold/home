type ColumnProps = {
  className?: string;
  children?: React.ReactNode
  index?: number
} & React.HTMLAttributes<HTMLDivElement>;

const Column: React.FC<ColumnProps> = ( { children, className = '', index } ) => (
  <div key={ index } className={ [ 'flex flex-col', className ].filter( Boolean ).join( ' ' ) }>
    {children}
  </div>
);

export default Column;
