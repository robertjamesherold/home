import { useEffect, useState } from 'react';


const useElementSize = <T extends HTMLElement>(
  ref: React.RefObject<T | null>
) => {
  const [size, setSize] = useState<{ width: number; height: number }>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (!ref.current) return;

    const getSize = () => {
      if (ref.current) {
        const { width, height } = ref.current.getBoundingClientRect();
        return { width, height };
      }
      return { width: 0, height: 0 };
    };

    const handleResize = () => {
      const next = getSize();
      setSize((prev) =>
        prev.width !== next.width || prev.height !== next.height ? next : prev
      );
    };

    // Initial messen
    handleResize();

    // Beobachte Größenänderungen direkt am Element
    const observer = new ResizeObserver(handleResize);
    observer.observe(ref.current);

    // Fallback: Reagiere auch auf Fenster- und Ausrichtungsänderungen
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, [ref]);

  return size; // { width, height }
}

export default useElementSize;