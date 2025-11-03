type MainProps = {
  children?: React.ReactNode;
  className?: string;
};

const Main: React.FC<MainProps> = ({ children, className }: MainProps) => {
  return (
    <main className={`grid w-screen auto-rows-auto overflow-clip ${className}`}>
      {children}
    </main>
  );
};

export default Main;
