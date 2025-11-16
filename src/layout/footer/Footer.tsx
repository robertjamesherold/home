import { forwardRef } from 'react'

type FooterProps = {
  children: React.ReactNode
  className?: string
} & React.HTMLAttributes<HTMLElement>

const Footer = forwardRef<HTMLElement, FooterProps>( ( {
  children,
  className,
  ...rest
}, ref?) =>
{
  return <footer ref={ ref } className={ className } { ...rest }>{ children }</footer>
} );

export default Footer;
