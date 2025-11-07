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
    <Section id="patientenstimmen" isBox className="text-slate-800">

      <Header className="mb-10 text-center">
        <Title level={ 2 } weight="bold" className="mb-4 text-[#1f3e4d]">
          Das sagen unsere{ ' ' }
          <span className="text-[#2f6d8b]">Patient:innen</span>
        </Title>
        <TextParagraph
          className="mx-auto max-w-2xl text-[#4a5d66]"
          text="Echte Erfahrungsberichte aus unserer Naturheilpraxis – empathisch, persönlich und nachhaltig wirksam."
        />
      </Header>

      {/* Slider */ }
      <Article className="@container relative mx-auto w-full">
        <Container className="mx-auto w-full overflow-hidden rounded-4xl border border-[#dceaea] bg-white shadow-[0_45px_120px_-70px_rgba(47,109,139,0.35)] lg:w-[60cqw] xl:w-[70cqw] 2xl:w-[60cqw]">
          <Container
            className="flex w-full touch-pan-y"
            ref={ sliderRef }
            onMouseEnter={ () => setIsPaused( true ) }
            onMouseLeave={ () => setIsPaused( false ) }
            onFocus={ () => setIsPaused( true ) }
            onBlur={ () => setIsPaused( false ) }
            onTransitionEnd={ handleTransitionEnd }
            onTouchStart={ onTouchStart }
            onTouchMove={ onTouchMove }
            onTouchEnd={ onTouchEnd }
            style={ {
              transform: `translateX(-${ currentIndex * 100 }%)`,
              transition: useTransition
                  ? 'transform 1500ms ease-in-out'
                  : 'none',
              } }
            >
              {slides.map((testimonial, index) => (
                <TestimonialsCard key={index} {...testimonial} />
              ))}
          </Container>
        </Container>

        {/* Controls */ }
        <SliderControls
          onPrev={ prevSlide }
          onNext={ nextSlide }
          dotsCount={ data.length }
          activeIndex={ activeSlideIndex }
          onDotClick={ goToSlide }
          disabled={ isLocked }
        />
      </Article>

      {/* Footer */ }
      <Footer className="mt-8 px-4 text-center sm:mt-12">
        <TextParagraph className="text-[#4a5d66]">
          Über{ ' ' }
          <span className="font-semibold text-[#2f6d8b]">
            2.000 zufriedene Patient:innen
          </span>{ ' ' }
          vertrauen auf unsere Expertise
        </TextParagraph>
      </Footer>
    </Section>
  );
};

export default Testimonials;
