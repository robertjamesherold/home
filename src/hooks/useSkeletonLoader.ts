import { useEffect, useRef, useState } from 'react';

type UseSkeletonLoaderOptions = {
  /**
   * Indicates whether the data required for the view is still loading.
   */
  isLoading: boolean;
  /**
   * Delay (in ms) before the skeleton becomes visible. Useful to avoid
   * flashing the skeleton for very fast requests.
   */
  delay?: number;
  /**
   * Minimum amount of time (in ms) the skeleton should stay visible once it
   * has been rendered. Prevents abrupt transitions.
   */
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
  const skeletonShownAt = useRef<number | null>(isLoading ? Date.now() : null);
  const timeoutId = useRef<ReturnType<typeof setTimeout> | null>(null);

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
