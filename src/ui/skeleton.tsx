import { cn } from './utils';

function Skeleton({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="skeleton"
      className={ cn( 'animate-pulse bg-slate-500 rounded - md', className ) }
      {...props}
    />
  );
}

export { Skeleton };
