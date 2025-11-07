import type { FC } from 'react';

import { cn } from '@/ui/utils';

type LatencyLoaderProps = {
  isVisible: boolean;
  progress: number;
  label?: string;
  className?: string;
  showProgress?: boolean;
  variant?: 'overlay' | 'inline';
};

const LatencyLoader: FC<LatencyLoaderProps> = ({
  isVisible,
  className,
  variant = 'inline',
}) => {
  const wrapperBase =
    variant === 'overlay'
      ? 'pointer-events-none absolute inset-0 flex items-center justify-center'
      : 'flex w-full items-center justify-center';

  return (
    <div
      className={cn(
        wrapperBase,
        isVisible ? 'opacity-100' : 'opacity-0',
        className
      )}
      aria-hidden={!isVisible}
    >
      <div
        className="flex h-full w-full animate-pulse flex-col items-center gap-2 bg-amber-400 px-4 py-3 text-xs font-medium shadow-lg backdrop-blur"
        role="status"
        aria-live="polite"
      ></div>
    </div>
  );
};

export default LatencyLoader;
