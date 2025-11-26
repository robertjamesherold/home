import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from './utils';



const badgeVariants = cva(
  'inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-yellow-400 text-white ',
        secondary:
          'border-transparent bg-gray-200 text-gray-900 ',
        complete:
          'border-transparent bg-lime-200 text-lime-700 ',
        assistance:
          'border-transparent bg-teal-200 text-teal-700 ',
        destructive:
          'border-transparent bg-red-600 text-white ',
        outline:
          'bg-gray-100 text-gray-900 border border-gray-300 ',
        danger:
          'border-transparent bg-blue-200 text-destructive',
        success:
          'border-transparent bg-green-200 text-green-700 ',
        info:
          'border-transparent bg-blue-200 text-blue-700 ',
        service:
          'border-transparent bg-purple-200 text-purple-700 ',
        enhancement:
          'border-transparent bg-indigo-200 text-indigo-700 ',

      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<'span'> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : 'span';

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
