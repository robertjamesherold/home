import Button from '@/ui/Buttons/Button';
import HeroImage from '@images/g8.webp'
import { Badge } from '../ui/badge';
import { Title } from '@/typography';
import { Column, Row, Section, Container, Grid } from '@/layout'
import { useBreakpoint } from '../../../../hooks/useBreakpoint';

const Hero = () =>
{
  const breakpoint = useBreakpoint();
  const desktop = ( breakpoint === 'md' ) || ( breakpoint === 'lg' ) || ( breakpoint === 'xl' );


  return (
    <Section className="bg-linear-to-b relative overflow-hidden  from-slate-50 to-green-500">
      <Container className="relative w-full">
        <Grid className="relative h-fit items-center gap-8 md:grid-cols-2 lg:gap-12">
          {/* Left Content */}
          <Column className={ `max-h-[70vh] ${ desktop || breakpoint === 'sm' ? 'order-1' : 'order-2' } relative space-y-6 section px-4 md:pl-12 lg:pl-12  xl:pl-24 col-span-1` }>
            <Badge className="bg-green-600 hover:bg-green-700">
              Neue Patienten Aktion
            </Badge>

            <Title
              level={1}
              weight="bold"
              className="text-slate-900"
              text="Bis zu 30% Rabatt auf Ihre erste Behandlung"
            />

            <Title
              level={5}
              className="max-w-lg text-slate-600"
              text="Entdecken Sie die Kraft der Naturheilkunde. Unsere ganzheitlichen Behandlungsmethoden bringen Körper, Geist und Seele in Einklang."
            />

            { desktop ? (
              <Row className="gap-4">
                <Button
                  size="large"
                  label="Jetzt Termin vereinbaren"
                  className="bg-green-600 hover:bg-green-700"
                />
                <Button
                  size="large"
                  variant="secondary"
                  label="Mehr erfahren"
                />
              </Row>
            ) : (
              <Column className="gap-4">
                <Button
                  size="large"
                  label="Jetzt Termin vereinbaren"
                  className="bg-green-600 hover:bg-green-700"
                />
                <Button
                  size="large"
                  variant="secondary"
                  label="Mehr erfahren"
                />
              </Column>
            )}

            {/* Trust badges */}
            <Row className="flex flex-wrap items-center gap-4 pt-4">
              <Title
                level={5}
                className="text-slate-600"
                text="Zertifiziert durch:"
              />
              <Row className="gap-4">
                <Badge variant="danger">BDH</Badge>
                <Badge variant="danger">Verband</Badge>
                <Badge variant="danger">ISO 9001</Badge>
              </Row>
            </Row>
          </Column>

          {/* Right Content - Product/Service Cards */}
          <Column className={ ` ${ desktop || breakpoint === 'sm' ? 'order-2 max-h-[70vh]' : 'order-1 max-h-[40vh]' } @container relative` }>
            <img src={ HeroImage } alt="Hero Image" className="overflow-hidden w-full h-[100cqh] object-cover" />
          </Column>
        </Grid>
      </Container>
    </Section>
  );
}


export default Hero