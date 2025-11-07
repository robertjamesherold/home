import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

type UseLatencyLoaderOptions = {
  /**
   * Delay before the indicator becomes visible (in ms).
   */
  delay?: number;
  /**
   * Minimum time (in ms) the indicator should remain visible once shown.
   */
  minimumVisible?: number;
  /**
   * Duration (in ms) the indicator should stay after completing.
   */
  finishDelay?: number;
  /**
   * Interval (in ms) for the pseudo progress ramp.
   */
  rampInterval?: number;
};

type UseLatencyLoaderReturn = {
  isVisible: boolean;
  progress: number;
  start: () => void;
  resolve: () => void;
  reset: () => void;
};

export const useLatencyLoader = (
  options?: UseLatencyLoaderOptions
): UseLatencyLoaderReturn => {
  const { delay, minimumVisible, finishDelay, rampInterval } = useMemo(
    () => ({
      delay: options?.delay ?? 350,
      minimumVisible: options?.minimumVisible ?? 400,
      finishDelay: options?.finishDelay ?? 200,
      rampInterval: options?.rampInterval ?? 180,
    }),
    [options?.delay, options?.finishDelay, options?.minimumVisible, options?.rampInterval]
  );

  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const appearedAtRef = useRef<number | null>(null);
  const delayTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const rampTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const finishTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearDelayTimer = useCallback(() => {
    if (delayTimerRef.current) {
      clearTimeout(delayTimerRef.current);
      delayTimerRef.current = null;
    }
  }, []);

  const clearRampTimer = useCallback(() => {
    if (rampTimerRef.current) {
      clearInterval(rampTimerRef.current);
      rampTimerRef.current = null;
    }
  }, []);

  const clearFinishTimer = useCallback(() => {
    if (finishTimerRef.current) {
      clearTimeout(finishTimerRef.current);
      finishTimerRef.current = null;
    }
  }, []);

  const clearAllTimers = useCallback(() => {
    clearDelayTimer();
    clearRampTimer();
    clearFinishTimer();
  }, [clearDelayTimer, clearFinishTimer, clearRampTimer]);

  const startRamp = useCallback(() => {
    clearRampTimer();
    rampTimerRef.current = setInterval(() => {
      setProgress((current) => {
        if (current >= 90) {
          return current;
        }
        const increment = 5 + Math.random() * 12;
        return Math.min(current + increment, 90);
      });
    }, rampInterval);
  }, [clearRampTimer, rampInterval]);

  const hideIndicator = useCallback(() => {
    clearAllTimers();
    appearedAtRef.current = null;
    setIsVisible(false);
    setProgress(0);
  }, [clearAllTimers]);

  const start = useCallback(() => {
    hideIndicator();
    delayTimerRef.current = setTimeout(() => {
      appearedAtRef.current = Date.now();
      setIsVisible(true);
      setProgress(10);
      startRamp();
    }, delay);
  }, [delay, hideIndicator, startRamp]);

  const resolve = useCallback(() => {
    clearDelayTimer();
    clearRampTimer();

    const timeVisible = appearedAtRef.current
      ? Date.now() - appearedAtRef.current
      : 0;
    const enforceVisibility = isVisible
      ? Math.max(minimumVisible - timeVisible, 0)
      : 0;
    const totalDelay = Math.max(finishDelay, enforceVisibility);

    setProgress(100);

    if (totalDelay <= 0) {
      hideIndicator();
      return;
    }

    clearFinishTimer();
    finishTimerRef.current = setTimeout(() => {
      hideIndicator();
    }, totalDelay);
  }, [
    clearDelayTimer,
    clearFinishTimer,
    clearRampTimer,
    finishDelay,
    hideIndicator,
    isVisible,
    minimumVisible,
  ]);

  const reset = useCallback(() => {
    hideIndicator();
  }, [hideIndicator]);

  useEffect(() => {
    return () => {
      clearAllTimers();
    };
  }, [clearAllTimers]);

  return {
    isVisible,
    progress,
    start,
    resolve,
    reset,
  };
};

