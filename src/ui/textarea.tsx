import * as React from 'react';

import { cn } from './utils';

type ProductContextType = {
  className?: string
  children?: React.ReactNode
  placeholder?: string
} & React.HTMLAttributes<HTMLTextAreaElement>

function Textarea ( { className, placeholder, ...props }: ProductContextType )
{
  return (
    <textarea
      placeholder={ placeholder }
      data-slot="textarea"
      className={cn(
        'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive field-sizing-content bg-input-background flex min-h-16 w-full resize-none rounded-md border border-input px-3 py-2 text-base outline-none transition-[color,box-shadow] placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-input/30 md:text-sm',
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
