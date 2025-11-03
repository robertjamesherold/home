import { TextParagraph, Title } from '@/typography';
import {
  TestimonialsCard,
  SliderControls,
  useInfiniteSlider,
  testimonialsData,
} from './';
import { Header,  Section, Footer, Article } from '@/layout';

const Testimonials = () => {
  const data = testimonialsData;
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
    <Section
      className="w-full overflow-hidden bg-white py-8 sm:py-12 md:py-16 lg:py-20"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <Header className="mb-8 px-4 text-center sm:mb-12">
        <Title
          level={2}
          className="mb-2 text-2xl font-bold text-slate-900 sm:mb-4 sm:text-3xl md:text-4xl"
        >
          Das sagen unsere <span className="text-green-600">Patienten</span>!
        </Title>
      </Header>

      {/* Slider */}
      <Article className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-xl bg-slate-50 shadow-lg sm:rounded-2xl sm:shadow-xl">
          <div
            ref={sliderRef}
            onTransitionEnd={handleTransitionEnd}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            className="flex w-full touch-pan-y"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: useTransition
                ? 'transform 1500ms ease-in-out'
                : 'none',
            }}
          >
            {slides.map((testimonial, index) => (
              <TestimonialsCard key={index} {...testimonial} />
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
      </Article>

      {/* Footer */}
      <Footer className="mt-8 px-4 text-center sm:mt-12">
        <TextParagraph className="text-sm text-slate-600 sm:text-base md:text-lg">
          Über{' '}
          <span className="font-semibold text-green-600">
            2.000 zufriedene Patienten
          </span>{' '}
          vertrauen auf unsere Expertise
        </TextParagraph>
      </Footer>
    </Section>
  );
};

export default Testimonials;
