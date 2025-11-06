import type { ContentItem } from '../types';

const ContentCard: React.FC<{
  item: ContentItem;
  variant: 'default' | 'continue';
}> = ( { item, variant } ) =>
{
  const progress = Math.max(0, Math.min(1, item.progress ?? 0));

  return (
    <li>
      <article
        className={ `group relative aspect-video  overflow-hidden rounded-2xl bg-[#1f2933] shadow-lg shadow-black/40 transition duration-300 hover:-translate-y-1 hover:shadow-black/60` }
      >
        <img
          alt={item.title}
          className="h-full w-full object-cover"
          src={item.image}
        />
        <div className="bg-linear-to-t absolute inset-0 from-black via-black/40 to-transparent opacity-60 transition duration-300 group-hover:opacity-90" />
        {item.tag && variant !== 'continue' && (
          <span className="absolute left-3 top-3 inline-flex items-center rounded-full bg-[#00a8e1] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#0f171e]">
            {item.tag}
          </span>
        )}
        <div className="bg-linear-to-t pointer-events-none absolute inset-x-0 bottom-0 z-10 space-y-2 from-black/90 via-black/40 to-transparent px-4 pb-4 pt-10">
          <p className="text-sm font-semibold text-white">{item.title}</p>
          {variant === 'continue' ? (
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-wide text-white/70">
                {Math.round(progress * 100)}% angesehen
              </p>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/20">
                <span
                  className="block h-full rounded-full bg-[#00a8e1]"
                  style={{ width: `${Math.round(progress * 100)}%` }}
                />
              </div>
            </div>
          ) : (
            item.subtitle && (
              <p className="text-xs text-white/70">{item.subtitle}</p>
            )
          )}
        </div>
      </article>
    </li>
  );
};

export default ContentCard;
