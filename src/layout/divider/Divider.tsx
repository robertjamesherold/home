type DividerProps = {
  fullWidth?: boolean;
};

const Divider: React.FC<DividerProps> = ({
  fullWidth = false,
}: DividerProps) => {
  return (
    <section
      className={`mx-auto w-full px-4 py-2 md:px-6 xl:px-8 ${fullWidth ? 'max-w-full' : 'max-w-7xl'}`}
    >
      <hr />
    </section>
  );
};

export { Divider as Hr };
