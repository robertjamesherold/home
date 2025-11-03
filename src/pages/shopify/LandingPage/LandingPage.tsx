import React from 'react';
import { useBreakpoint } from '@/hooks/useBreakpoint';
import { Title } from '@/typography';
import { useHorizontalPadding } from './hooks/';
import { HeroContentData, ContentRowData } from './data';
import { Header, Hero, ContentRowSection, ChannelGrid } from './components';

const LandingPage: React.FC = () => {
  const horizontalPadding = useHorizontalPadding();
  const compact = useBreakpoint() === 'xs' || useBreakpoint() === 'sm';
  const heroContent = HeroContentData;
  const contentRows = ContentRowData;

  return (
    <div className="min-h-screen w-full bg-[#0f171e] text-white">
      <div className={`relative space-y-10 pb-14 ${horizontalPadding}`}>
        <Header compact={compact} />
        <Hero compact={compact} content={heroContent} />
      </div>
      <main className={`space-y-16 ${horizontalPadding}`}>
        {contentRows.map((row) => (
          <ContentRowSection key={row.id} compact={compact} row={row} />
        ))}
        <ChannelGrid />
      </main>
      <footer
        className={`mt-20 border-t border-white/10 py-10 text-sm text-white/60 ${horizontalPadding}`}
      >
        <Title>
          © {new Date().getFullYear()} Prime Video Nachbau – nur zu
          Demonstrationszwecken.
        </Title>
      </footer>
    </div>
  );
};

export default LandingPage;
