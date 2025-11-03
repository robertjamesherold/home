import { TextParagraph, Title } from '@/typography'
import { TestimonialsCard, SliderControls, useInfiniteSlider, testimonialsData } from './';
import { Header,Main,Section,Footer,Article } from '@/layout'

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
      className="py-8 sm:py-12 md:py-16 lg:py-20 w-full bg-white overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <Header className="text-center mb-8 sm:mb-12 px-4">
        <Title level={2} className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-2 sm:mb-4">
          Das sagen unsere <span className="text-green-600">Patienten</span>!
        </Title>
      </Header>

      {/* Slider */}
      <Article className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            {slides.map((testimonial, index) => (<TestimonialsCard key={index} {...testimonial} /> ))}
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
      <Footer className="text-center mt-8 sm:mt-12 px-4">
        <TextParagraph className="text-sm sm:text-base md:text-lg text-slate-600">
          Über <span className="text-green-600 font-semibold">2.000 zufriedene Patienten</span> vertrauen auf unsere Expertise
        </TextParagraph>
      </Footer>
    </Section>
  );
};

export default Testimonials;
