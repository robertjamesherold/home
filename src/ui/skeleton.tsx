import { cn } from './utils';

function Skeleton({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="skeleton"
      className={ cn( '- md animate-pulse bg-slate-500', className ) }
      {...props}
    />
  );
}

export { Skeleton };
