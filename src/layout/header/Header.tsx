import { forwardRef } from 'react'

type HeaderProps = {
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLElement>;

const Header = forwardRef<HTMLElement, HeaderProps>( (
  {
    children,
    className,
    ...rest
  }, ref?) =>
{
  return <header ref={ ref } className={ `relative ${ className }` } { ...rest }>{ children }</header>
} );

export default Header;
