import React, { useEffect } from 'react';
import { useDragScroll } from '../hooks/useDragScoll';
import type { Props } from '../types';

const HorizontalScrollList: React.FC<Props> = ({
  title,
  images,
  wheelMultiplier = 1,
  wheelRequiresShift = false,
  style,
}: Props) => {
  const ref = useDragScroll();
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      if (wheelRequiresShift && !e.shiftKey) return;
      // Verwende deltaY (meist vertikal) und fallback auf deltaX
      const delta = e.deltaY !== 0 ? e.deltaY : e.deltaX;
      if (!delta) return;
      e.preventDefault(); // verhindert vertikales Scrollen der Seite
      el.scrollLeft += delta * wheelMultiplier;
    };

    el.addEventListener('wheel', onWheel as EventListener, { passive: false });
    return () => el.removeEventListener('wheel', onWheel as EventListener);
  }, [ref, wheelMultiplier, wheelRequiresShift]);

  return (
    <section className="overflow-hidden">
      <div className="main max-h-11 pb-4">
        <h3 className="text-left text-xl font-bold leading-7">{title}</h3>
      </div>
      <div
        ref={ref}
        style={{
          overflowX: 'auto',
          overflowY: 'hidden',
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'none',
          ...style,
        }}
        id="draggable"
        className="draggable main scrollbar-hide flex w-screen cursor-grab flex-row overflow-y-hidden overscroll-x-contain scroll-smooth bg-scroll"
      >
        {images.map((image, index) => (
          <li
            key={index}
            className="h-39 min-w-69 mr-6 select-none overflow-hidden rounded-2xl last:mr-0"
          >
            <img
              draggable="false"
              className="h-full w-full select-none object-cover"
              src={image}
              alt="alt"
            />
          </li>
        ))}
      </div>
    </section>
  );
};

export default HorizontalScrollList;
