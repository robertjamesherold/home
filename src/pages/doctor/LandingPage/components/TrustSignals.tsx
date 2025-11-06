import { Badge } from '../ui/badge';
import { Section, Container, Header, Grid } from '@/layout';
import { Title } from '@/typography';

const partners = [
  { name: 'BDH', description: 'Bund Deutscher Heilpraktiker' },
  { name: 'VFP', description: 'Verband Freier Psychotherapeuten' },
  { name: 'TCM', description: 'TCM Verband' },
  { name: 'Naturheilkunde', description: 'Fachverband' },
];

export function TrustSignals() {
  return (
    <Section className="bg-slate-50 section safe-area-padding">
        <Header className="mb-8 text-center">
          <Title level={6} className=" text-slate-700" text="Über 15 Jahre Erfahrung in der Naturheilkunde" />
          <Title level={2} weight="bold" className="text-slate-900">Vertrauen Sie auf unsere <span className="text-lime-600"> Expertise</span></Title>
        </Header>
        <Container outerClass='@container' innerClass=' mx-auto lg:w-[60cqw] xl:w-[70cqw] 2xl:w-[60cqw] p-8 rounded-xl bg-white'>
          <Grid className="h-fit items-center gap-8 md:grid-cols-2">
            <Container className='@container relative col-span-1'>
              <img src="" alt="" className='relative w-full h-full object-cover'/> 
            </Container>
            <div className="space-y-4">
              <h3 className="text-slate-900">Dr. med. Sarah Müller</h3>
              <p className="text-green-600">
                Heilpraktikerin & TCM-Spezialistin
              </p>
              <p className="text-slate-600">
                Mit über 15 Jahren Erfahrung in der Naturheilkunde und
                traditionellen chinesischen Medizin helfe ich meinen Patienten,
                ihre Gesundheit auf natürliche Weise wiederherzustellen und zu
                erhalten.
              </p>
            </div>
          </Grid>
        </Container>
    
    </Section>
  );
}
