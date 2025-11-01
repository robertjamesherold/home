import { Title } from '@/typography'
import type { ContentRow } from '../types';
import ContentCard from './ContentCard';

const ContentRowSection: React.FC<{ row: ContentRow; compact: boolean }> = ({
  row,
  compact,
}) => (
  <section className="space-y-4" data-section={row.id}>
    <header className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
      <Title
        level={4}
        weight="bold"
        className="text-white"
        text={row.title}
      />
      {row.subtitle && (
        <p className="text-sm text-white/60">{row.subtitle}</p>
      )}
    </header>
    <div
      className="-mx-1 overflow-x-auto pb-2"
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      <ul className="grid grid-flow-col auto-cols-max gap-4 px-1">
        {row.items.map((item) => (
          <ContentCard
            key={item.id}
            compact={compact}
            item={item}
            variant={row.variant ?? 'default'}
          />
        ))}
      </ul>
    </div>
  </section>
);

export default ContentRowSection;
