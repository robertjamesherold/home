import { type FC, useEffect, useState } from 'react';
import { cn } from '@/ui/utils';
import { Skeleton } from '@/ui/skeleton';

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
  const [isLoading, setIsLoading] = useState(Boolean(src));

  useEffect(() => {
    setIsLoading(Boolean(src));
  }, [src]);

  return (
    <div
      className={cn(
        'relative overflow-hidden',
        isAbsolute ? 'absolute inset-0 w-full' : 'relative',
        className
      )}
    >
      {src && isLoading ? (
        <Skeleton className="absolute inset-0 h-full w-full animate-pulse" aria-hidden />
      ) : null}
      {src ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={cn(
            'inset-0 h-full w-full object-cover transition-opacity duration-300',
            isLoading ? 'opacity-0' : 'opacity-100',
            imageClassName
          )}
          onLoad={() => setIsLoading(false)}
          onError={() => setIsLoading(false)}
        />
      ) : null}
    </div>
  );
};

export default Image;
