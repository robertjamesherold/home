import type { SliderCard } from '../types';

const SliderCardComponent = ({
  slide,
  renderContent,
}: {
  slide: SliderCard;
  renderContent?: (s: SliderCard) => React.ReactNode;
}) => {
  const Default = (
    <div className="flex max-w-xl flex-col gap-5 sm:gap-6">
      {slide.eyebrow && (
        <span className="text-[0.7rem] font-semibold uppercase tracking-[0.4em] text-slate-400">
          {slide.eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl md:text-5xl md:leading-[1.1]">
        {slide.title}
      </h2>
      <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
        {slide.text}
      </p>
      {slide.ctaLabel && slide.ctaHref && (
        <a
          href={slide.ctaHref}
          className="inline-flex w-fit items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-slate-900 hover:text-slate-600"
        >
          {slide.ctaLabel}
          <span aria-hidden>→</span>
        </a>
      )}
    </div>
  );

  return renderContent ? renderContent(slide) : Default;
};

export default SliderCardComponent;
