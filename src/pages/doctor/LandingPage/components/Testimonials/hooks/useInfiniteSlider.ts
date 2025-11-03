import { useEffect, useRef, useState } from 'react';
import {
  TRANSITION_MS,
  AUTOPLAY_INTERVAL_MS,
  SWIPE_THRESHOLD_PX,
} from '../constants';

export const useInfiniteSlider = (dataLength: number) => {
  const [currentIndex, setCurrentIndex] = useState<number>(1);
  const [useTransition, setUseTransition] = useState<boolean>(true);
  const [isLocked, setIsLocked] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const sliderRef = useRef<HTMLDivElement | null>(null);
  const touchStartXRef = useRef<number | null>(null);
  const touchDeltaXRef = useRef<number>(0);
  const isTouchingRef = useRef<boolean>(false);

  // Apply transform
  useEffect(() => {
    const el = sliderRef.current;
    if (!el || isTouchingRef.current) return;
    el.style.transition = useTransition
      ? `transform ${TRANSITION_MS}ms cubic-bezier(0.4, 0, 0.2, 1)`
      : 'none';
    el.style.transform = `translateX(-${currentIndex * 100}%)`;
  }, [currentIndex, useTransition]);

  // Handle infinite loop jumps
  const handleTransitionEnd = () => {
    const slideCount = dataLength + 2;
    if (currentIndex === slideCount - 1) {
      setUseTransition(false);
      setCurrentIndex(1);
      requestAnimationFrame(() =>
        requestAnimationFrame(() => setUseTransition(true))
      );
    }
    if (currentIndex === 0) {
      setUseTransition(false);
      setCurrentIndex(slideCount - 2);
      requestAnimationFrame(() =>
        requestAnimationFrame(() => setUseTransition(true))
      );
    }
  };

  // Lock mechanism
  const lockForTransition = () => {
    setIsLocked(true);
    setTimeout(() => setIsLocked(false), TRANSITION_MS + 50);
  };

  // Navigation functions
  const prevSlide = () => {
    if (isLocked) return;
    lockForTransition();
    setUseTransition(true);
    setCurrentIndex((i) => i - 1);
  };

  const nextSlide = () => {
    if (isLocked) return;
    lockForTransition();
    setUseTransition(true);
    setCurrentIndex((i) => i + 1);
  };

  const goToSlide = (index: number) => {
    if (isLocked) return;
    lockForTransition();
    setUseTransition(true);
    setCurrentIndex(index + 1);
  };

  // Autoplay
  useEffect(() => {
    if (isPaused || isLocked) return;
    const id = setInterval(() => {
      setCurrentIndex((i) => i + 1);
      setUseTransition(true);
    }, AUTOPLAY_INTERVAL_MS);
    return () => clearInterval(id);
  }, [isPaused, isLocked]);

  // Touch handlers
  const onTouchStart: React.TouchEventHandler = (e) => {
    if (!sliderRef.current) return;
    isTouchingRef.current = true;
    touchStartXRef.current = e.touches[0].clientX;
    touchDeltaXRef.current = 0;
    sliderRef.current.style.transition = 'none';
    setIsPaused(true);
  };

  const onTouchMove: React.TouchEventHandler = (e) => {
    if (!sliderRef.current || touchStartXRef.current === null) return;
    const delta = e.touches[0].clientX - touchStartXRef.current;
    touchDeltaXRef.current = delta;
    const width =
      sliderRef.current.getBoundingClientRect().width || window.innerWidth;
    const percentShift = (delta / width) * 100;
    sliderRef.current.style.transform = `translateX(-${currentIndex * 100 - percentShift}%)`;
  };

  const onTouchEnd: React.TouchEventHandler = () => {
    if (!sliderRef.current) return;
    isTouchingRef.current = false;
    const delta = touchDeltaXRef.current;
    touchStartXRef.current = null;
    touchDeltaXRef.current = 0;
    sliderRef.current.style.transition = `transform ${TRANSITION_MS}ms ease-in-out`;

    if (Math.abs(delta) > SWIPE_THRESHOLD_PX) {
      if (delta < 0) nextSlide();
      else prevSlide();
    } else {
      sliderRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
    setTimeout(() => setIsPaused(false), 300);
  };

  return {
    currentIndex,
    useTransition,
    isLocked,
    isPaused,
    sliderRef,
    setIsPaused,
    prevSlide,
    nextSlide,
    goToSlide,
    handleTransitionEnd,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
  };
};
