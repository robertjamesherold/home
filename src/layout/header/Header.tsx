type HeaderProps = {
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLElement>;

const Header: React.FC<HeaderProps> = ({
  children,className,
  
}: {children:React.ReactNode, className?:string}) => {

  return (
    <Header
      className={`relative ${className}`}
    >
      {children}
    </Header>
  );
};

export default Header;
