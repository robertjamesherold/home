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
  <div className="flex justify-center items-center gap-3 sm:gap-4 mt-6 sm:mt-8 px-4">
    <Button
      onClick={onPrev}
      disabled={disabled}
      className="rounded-full hover:bg-green-600 hover:text-white hover:border-green-600"
      aria-label="Vorheriges Testimonial"
    >
      <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
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
      className="rounded-full hover:bg-green-600 hover:text-white hover:border-green-600"
      aria-label="Nächstes Testimonial"
    >
      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
    </Button>
  </div>
);

export default SliderControls