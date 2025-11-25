import { useEffect, useRef, useState } from 'react';

type UseSkeletonLoaderOptions = {
  isLoading: boolean;
  delay?: number;
  minDuration?: number;
};

type UseSkeletonLoaderReturn = {
  showSkeleton: boolean;
  showContent: boolean;
};

const DEFAULT_DELAY = 120;
const DEFAULT_MIN_DURATION = 400;

const useSkeletonLoader = ({
  isLoading,
  delay = DEFAULT_DELAY,
  minDuration = DEFAULT_MIN_DURATION,
}: UseSkeletonLoaderOptions): UseSkeletonLoaderReturn => {
  const [showSkeleton, setShowSkeleton] = useState(isLoading);
  const skeletonShownAt = useRef<number | null>(null);
  const timeoutId = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    // Initialize skeletonShownAt on mount if loading initially to avoid calling Date.now() during render
    if (isLoading) {
      skeletonShownAt.current = Date.now();
    }
    // run only once on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const isClient = typeof window !== 'undefined';

    const clearTimer = () => {
      if (timeoutId.current !== null) {
        clearTimeout(timeoutId.current);
        timeoutId.current = null;
      }
    };

    clearTimer();

    if (!isClient) {
      setShowSkeleton(isLoading);
      return () => undefined;
    }

    if (isLoading) {
      const show = () => {
        skeletonShownAt.current = Date.now();
        setShowSkeleton(true);
      };

      if (delay > 0) {
        timeoutId.current = setTimeout(show, delay);
      } else {
        show();
      }

      return () => {
        clearTimer();
      };
    }

    if (!showSkeleton) {
      skeletonShownAt.current = null;
      return () => clearTimer();
    }

    const elapsed = skeletonShownAt.current
      ? Date.now() - skeletonShownAt.current
      : minDuration;
    const remaining = Math.max(minDuration - elapsed, 0);

    timeoutId.current = setTimeout(() => {
      skeletonShownAt.current = null;
      setShowSkeleton(false);
    }, remaining);

    return () => {
      clearTimer();
    };
  }, [isLoading, delay, minDuration, showSkeleton]);

  return {
    showSkeleton,
    showContent: !showSkeleton,
  };
};

export { useSkeletonLoader };
export type { UseSkeletonLoaderOptions, UseSkeletonLoaderReturn };
