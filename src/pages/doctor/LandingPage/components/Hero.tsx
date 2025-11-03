import Button from '@/ui/Buttons/Button';
import { Badge } from '../ui/badge';
import { Title } from '@/typography';
import { Column, Row } from '@/layout';
import { useBreakpoint } from '../../../../hooks/useBreakpoint';

export function Hero() {
  const breakpoint = useBreakpoint();

  return (
    <section className="bg-linear-to-br relative overflow-hidden from-slate-50 to-green-50">
      <div className="container mx-auto px-4 py-12 md:py-20 lg:py-24">
        <div className="grid items-center gap-8 md:grid-cols-2 lg:gap-12">
          {/* Left Content */}
          <div className="space-y-6">
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

            {breakpoint === 'md' ? (
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
          </div>

          {/* Right Content - Product/Service Cards */}
          <div className="relative">
            <div className="grid grid-cols-1 gap-4"></div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute right-0 top-0 -z-10 h-64 w-64 rounded-full bg-green-200 opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -z-10 h-96 w-96 rounded-full bg-blue-200 opacity-20 blur-3xl"></div>
    </section>
  );
}
