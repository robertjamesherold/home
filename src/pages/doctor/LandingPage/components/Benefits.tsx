import { Shield, Leaf, Heart, Clock, Award, Users } from 'lucide-react'
import { TextParagraph, Title } from '@/typography'
import { Grid, Header, Section, Container, Article } from '@/layout';

const benefits = [
  {
    icon: Shield,
    title: 'Zertifizierte Qualität',
    description: 'Alle Behandlungen nach höchsten medizinischen Standards',
  },
  {
    icon: Leaf,
    title: '100% Natürlich',
    description: 'Ausschließlich natürliche Heilmittel ohne Chemie',
  },
  {
    icon: Heart,
    title: 'Ganzheitlicher Ansatz',
    description: 'Körper, Geist und Seele im Einklang',
  },
  {
    icon: Clock,
    title: 'Flexible Termine',
    description: 'Auch abends und am Wochenende verfügbar',
  },
  {
    icon: Award,
    title: '15 Jahre Erfahrung',
    description: 'Langjährige Expertise in der Naturheilkunde',
  },
  {
    icon: Users,
    title: 'Persönliche Betreuung',
    description: 'Individuelle Behandlungspläne für jeden Patienten',
  },
];

const Benefits = () =>
{
  return (
    <Section
      id="benefits"
      className="relative section safe-area-padding text-slate-800"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/4 h-[360px] w-[360px] rounded-full bg-[#f7d6c3]/35 blur-3xl"
      />
      <Header className="mb-12 text-center">
        <Title level={ 2 } weight="bold" className="mb-4 text-[#1f3e4d]">
          Warum Sie uns <span className="text-[#2f6d8b]">vertrauen</span>{ ' ' }
          können
        </Title>
        <TextParagraph
          className="mx-auto max-w-2xl text-[#4a5d66]"
          text="Ihre Gesundheit liegt uns am Herzen. Deshalb bieten wir Ihnen erstklassige naturheilkundliche Behandlungen mit persönlicher Betreuung."
          />
        </Header>

      <Grid className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Article
                key={index}
                className="group flex flex-col items-center gap-4 rounded-3xl border border-[#dceaea] bg-white p-8 text-center shadow-[0_30px_80px_-50px_rgba(47,109,139,0.35)] transition-all duration-300 hover:-translate-y-1 hover:border-[#2f6d8b]/30 hover:shadow-[0_30px_82px_-46px_rgba(47,109,139,0.45)]"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#6fc4a3]/50 bg-[#6fc4a3]/15 text-[#2f7266] shadow-[0_20px_60px_-40px_rgba(47,109,139,0.35)]">
                  <Icon className="h-8 w-8" />
                </div>
                <Title level={ 4 } className="text-lg text-[#1f3e4d]">
                  { benefit.title }
                </Title>
                <TextParagraph
                  className="text-sm text-[#4a5d66]"
                  text={ benefit.description }
                />
              </Article>
            );
          })}
      </Grid>
    </Section>
  );
}

export default Benefits
