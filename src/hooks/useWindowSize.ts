import { useEffect, useState } from 'react';

export const useWindowSize = () => {
  const getWindowSize = () => {
    return {
      width: window?.innerWidth || 0,
      height: window?.innerHeight || 0,
    };
  };

  const [windowSize, setWindowSize] = useState(() =>
    typeof window !== 'undefined' ? getWindowSize() : { width: 0, height: 0 }
  );

  useEffect(() => {
    const handleResize = () => {
      const next = getWindowSize();
      // Nur updaten, wenn sich was geändert hat
      setWindowSize((prev) =>
        prev.width !== next.width || prev.height !== next.height ? next : prev
      );
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);

  return windowSize; // { width, height}
};
