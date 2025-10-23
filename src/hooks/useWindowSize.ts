import { useEffect, useState } from "react";

export const useWindowSize = () => {
  // Hilfsfunktion: liest die aktuelle Größe des Body-Elements
  const getWindowSize = () => {
    return {
      width: window?.innerWidth || 0,
      height: window?.innerHeight || 0,
    };
  };

  // Lazy Init → wird nur im Browser ausgeführt
  const [windowSize, setWindowSize] = useState(() =>
    typeof window !== "undefined" ? getWindowSize() : { width: 0, height: 0 }
  );

  useEffect(() => {
    const handleResize = () => {
      const next = getWindowSize();
      // Nur updaten, wenn sich was geändert hat
      setWindowSize((prev) =>
        prev.width !== next.width || prev.height !== next.height ? next : prev
      );
    };

    // Initial synchronisieren
    handleResize();

    // Eventlistener registrieren
    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    // Cleanup bei Unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, []);

  return windowSize; // { width: number, height: number }
};