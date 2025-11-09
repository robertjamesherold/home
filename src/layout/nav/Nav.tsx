type NavProps = {
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLElement>;

const Nav: React.FC<NavProps> = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <nav className={`relative ${className}`}>{children}</nav>;
};

export default Nav;
