import { TextParagraph, Title } from '@/typography';
import {
  TestimonialsCard,
  SliderControls,
  useInfiniteSlider,
  testimonialsData,
} from './';
import { Header, Section, Footer, Article, Container } from '@/layout';

const Testimonials = () => {
  const data = testimonialsData;

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
      className="section bg-white safe-area-padding"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <Header className="mb-8 text-center">
        <Title
          level={ 2 }
          weight="bold"
          className="mb-4 text-slate-900"
        >
          Das sagen unsere <span className="text-green-600">Patienten</span>!
        </Title>
      </Header>

      {/* Slider */}
      <Article className="@container relative mx-auto w-full">
        <Container className="lg:w-[60cqw] xl:w-[70cqw] 2xl:w-[60cqw] mx-auto relative overflow-hidden rounded-xl bg-slate-50 shadow-lg sm:rounded-2xl sm:shadow-xl">
          <Container className="flex w-full touch-pan-y"
            ref={ sliderRef }
            onTransitionEnd={ handleTransitionEnd }
            onTouchStart={ onTouchStart }
            onTouchMove={ onTouchMove }
            onTouchEnd={ onTouchEnd }
            style={ {
              transform: `translateX(-${ currentIndex * 100 }%)`,
              transition: useTransition
                  ? 'transform 1500ms ease-in-out'
                  : 'none',
              }}
            >
              {slides.map((testimonial, index) => (
                <TestimonialsCard key={index} {...testimonial} />
              ))}
              </Container>

        </Container>

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
        <TextParagraph className="text-slate-600">
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
