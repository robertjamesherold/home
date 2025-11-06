type HeaderProps = {
  children: React.ReactNode
  className?: string
} & React.HTMLAttributes<HTMLElement>

const Header: React.FC<HeaderProps> = ( { children, className }: { children: React.ReactNode, className?: string } ) =>
{
  return (
    <header className={ `relative ${ className }` }>
      { children }
    </header>
  )
}

export default Header
