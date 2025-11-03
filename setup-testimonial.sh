#!/bin/bash

# Testimonial Component Setup Script
# Erstellt automatisch alle Dateien und Ordnerstruktur

echo "🚀 Erstelle Testimonial Component Struktur..."

# Basis-Verzeichnis (passe diesen Pfad an dein Projekt an)
BASE_DIR="src/pages/doctor/LandingPage/components/Testimonial"

# Erstelle Verzeichnisstruktur
mkdir -p "$BASE_DIR/components"
mkdir -p "$BASE_DIR/hooks"
mkdir -p "$BASE_DIR/types"
mkdir -p "$BASE_DIR/data"

echo "✅ Ordnerstruktur erstellt"

# ===== TYPES =====
cat > "$BASE_DIR/types/Testimonial.types.ts" << 'EOF'
export interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  image?: string;
}
EOF

echo "✅ Types erstellt"

# ===== CONSTANTS =====
cat > "$BASE_DIR/constants.ts" << 'EOF'
export const TRANSITION_MS = 1500;
export const AUTOPLAY_INTERVAL_MS = 8000;
export const SWIPE_THRESHOLD_PX = 50;
EOF

echo "✅ Constants erstellt"

# ===== DATA =====
cat > "$BASE_DIR/data/Testimonial.data.ts" << 'EOF'
import { Testimonial } from '../types/Testimonial.types';

const testimonialData: Testimonial[] = [
  {
    name: "Anna Schmidt",
    role: "Patientin seit 2022",
    content: "Die Behandlung war hervorragend! Das Team ist sehr professionell und einfühlsam. Ich fühlte mich von Anfang an gut aufgehoben.",
    rating: 5,
  },
  {
    name: "Michael Weber",
    role: "Patient seit 2021",
    content: "Endlich schmerzfrei! Die moderne Ausstattung und das kompetente Team haben mir sehr geholfen. Absolute Empfehlung!",
    rating: 5,
  },
  {
    name: "Sarah Müller",
    role: "Patientin seit 2023",
    content: "Kurze Wartezeiten, freundliches Personal und eine angenehme Atmosphäre. Hier fühlt man sich wirklich wohl.",
    rating: 5,
  },
];

export default testimonialData;
EOF

echo "✅ Data erstellt"

# ===== BUTTON COMPONENT =====
cat > "$BASE_DIR/components/Button.tsx" << 'EOF'
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  'aria-label'?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled,
  className = '',
  'aria-label': ariaLabel,
}) => (
  <button
    onClick={onClick}
    disabled={disabled}
    aria-label={ariaLabel}
    className={`p-3 border-2 border-slate-300 bg-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 ${className}`}
  >
    {children}
  </button>
);
EOF

echo "✅ Button Component erstellt"

# ===== TESTIMONIAL CARD =====
cat > "$BASE_DIR/components/TestimonialCard.tsx" << 'EOF'
import React from 'react';
import { Star } from 'lucide-react';
import { Testimonial } from '../types/Testimonial.types';

