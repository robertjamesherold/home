import * as React from 'react';
import useVariants from '@theme/variants.theme'
import { cn } from './utils';

type BadgeProps = {
  variant?: string
  className?: string
  props?: React.HTMLAttributes<HTMLDivElement>
  asChild?: boolean
  children?: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>







const Badge: React.FC<BadgeProps> = ( {
  className,
  variant,
  props,
  asChild = false,
  children
}: BadgeProps ) =>   
{
  const { base, variants } = useVariants()
    const variantValue = variant === 'default' ? variants[0].default : variant === 'secondary' ? variants[0].secondary : variant === 'destructive' ? variants[0].destructive : variant === 'outline' ? variants[0].outline : variant === 'danger' ? variants[0].danger : variant === 'success' ? variants[0].success : variant === 'info' ? variants[0].info : variant === 'service' ? variants[0].service : variant === 'enhancement' ? variants[0].enhancement : variant === 'complete' ? variants[0].complete : variant === 'assistance' ? variants[0].assistance : variants[0].default

  
  const badgeVariants = cn(
    base,
    variantValue
  )
  const Comp = asChild ? React.Fragment : 'div';




  return (
    <Comp
      data-slot="badge"
      className={ `${ badgeVariants } ${ className }` }
      { ...props }
    >
      { children }
    </Comp>
  );
}

export default Badge
export { Badge }