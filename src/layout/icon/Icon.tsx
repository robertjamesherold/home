type IconProps = {
  Icon: React.ElementType;
  size?: number;
  className?: string;
};

const Icon: React.FC<IconProps> = ({ Icon, size, className }) => {
  const sizeClass = ( `size-${ size }` ) 

  return <Icon className={`${sizeClass} ${className ?? ''}`} />;
};

export default Icon;
