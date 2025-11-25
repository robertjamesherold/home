type IconProps = {
  Icon: React.ElementType;
  size?: number;
  className?: string;
};

const Icon: React.FC<IconProps> = ({ Icon, size, className }) => {
  const sizeClass =
    size === 4
      ? 'size-4'
      : size === 5
      ? 'size-5'
      : size === 6
      ? 'size-6'
      : size === 7
      ? 'size-7'
      : size === 8
      ? 'size-8'
      : 'size-4';

  return <Icon className={`${sizeClass} ${className ?? ''}`} />;
};

export default Icon;
