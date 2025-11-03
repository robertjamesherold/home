const Container = ({
  children,
  outerClass,
  innerClass,
}: {
  children: React.ReactNode;
  outerClass?: string;
  innerClass?: string;
}) => {
  return (
    <div className={outerClass}>
      <div className={innerClass}>{children}</div>
    </div>
  );
};
export default Container;
