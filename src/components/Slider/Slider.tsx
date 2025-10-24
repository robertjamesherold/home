import { Section } from "../../layout"
import NavigationButton from "../../ui/Buttons/NavigationButton"
import { useSlider } from "./hooks"
import { sliderCards } from "./data"
import { SliderCardComponent } from "./components"
import type { SliderProps } from "./types"

const Slider = ({ slides = sliderCards, renderSlideContent, cardHeight = "70vh" }: SliderProps) => {
  const { total, current, visual, transition, extended, goPrev, goNext, goTo, onTransitionEnd } = useSlider(slides)
  const heroHeight = typeof cardHeight === "number" ? `${cardHeight}px` : cardHeight

  const trackStyle = {
    transform: `translateX(-${visual * 100}%)`,
    transition: transition ? "transform 700ms ease-out" : "none",
  }

  return (
    <Section fullWidth padding style={{ height: heroHeight, minHeight: heroHeight }}>
      <div className="relative h-full overflow-hidden">
        <div className="flex h-full w-full flex-nowrap" style={trackStyle} onTransitionEnd={onTransitionEnd}>
          {extended.map((slide, i) => {
            const active = (i - 1 + total) % total === current
            return (
              <article
                key={`${slide.id}-${i}`}
                className={`flex h-full w-full flex-shrink-0 flex-col justify-center md:flex-row transition-none ${
                  active ? "" : "pointer-events-none"
                }`}
                aria-hidden={!active}
              >
                <div className="order-1 relative w-full min-h-[18rem] bg-slate-100 overflow-hidden md:order-2 md:flex-[0_0_50%]">
                  {slide.image ? (
                    <img src={slide.image} alt={slide.title} className="h-full w-full object-cover" loading="lazy" />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-slate-900 text-white">Bild folgt</div>
                  )}
                </div>

                <div className="order-2 flex w-full flex-col justify-center bg-white px-6 py-12 md:order-1 md:flex-[0_0_50%] md:px-16 lg:px-24">
                  <SliderCardComponent slide={slide} renderContent={renderSlideContent} />
                </div>
              </article>
            )
          })}
        </div>
      </div>

      {total > 1 && (
        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-5 sm:gap-6">
          <NavigationButton onClick={goPrev} isPrev />
          <div className="flex gap-2">
            {slides.map((slide, i) => (
              <button
                key={slide.id}
                onClick={() => goTo(i)}
                className={`h-2 w-8 rounded-full ${i === current ? "bg-slate-900" : "bg-slate-300 hover:bg-slate-400"}`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
          <NavigationButton onClick={goNext} isNext />
        </div>
      )}
    </Section>
  )
}

export default Slider