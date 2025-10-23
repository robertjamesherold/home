import { useEffect, useMemo, useState, type CSSProperties, type ReactNode } from "react";

type SliderCard = {
  id: number | string;
  title: string;
  text: string;
  image?: string;
  eyebrow?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

interface SliderProps {
  slides?: SliderCard[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  className?: string;
  renderSlideContent?: (slide: SliderCard) => ReactNode;
  cardHeight?: string | number;
}

const defaultSlides: SliderCard[] = [
  {
    id: 1,
    title: "The Producers",
    text: "The top apple producers around the world are China, United States, Turkey, Poland and Italy.",
    image:
      "https://images.unsplash.com/photo-1458011170811-0c83ce240f99?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 2,
    title: "The Size",
    text: "Apple varieties range in size from a little larger than a cherry to as large as a grapefruit.",
    image:
      "https://images.unsplash.com/photo-1506277548624-5d9498cde122?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 3,
    title: "The Time",
    text: "Apple trees take four to five years to produce their first fruit.",
    image:
      "https://images.unsplash.com/photo-1503327655231-9a047d4772b6?auto=format&fit=crop&w=1600&q=80",
  },
];

const Slider = ({
  slides: providedSlides,
  autoPlay = true,
  autoPlayInterval = 6000,
  className,
  renderSlideContent,
  cardHeight = "70vh",
}: SliderProps) => {
  const slides = useMemo(() => providedSlides ?? defaultSlides, [providedSlides]);
  const totalSlides = slides.length;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visualIndex, setVisualIndex] = useState(() => (totalSlides > 1 ? 1 : 0));
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const extendedSlides = useMemo(() => {
    if (totalSlides <= 1) {
      return slides;
    }
    const first = slides[0];
    const last = slides[totalSlides - 1];
    return [last, ...slides, first];
  }, [slides, totalSlides]);

  useEffect(() => {
    if (totalSlides <= 1) {
      setCurrentIndex(0);
      setVisualIndex(0);
    } else {
      setCurrentIndex(0);
      setVisualIndex(1);
    }
  }, [totalSlides]);

  useEffect(() => {
    if (!isTransitionEnabled) {
      const id = window.requestAnimationFrame(() => {
        setIsTransitionEnabled(true);
      });

      return () => window.cancelAnimationFrame(id);
    }
  }, [isTransitionEnabled]);

  useEffect(() => {
    if (!autoPlay || isPaused || totalSlides <= 1) {
      return;
    }

    const timer = window.setInterval(() => {
      setIsTransitionEnabled(true);
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
      setVisualIndex((prev) => prev + 1);
    }, autoPlayInterval);

    return () => window.clearInterval(timer);
  }, [autoPlay, autoPlayInterval, isPaused, totalSlides]);

  if (totalSlides === 0) {
    return null;
  }

  const heroHeight = typeof cardHeight === "number" ? `${cardHeight}px` : cardHeight;
  const wrapperStyle: CSSProperties = {
    minHeight: heroHeight,
    height: heroHeight,
  };

  const trackStyle: CSSProperties = totalSlides > 1
    ? {
        transform: `translateX(-${visualIndex * 100}%)`,
        transition: isTransitionEnabled ? "transform 700ms ease-out" : "none",
      }
    : {
        transform: "translateX(0%)",
        transition: "none",
      };

  const goToPrevious = () => {
    if (totalSlides <= 1) {
      return;
    }
    setIsTransitionEnabled(true);
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    setVisualIndex((prev) => prev - 1);
  };

  const goToNext = () => {
    if (totalSlides <= 1) {
      return;
    }
    setIsTransitionEnabled(true);
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
    setVisualIndex((prev) => prev + 1);
  };

  const goToSlide = (index: number) => {
    if (totalSlides <= 1) {
      return;
    }
    const target = (index + totalSlides) % totalSlides;
    if (target === currentIndex) {
      return;
    }
    setIsTransitionEnabled(true);
    setCurrentIndex(target);
    setVisualIndex(target + 1);
  };

  const handleTransitionEnd = () => {
    if (totalSlides <= 1) {
      return;
    }

    if (visualIndex === 0) {
      setIsTransitionEnabled(false);
      setVisualIndex(totalSlides);
    } else if (visualIndex === totalSlides + 1) {
      setIsTransitionEnabled(false);
      setVisualIndex(1);
    }
  };

  const handlePause = () => autoPlay && setIsPaused(true);
  const handleResume = () => autoPlay && setIsPaused(false);

  const renderDefaultContent = (slide: SliderCard) => (
    <div className="flex max-w-xl flex-col gap-5 sm:gap-6">
      {slide.eyebrow && (
        <span className="text-[0.7rem] font-semibold uppercase tracking-[0.4em] text-slate-400">
          {slide.eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl md:text-5xl md:leading-[1.1]">
        {slide.title}
      </h2>
      <p className="text-base leading-relaxed text-slate-600 sm:text-lg">{slide.text}</p>
      {slide.ctaLabel && slide.ctaHref && (
        <a
          href={slide.ctaHref}
          className="inline-flex w-fit items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-slate-900 transition-colors hover:text-slate-600"
        >
          {slide.ctaLabel}
          <span aria-hidden className="text-lg">→</span>
        </a>
      )}
    </div>
  );

  const wrapperClassName = [
    "relative w-screen overflow-hidden bg-white text-slate-900",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section
      className={wrapperClassName}
      style={wrapperStyle}
      onMouseEnter={handlePause}
      onMouseLeave={handleResume}
      onTouchStart={handlePause}
      onTouchEnd={handleResume}
    >
      <div className="relative h-full overflow-hidden">
        <div
          className="flex h-full w-full flex-nowrap"
          style={trackStyle}
          onTransitionEnd={handleTransitionEnd}
        >
          {extendedSlides.map((slide, index) => {
            const actualIndex =
              totalSlides <= 1 ? 0 : (index - 1 + totalSlides) % totalSlides;
            const isActive = actualIndex === currentIndex;
            const key = `${slide.id}-${index}`;

            return (
              <article
                key={key}
                className={`flex h-full w-full flex-shrink-0 flex-col justify-center md:flex-row md:items-stretch ${
                  isActive ? "" : "pointer-events-none"
                }`}
                aria-hidden={!isActive}
              >
                <div className="order-1 relative w-full min-h-[18rem] overflow-hidden bg-slate-100 sm:min-h-[22rem] md:order-2 md:flex-[0_0_50%] md:h-full md:min-h-0">
                  {slide.image ? (
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-slate-900 text-white">
                      <span className="text-xl font-semibold">Bild folgt</span>
                    </div>
                  )}

                  {totalSlides > 1 && (
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-white via-transparent to-transparent" />
                  )}
                </div>

                <div className="order-2 flex w-full flex-col justify-center bg-white px-6 py-12 sm:py-16 md:order-1 md:flex-[0_0_50%] md:h-full md:px-16 lg:px-24">
                  {renderSlideContent ? renderSlideContent(slide) : renderDefaultContent(slide)}
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {totalSlides > 1 && (
        <div className="pointer-events-none absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-5 sm:gap-6">
          <button
            type="button"
            className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-xl font-serif text-slate-900 shadow-lg transition-transform hover:-translate-y-1 hover:bg-white sm:h-12 sm:w-12 sm:text-2xl"
            onClick={goToPrevious}
            aria-label="Vorheriger Slide"
          >
            ‹
          </button>
          <div className="pointer-events-auto flex items-center gap-2">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                className={`h-2 w-8 rounded-full transition-all sm:h-2.5 sm:w-9 ${
                  index === currentIndex ? "bg-slate-900" : "bg-slate-300 hover:bg-slate-400"
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Slide ${index + 1} anzeigen`}
              />
            ))}
          </div>
          <button
            type="button"
            className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-xl font-serif text-slate-900 shadow-lg transition-transform hover:-translate-y-1 hover:bg-white sm:h-12 sm:w-12 sm:text-2xl"
            onClick={goToNext}
            aria-label="Nächster Slide"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
};

export type { SliderCard, SliderProps };
export default Slider;
