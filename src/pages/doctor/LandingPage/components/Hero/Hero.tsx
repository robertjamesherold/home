import { Button } from '@/ui/Buttons'
import HeroImage from '@images/hero.jpeg'

import { Badge } from '../../ui/badge'
import { TextParagraph, Title } from '@/typography'
import { Column, Row, Section, Container, Grid, Image } from '@/layout'
import { useBreakpoint } from '@/hooks/useBreakpoint'
import HeroCard from './components/HeroCard';
import { HeroData } from './data'

const heroHighlights = [
  { value: '20+', label: 'Jahre Praxiserfahrung' },
  { value: '2.500+', label: 'begleitete Patient:innen' },
  { value: '4.9/5', label: 'Zufriedenheitswert' },
]

const heroPillars = [
  'Integrative Diagnostik & Therapieplanung',
  'Individuelle Heilpflanzen- und Infusionstherapien',
  'Ganzheitliche Begleitung bei chronischen Beschwerden',
]

const Hero: React.FC = () =>
{
  const breakpoint = useBreakpoint()
  const isDesktop = breakpoint.isDesktop()
  const buttonSize = isDesktop ? 'large' : 'medium'

  return (
    <Section className="relative safe-area-padding ">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-16 h-[420px] w-[420px] rounded-full bg-[#6fc4a3]/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-120px] top-1/3 h-[520px] w-[520px] rounded-full bg-[#f7d6c3]/40 blur-3xl"
      />
      <Container className="section relative z-10 text-slate-800">
        <Grid className="items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] xl:gap-16">
          <Column className="space-y-8">
            <Badge className="w-fit border border-[#6fc4a3]/40 bg-[#6fc4a3]/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#2f7266]">
              Integrative Naturheilpraxis
            </Badge>

            <Title
              level={ 1 }
              weight="bold"
              className="max-w-2xl text-[#1f3e4d] leading-tight"
              text="Ganzheitliche Medizin, die Körper und Geist in Balance bringt"
            />

            <Title
              level={ 5 }
              className="max-w-xl text-[#4a5d66]"
              text="Dr. Andrea Meyer und ihr Team kombinieren Naturheilkunde mit moderner Diagnostik, um nachhaltige Gesundheitserfolge zu erzielen."
            />

            <Column className="gap-4">
              { heroPillars.map( ( pillar ) => (
                <Row
                  key={ pillar }
                  className="items-center gap-3 text-sm text-[#2f7266] sm:text-base"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e8f6f3] text-[#2f7266]">
                    ✓
                  </span>
                  <span className="flex-1">{ pillar }</span>
                </Row>
              ) ) }
            </Column>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button
                size={ buttonSize }
                variant="primary"
                label="Jetzt Termin vereinbaren"
              />
              <Button
                size={ buttonSize }
                variant="secondary"
                label="Kostenloses Erstgespräch"
              />
            </div>

            <Row className="flex-wrap gap-8 pt-4">
              { heroHighlights.map( ( item ) => (
                <Column key={ item.label } className="min-w-[140px] space-y-1">
                  <Title level={ 2 } weight='semibold' className="text-emerald-400" text={ item.value } />
                  <TextParagraph sm className="text-slate-600" text={ item.label } />
                </Column>
              ) ) }
            </Row>
          </Column>

          <Column className="relative mt-10 md:mt-0">
            <Image className="rounded-4xl border border-slate-50 shadow-2xl shadow-emerald-400/30" src={ HeroImage } alt="Behandlungsraum der Naturheilpraxis" />



            <HeroCard { ...HeroData.card } />
    
         
          </Column>
        </Grid>
      </Container>
    </Section>
  )
}

export default Hero