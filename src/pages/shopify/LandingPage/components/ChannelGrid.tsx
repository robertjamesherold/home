import { Title } from '@/typography';
import { ChannelData } from '../data';

const ChannelGrid: React.FC = () => {
  const channels = ChannelData;
  return (
    <section className="space-y-4" data-section="channels">
      <header className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <Title
          level={4}
          weight="bold"
          className="text-white"
          text="Prime Video Channels"
        />
        <Title
          className="text-white/60"
          text="Fügen Sie Ihre Lieblingssender hinzu – jederzeit kündbar, direkt über Prime Video."
        />
      </header>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {channels.map((channel) => (
          <article
            key={channel.id}
            className="relative overflow-hidden rounded-3xl border border-white/5 bg-[#141f29] transition duration-300 hover:border-white/20 hover:shadow-xl hover:shadow-black/40"
          >
            <img
              alt={channel.name}
              className="h-48 w-full object-cover"
              src={channel.image}
            />
            <div className="bg-linear-to-t absolute inset-0 from-black via-black/40 to-transparent opacity-70" />
            <div className="relative z-10 flex h-full flex-col justify-end space-y-3 p-6">
              <Title className="text-white" text={channel.name} />
              <Title className="text-white/70" text={channel.description} />
              <Title
                className="uppercase tracking-wide text-[#00a8e1]"
                text={channel.price}
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ChannelGrid;