const TestimonialCard: React.FC<Testimonial> = ({ name, role, content, rating }) => (
  <div className="px-4 sm:px-8 md:px-12 lg:px-16 py-8 sm:py-12 md:py-16">
    <div className="max-w-4xl mx-auto text-center">
      {/* Rating Stars */}
      <div className="flex justify-center gap-1 mb-4 sm:mb-6">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 sm:w-6 sm:h-6 ${
              i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-slate-300'
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <blockquote className="text-slate-700 text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8 italic">
        "{content}"
      </blockquote>

      {/* Author */}
      <div>
        <p className="font-semibold text-slate-900 text-base sm:text-lg">{name}</p>
        <p className="text-slate-600 text-sm sm:text-base">{role}</p>
      </div>
    </div>
  </div>
);

export default TestimonialCard;
EOF

echo "✅ TestimonialCard Component erstellt"

# ===== NAVIGATION DOTS =====
cat > "$BASE_DIR/components/NavigationDots.tsx" << 'EOF'
import React from 'react';

interface NavigationDotsProps {
  count: number;
  activeIndex: number;
  onDotClick: (index: number) => void;
  disabled: boolean;
}

export const NavigationDots: React.FC<NavigationDotsProps> = ({
  count,
  activeIndex,
  onDotClick,
  disabled,
}) => (
  <div className="flex items-center gap-2">
    {[...Array(count)].map((_, idx) => {
      const isActive = activeIndex === idx;
      return (
        <button
          key={idx}
          onClick={() => onDotClick(idx)}
          disabled={disabled}
          className={`h-2 rounded-full transition-all duration-300 ${
            isActive ? 'bg-green-600 w-8' : 'bg-slate-300 hover:bg-slate-400 w-2'
          } disabled:cursor-not-allowed`}
          aria-label={`Gehe zu Testimonial ${idx + 1}`}
          aria-current={isActive ? 'true' : 'false'}
        />
      );
    })}
  </div>
);
EOF

echo "✅ NavigationDots Component erstellt"

# ===== SLIDER CONTROLS =====
cat > "$BASE_DIR/components/SliderControls.tsx" << 'EOF'
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './Button';
import { NavigationDots } from './NavigationDots';

interface SliderControlsProps {
  onPrev: () => void;
  onNext: () => void;
  dotsCount: number;
  activeIndex: number;
  onDotClick: (index: number) => void;
  disabled: boolean;
}

export const SliderControls: React.FC<SliderControlsProps> = ({
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
EOF

echo "✅ SliderControls Component erstellt"

# ===== CUSTOM HOOK =====
cat > "$BASE_DIR/hooks/useInfiniteSlider.ts" << 'EOF'
import { useEffect, useRef, useState } from 'react';
import { TRANSITION_MS, AUTOPLAY_INTERVAL_MS, SWIPE_THRESHOLD_PX } from '../constants';

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
      requestAnimationFrame(() => requestAnimationFrame(() => setUseTransition(true)));
    }
    if (currentIndex === 0) {
      setUseTransition(false);
      setCurrentIndex(slideCount - 2);
      requestAnimationFrame(() => requestAnimationFrame(() => setUseTransition(true)));
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
    const width = sliderRef.current.getBoundingClientRect().width || window.innerWidth;
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
EOF

echo "✅ useInfiniteSlider Hook erstellt"

# ===== MAIN COMPONENT =====
cat > "$BASE_DIR/Testimonial.tsx" << 'EOF'
import React from 'react';
import TestimonialCard from './components/TestimonialCard';
import { SliderControls } from './components/SliderControls';
import { useInfiniteSlider } from './hooks/useInfiniteSlider';
import testimonialData from './data/Testimonial.data';

const Testimonial: React.FC = () => {
  const data = testimonialData;
  if (!data || data.length === 0) return null;

  const slides = [data[data.length - 1], ...data, data[0]];
  
  const {
    currentIndex,
    useTransition,
    isLocked,
    sliderRef,
    setIsPaused,
    prevSlide,
    nextSlide,
    goToSlide,
    handleTransitionEnd,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
  } = useInfiniteSlider(data.length);

  const activeSlideIndex = (currentIndex - 1 + data.length) % data.length;

  return (
    <section
      className="py-8 sm:py-12 md:py-16 lg:py-20 w-full bg-white overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      {/* Header */}
      <div className="text-center mb-8 sm:mb-12 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-2 sm:mb-4">
          Das sagen unsere <span className="text-green-600">Patienten</span>!
        </h2>
      </div>

      {/* Slider */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-slate-50 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl">
          <div
            ref={sliderRef}
            onTransitionEnd={handleTransitionEnd}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            className="flex w-full touch-pan-y"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: useTransition ? 'transform 1500ms ease-in-out' : 'none',
            }}
          >
            {slides.map((testimonial, idx) => (
              <div key={idx} className="w-full flex-shrink-0">
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <SliderControls
          onPrev={prevSlide}
          onNext={nextSlide}
          dotsCount={data.length}
          activeIndex={activeSlideIndex}
          onDotClick={goToSlide}
          disabled={isLocked}
        />
      </div>

      {/* Footer */}
      <div className="text-center mt-8 sm:mt-12 px-4">
        <p className="text-sm sm:text-base md:text-lg text-slate-600">
          Über <span className="text-green-600 font-semibold">2.000 zufriedene Patienten</span> vertrauen auf unsere Expertise
        </p>
      </div>
    </section>
  );
};

export default Testimonial;
EOF

echo "✅ Main Testimonial Component erstellt"

# ===== INDEX FILE =====
cat > "$BASE_DIR/index.ts" << 'EOF'
export { default } from './Testimonial';
export type { Testimonial } from './types/Testimonial.types';
EOF

echo "✅ Index File erstellt"

# ===== README =====
cat > "$BASE_DIR/README.md" << 'EOF'
# Testimonial Component

## 📁 Struktur

```
Testimonial/
├── components/
│   ├── Button.tsx
│   ├── NavigationDots.tsx
│   ├── SliderControls.tsx
│   └── TestimonialCard.tsx
├── hooks/
│   └── useInfiniteSlider.ts
├── types/
│   └── Testimonial.types.ts
├── data/
│   └── Testimonial.data.ts
├── constants.ts
├── Testimonial.tsx
├── index.ts
└── README.md
```

## 🚀 Verwendung

```tsx
import Testimonial from '@/components/sections/Testimonial';

function App() {
  return <Testimonial />;
}
```

## ⚙️ Anpassungen

### Eigene Testimonials hinzufügen
Bearbeite `data/Testimonial.data.ts`

### Timing anpassen
Bearbeite `constants.ts`:
- `TRANSITION_MS` - Übergangsgeschwindigkeit
- `AUTOPLAY_INTERVAL_MS` - Zeit zwischen automatischen Slides
- `SWIPE_THRESHOLD_PX` - Mindest-Swipe-Distanz

## 📦 Abhängigkeiten

- React
- lucide-react
- Tailwind CSS
EOF

echo "✅ README erstellt"

echo ""
echo "🎉 Fertig! Alle Dateien wurden erstellt in: $BASE_DIR"
echo ""
echo "📂 Erstellte Struktur:"
echo "   ├── components/"
echo "   │   ├── Button.tsx"
echo "   │   ├── NavigationDots.tsx"
echo "   │   ├── SliderControls.tsx"
echo "   │   └── TestimonialCard.tsx"
echo "   ├── hooks/"
echo "   │   └── useInfiniteSlider.ts"
echo "   ├── types/"
echo "   │   └── Testimonial.types.ts"
echo "   ├── data/"
echo "   │   └── Testimonial.data.ts"
echo "   ├── constants.ts"
echo "   ├── Testimonial.tsx"
echo "   ├── index.ts"
echo "   └── README.md"
echo ""
echo "💡 Tipp: Passe BASE_DIR im Script an deinen Projektpfad an!"
