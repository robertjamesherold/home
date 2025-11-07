import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import FeatureImage from '@images/hero.jpeg'
import { Section, Grid, Column } from '@/layout'
import { Title, TextParagraph } from '@/typography'

const highlights = [
  {
    title: 'Individuelle Behandlung',
    description: 'Jeder Patient erhält einen persönlichen Therapieplan.',
  },
  {
    title: 'Natürliche Methoden',
    description: 'Ohne Nebenwirkungen und nachhaltig wirksam.',
  },
  {
    title: 'Langfristige Betreuung',
    description: 'Wir begleiten Sie auf Ihrem Weg zur Gesundheit.',
  },
];

export function FeatureSection() {
  return (
    <Section
      id="philosophie"
      className="relative section safe-area-padding text-slate-800 "
    >


      <Grid className="items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <Column className="order-2 md:order-1">
          <div className="relative overflow-hidden rounded-[36px] border border-[#dceaea] bg-white shadow-[0_50px_140px_-85px_rgba(47,109,139,0.35)]">
            <img
              src={ FeatureImage }
              alt="Ganzheitliche Naturheilpraxis"
              className="h-full w-full object-cover"
            />


            <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-[#dceaea] bg-white/90 p-5 backdrop-blur-xl shadow-[0_32px_70px_-45px_rgba(47,109,139,0.4)]">
              <Badge className="border border-[#6fc4a3]/40 bg-[#6fc4a3]/20 text-[#2f7266]">
                Therapie-Schwerpunkte
              </Badge>
              <Title
                level={ 5 }
                className="mt-3 text-sm text-[#476977]"
                text="Phytotherapie · Infusionstherapie · Mind-Body-Medizin"
              />
              </div>
            </div>
        </Column>

        <Column className="order-1 space-y-6 md:order-2">
          <Badge className="w-fit border border-[#6fc4a3]/50 bg-[#6fc4a3]/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-[#2f7266]">
            Unsere Philosophie
          </Badge>

          <Title level={ 2 } weight="bold" className="text-[#1f3e4d]">
              Ganzheitliche Behandlung für nachhaltige Gesundheit
          </Title>

          <TextParagraph
            className="max-w-xl text-[#4a5d66]"
            text="Wir betrachten den Menschen als Einheit von Körper, Geist und Seele. Unsere Behandlungsansätze aktivieren Ihre Selbstheilungskräfte und stellen das natürliche Gleichgewicht wieder her."
          />

            <div className="space-y-4">
            { highlights.map( ( item ) => (
              <div
                key={ item.title }
                className="flex items-start gap-3 rounded-2xl border border-[#dceaea] bg-white p-4 transition hover:border-[#2f6d8b]/30 hover:bg-[#f4fbfb]"
              >
                <span className="mt-1 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-[#6fc4a3]/40 bg-[#6fc4a3]/15 text-sm text-[#2f7266]">
                    ✓
                </span>
                <div className="space-y-1">
                  <Title level={ 4 } className="text-base text-[#1f3e4d]">
                    { item.title }
                  </Title>
                  <TextParagraph className="text-sm text-[#4a5d66]" text={ item.description } />
                  </div>
                </div>
              ))}
            </div>

          <Button className="w-fit rounded-full border border-[#2f6d8b] bg-[#2f6d8b] px-8 text-sm font-semibold text-white shadow-[0_20px_60px_-30px_rgba(47,109,139,0.45)] transition hover:bg-[#285b74]" size="lg">
              Beratungsgespräch vereinbaren
            </Button>
        </Column>
      </Grid>

    </Section>
  );
}
