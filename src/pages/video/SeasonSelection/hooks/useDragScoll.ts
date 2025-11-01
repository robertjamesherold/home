import { useEffect, useRef } from 'react';
import type { UseDragScrollOptions } from '../types';

export function useDragScroll(options: UseDragScrollOptions = {}) {
  const {
    snap = false,
    snapSelector,
    snapBehavior = 'smooth',
    dragMultiplier = 1,
  } = options;

  const containerRef = useRef<HTMLDivElement | null>(null);

  const isDown = useRef(false);
  const startX = useRef(0);
  const startScrollLeft = useRef(0);
  const activePointerId = useRef<number | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onPointerDown = (e: PointerEvent) => {
      if (e instanceof PointerEvent && e.button && e.button !== 0) return;

      isDown.current = true;
      activePointerId.current = e.pointerId;
      (e.target as Element).setPointerCapture?.(e.pointerId);

      el.classList.add('grabbing');
      startX.current = e.pageX - el.offsetLeft;
      startScrollLeft.current = el.scrollLeft;
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isDown.current || activePointerId.current !== e.pointerId) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      const walk = (x - startX.current) * dragMultiplier;
      el.scrollLeft = startScrollLeft.current - walk;
    };

    const finishDrag = () => {
      if (!isDown.current) return;
      isDown.current = false;
      if (activePointerId.current != null) {
        try {
          el.releasePointerCapture?.(activePointerId.current);
        } catch {
          /* ignore */
        }
      }
      activePointerId.current = null;
      el.classList.remove('grabbing');

      if (snap) {
        const children: Element[] = snapSelector
          ? Array.from(el.querySelectorAll(snapSelector))
          : Array.from(el.children);

        if (children.length === 0) return;

        const currentScroll = el.scrollLeft;
        let nearest: Element | null = null;
        let nearestDistance = Number.POSITIVE_INFINITY;

        for (const child of children) {
          // Kind relativ zum Container
          const childOffset = (child as HTMLElement).offsetLeft;
          const dist = Math.abs(childOffset - currentScroll);
          if (dist < nearestDistance) {
            nearestDistance = dist;
            nearest = child;
          }
        }

        if (nearest) {
          const targetLeft = (nearest as HTMLElement).offsetLeft;
          el.scrollTo({ left: targetLeft, behavior: snapBehavior });
        }
      }
    };

    const onPointerUp = () => {
      finishDrag();
    };
    const onPointerCancel = () => {
      finishDrag();
    };
    const onPointerLeave = () => {
      finishDrag();
    };

    el.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove, { passive: false });
    window.addEventListener('pointerup', onPointerUp);
    el.addEventListener('pointercancel', onPointerCancel);
    el.addEventListener('pointerleave', onPointerLeave);

    return () => {
      el.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      el.removeEventListener('pointercancel', onPointerCancel);
      el.removeEventListener('pointerleave', onPointerLeave);
    };
  }, [snap, snapSelector, snapBehavior, dragMultiplier]);

  return containerRef;
}
