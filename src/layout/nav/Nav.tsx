import { forwardRef } from 'react'

type NavProps = {
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLElement>;

const Nav = forwardRef<HTMLElement, NavProps>( ( {
  children,
  className,
  ...rest
}, ref?) =>
{
  return <nav ref={ ref } className={ `relative ${ className }` } { ...rest }>{ children }</nav>
} );

export default Nav;
