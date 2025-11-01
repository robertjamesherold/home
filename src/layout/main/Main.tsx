type MainProps = {
  children?: React.ReactNode;
};

const Main: React.FC<MainProps> = ({ children }: MainProps) => {
  return (
    <main className={`grid w-screen auto-rows-auto overflow-clip`}>
      {children}
    </main>
  );
};

export default Main;
