import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority';
import { Icon as IconElement } from '@/layout';

import { cn } from './utils';
import { Link } from 'react-router-dom'

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: 'bg-orange-400 text-white hover:bg-orange-500',
        destructive:
          ' text-white bg-red-500 hover:bg-red-600/90 focus-visible:ring-red-400/20 dark:focus-visible:ring-red-400/40 dark:bg-red-300/60 ',
        outline:
          'border border-red-500 bg-white text-red-500 hover:bg-gray-100 hover:text-red-600 hover:border-red-600',
        secondary: 'bg-indigo-600 text-white hover:bg-indigo-700',
        ghost: 'text-orange-400 hover:bg-gray-100',
        link: 'text-orange-400 underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-9 px-4 py-2 has-[>svg]:px-3',
        sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
        lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
        icon: 'size-9 rounded-md',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);


type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    text?: string
    Icon?: React.ElementType
    iconSize?: number
  asChild?: boolean
  to?: string
  isLink?: boolean
  }

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>( (
  {
    className,
    variant,
    size,
    text,
    children,
    Icon,
    iconSize,
    to,
    isLink = false,
    asChild = false,
    ...props
  },
  ref
) =>
{
  const Comp = asChild ? Slot : 'button'

  if ( isLink ) return ( <>
    { to && <Link
      to={ to }
      data-slot="button"
      className={ cn(
        buttonVariants( { variant, size, className } ),
        'cursor-pointer'
      ) }
    >
      { children || text }
      { Icon && <IconElement Icon={ Icon } size={ iconSize } /> }
    </Link> }</>
  )

  else 
  return (
    <Comp
      ref={ ref }
      data-slot="button"
      className={ cn(
        buttonVariants( { variant, size, className } ),
        'cursor-pointer'
      ) }
      { ...props }
    >
      { children || text }
      { Icon && <IconElement Icon={ Icon } size={ iconSize } /> }
    </Comp>
  );
} )

Button.displayName = 'Button'

export { Button, buttonVariants }
