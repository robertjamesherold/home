import type { FC } from 'react';
import { cn } from '@/ui/utils';

type ImageProps = {
  src?: string;
  alt?: string;
  className?: string;
  imageClassName?: string;
  isAbsolute?: boolean;
};

const Image: FC<ImageProps> = ({
  src,
  alt = '',
  className,
  imageClassName,
  isAbsolute = false,
}) => {
  return (
    <div
      className={cn(
        'overflow-hidden',
        isAbsolute ? 'absolute inset-0' : 'relative',
        className
      )}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={cn(
            'relative h-full w-full object-cover transition-opacity duration-300',
            imageClassName
          )}
        />
      ) : null}
    </div>
  );
};

export default Image;
