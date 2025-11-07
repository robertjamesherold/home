import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { NavigationDots, Button } from './';

interface SliderControlsProps {
  onPrev: () => void;
  onNext: () => void;
  dotsCount: number;
  activeIndex: number;
  onDotClick: (index: number) => void;
  disabled: boolean;
}

const SliderControls: React.FC<SliderControlsProps> = ({
  onPrev,
  onNext,
  dotsCount,
  activeIndex,
  onDotClick,
  disabled,
}) => (
  <div className="mt-6 flex items-center justify-center gap-3 px-4 sm:mt-8 sm:gap-4">
    <Button
      onClick={onPrev}
      disabled={disabled}
      className="hover:border-[#2f6d8b]/40 hover:bg-[#f4fbfb]"
      aria-label="Vorheriges Testimonial"
    >
      <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
    </Button>

    <NavigationDots
      count={dotsCount}
      activeIndex={activeIndex}
      onDotClick={onDotClick}
      disabled={disabled}
    />

    <Button
      onClick={onNext}
      disabled={disabled}
      className="hover:border-[#2f6d8b]/40 hover:bg-[#f4fbfb]"
      aria-label="Nächstes Testimonial"
    >
      <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
    </Button>
  </div>
);

export default SliderControls;
