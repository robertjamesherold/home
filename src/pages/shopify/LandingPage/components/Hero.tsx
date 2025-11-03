import type { HeroContent } from '../types';
import { BoltIcon } from '../ui';
import { Title } from '@/typography';

const Hero: React.FC<{ content: HeroContent; compact: boolean }> = ({
  content,
  compact,
}) => (
  <section className="relative flex min-h-[360px] flex-col justify-center overflow-hidden rounded-3xl border border-white/5 bg-[#16222f]">
    <img
      alt="Prime Video Highlight"
      className="absolute inset-0 h-full w-full object-cover"
      src={content.background}
    />
    <div className="absolute inset-0 bg-linear-to-r from-[#0f171e] via-[#16222f]/90 to-transparent" />
    <div className="relative z-10 w-full max-w-xl space-y-6 p-10">
      <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-white/70">
        <BoltIcon className="h-3.5 w-3.5" />
        {content.highlight}
      </span>
      <Title
        level={1}
        weight="bold"
        className="leading-tight text-white md:text-5xl"
        text={compact ? 'Prime Video. Überall streamen.' : content.title}
      />
      {!compact && (
        <p className="text-base leading-relaxed text-white/70 md:text-lg">
          {content.description}
        </p>
      )}
      <div className="flex flex-wrap gap-4">
        <button
          type="button"
          className="btn-primary"
        >
          {content.primaryCta}
        </button>
        <button
          type="button"
          className="btn-secondary"
        >
          {content.secondaryCta}
        </button>
      </div>
      <p className="text-xs uppercase tracking-wide text-white/60">
        Streamen Sie auf TV, Tablet, Smartphone und mehr.
      </p>
    </div>
  </section>
);

export default Hero;