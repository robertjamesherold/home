import { Button } from '../ui/button'
import { Star, Clock } from 'lucide-react';
import Service_1 from '@images/service_1.jpeg'
import Service_2 from '@images/service_2.jpeg'
import Service_3 from '@images/service_3.jpeg'
import Service_4 from '@images/service_4.jpeg'
import { Section, Container, Header as SectionHeader, Grid, Article } from '@/layout'
import { Title } from '@/typography'

const Headertext = {
  subtitle: 'Unsere Behandlungen',
  title: 'Entdecken Sie unsere ',
  span: 'wirksamen Therapien',
};

const treatments = [
  {
    id: 1,
    title: 'Psychologische Beratung für Angehörige',
    duration: '60 Min.',
    rating: 4.9,
    image: Service_1,
  },
  {
    id: 2,
    title: 'Psychologische Beratung für Betroffene',
    duration: '30 Min.',
    rating: 4.8,
    image: Service_2,
  },
  {
    id: 3,
    title: 'Omega-3-Fettsäureberatung & Analyse',
    duration: '90 Min.',
    rating: 5.0,
    image: Service_3,
  },
  {
    id: 4,
    title: 'Gesprächskreis für Betroffene & Angehörige',
    duration: '45 Min.',
    rating: 4.9,
    image: Service_4,
  },
];

export function TreatmentGrid() {
  return (
    <Section
      id="leistungen"
      className="relative text-slate-800"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 -top-40 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#6fc4a3]/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-180px] bottom-[-220px] h-[460px] w-[460px] rounded-full bg-[#f7d6c3]/30 blur-3xl"
      />
      <Container className="section safe-area-padding relative z-1">
        <SectionHeader className="mb-12 text-center">
          <Title
            level={ 6 }
            className="font-semibold uppercase tracking-[0.4em] text-[#6fc4a3]"
            text={ Headertext.subtitle }
          />
          <Title level={ 2 } weight="bold" className="mt-4 text-[#1f3e4d]">
            { Headertext.title }
            <span className="text-[#2f6d8b]">{ Headertext.span }</span>
          </Title>
        </SectionHeader>

        <Grid className="gap-6 md:grid-cols-2 xl:grid-cols-4">
          {treatments.map((treatment) => (
            <Article
              key={treatment.id}
              className="group relative overflow-hidden rounded-3xl border border-[#dceaea] bg-white shadow-[0_30px_70px_-45px_rgba(47,109,139,0.35)] transition-all duration-300 hover:-translate-y-1 hover:border-[#2f6d8b]/30 hover:shadow-[0_32px_75px_-40px_rgba(47,109,139,0.45)]"
            >
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-[#fcd8c2]/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />

              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={ treatment.image }
                  alt={ treatment.title }
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="relative space-y-4 p-6">
                <div className="flex items-center justify-between gap-3 text-sm text-[#2f6d8b]">
                  <span className="inline-flex items-center gap-2 rounded-full border border-[#6fc4a3]/50 bg-[#6fc4a3]/15 px-3 py-1 text-[#2f7266]">
                    <Star className="h-4 w-4 text-[#2f7266]" />
                    { treatment.rating }
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-[#f7d6c3]/60 bg-[#fff2ea] px-3 py-1 text-[#c35b35]">
                    <Clock className="h-4 w-4 text-[#c35b35]" />
                    { treatment.duration }
                  </span>
                </div>

                <Title level={ 4 } weight="bold" className="text-lg text-[#1f3e4d]">
                  { treatment.title }
                </Title>

                <Button
                  size="lg"
                  className="w-full rounded-xl border border-[#2f6d8b] bg-[#2f6d8b] text-sm font-semibold text-white shadow-[0_18px_48px_-30px_rgba(47,109,139,0.45)] transition hover:bg-[#285b74]"
                >
                  Jetzt buchen
                </Button>
              </div>
            </Article>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
