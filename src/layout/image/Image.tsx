import { type FC, useEffect, useState } from 'react';
import { cn } from '@/ui/utils';
import { Skeleton } from '@/ui/skeleton';
import { Loader2 } from 'lucide-react';

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
  const [currentSrc, setCurrentSrc] = useState(src);

  useEffect(() => {
    // Nur wenn sich die src wirklich ändert, neu laden
    if (src !== currentSrc) {
      setIsLoading(Boolean(src));
      setCurrentSrc(src);
    }
  }, [src, currentSrc]);

  return (
    <div
      className={cn(
        'relative overflow-hidden',
        isAbsolute ? 'absolute inset-0 w-full' : 'relative',
        className
      )}
    >
      {src && isLoading ? (
        <>
          <Skeleton className="absolute inset-0 h-full w-full animate-pulse" aria-hidden />
          <div className="absolute inset-0 flex items-center justify-center">
            <Loader2 className="size-10 animate-spin text-blue-400" />
          </div>
        </>
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
