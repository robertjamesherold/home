import { Users, Heart, Award, Clock } from 'lucide-react';
import { Section, Container, Grid, Header } from '@/layout'
import { Title, TextParagraph } from '@/typography';

const stats = [
  {
    icon: Users,
    value: '2000+',
    label: 'Zufriedene Patienten',
    description: 'Seit 2008',
  },
  {
    icon: Heart,
    value: '15+',
    label: 'Jahre Erfahrung',
    description: 'In der Naturheilkunde',
  },
  {
    icon: Award,
    value: '98%',
    label: 'Erfolgsrate',
    description: 'Bei chronischen Beschwerden',
  },
  {
    icon: Clock,
    value: '24/7',
    label: 'Notfall-Hotline',
    description: 'Für unsere Patienten',
  },
];

export function Statistics() {
  return (
    <Section
      id="ergebnisse"
      className="relative text-slate-800"
    >

      <Container className="section safe-area-padding relative z-1">
        <Header className="mb-12 text-center">
          <Title level={ 2 } weight="bold" className="mb-4 text-[#1f3e4d]">
            Ihre Gesundheit ist unsere Mission
          </Title>
          <TextParagraph
            className="mx-auto max-w-2xl text-[#4a5d66]"
            text="Vertrauen Sie auf unsere langjährige Erfahrung und bewährte Behandlungsmethoden."
          />
        </Header>

        <Grid className="grid-cols-2 gap-6 md:gap-8 xl:grid-cols-4">
          { stats.map( ( stat ) =>
          {
            const Icon = stat.icon;
            return (
              <div
                key={ stat.label }
                className="group flex flex-col items-center gap-3 rounded-3xl border border-[#dceaea] bg-white p-6 text-center shadow-[0_35px_90px_-65px_rgba(47,109,139,0.35)] transition-all duration-300 hover:-translate-y-1 hover:border-[#2f6d8b]/30 hover:shadow-[0_36px_95px_-60px_rgba(47,109,139,0.45)]"
              >
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-[#6fc4a3]/40 bg-[#6fc4a3]/15 text-[#2f7266] shadow-[0_20px_60px_-45px_rgba(47,109,139,0.35)] md:h-16 md:w-16">
                  <Icon className="h-6 w-6 md:h-8 md:w-8" />
                </span>
                <span className="text-3xl font-semibold text-[#2f6d8b] md:text-4xl">
                  { stat.value }
                </span>
                <span className="text-sm font-medium uppercase tracking-[0.2em] text-[#2f7266]">
                  { stat.label }
                </span>
                <TextParagraph className="text-xs text-[#5e6f78]" text={ stat.description } />
              </div>
            );
          })}
        </Grid>
      </Container>
    </Section>
  );
}
