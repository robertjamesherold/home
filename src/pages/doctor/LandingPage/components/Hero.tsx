import  Button  from "@/ui/Buttons/Button";
import { Badge } from "../ui/badge";
import { Title } from '@/typography'
import { Column, Row } from '@/layout'
import { useBreakpoint } from '../../../../hooks/useBreakpoint';

export function Hero() {
  const breakpoint = useBreakpoint();
  
  return (
    <section className="relative bg-linear-to-br from-slate-50 to-green-50 overflow-hidden">
      <div className="container mx-auto px-4 py-12 md:py-20 lg:py-24">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <Badge className="bg-green-600 hover:bg-green-700">
              Neue Patienten Aktion
            </Badge>

            <Title level={1} weight='bold' className="text-slate-900" text='Bis zu 30% Rabatt auf Ihre erste Behandlung'  />
          

            <Title level={5} className="text-slate-600 max-w-lg" text='Entdecken Sie die Kraft der Naturheilkunde. Unsere ganzheitlichen Behandlungsmethoden bringen Körper, Geist und Seele in Einklang.' />

            {breakpoint === 'md' ? <Row className="gap-4">
              <Button size="large" label='Jetzt Termin vereinbaren' className="bg-green-600 hover:bg-green-700" />
              <Button size="large" variant="secondary" label='Mehr erfahren' />
            </Row> : <Column className="gap-4">
            <Button size="large" label='Jetzt Termin vereinbaren' className="bg-green-600 hover:bg-green-700" />
              <Button size="large" variant="secondary" label='Mehr erfahren' />
            </Column>}

            {/* Trust badges */}
            <Row className="flex flex-wrap gap-4 pt-4 items-center">
              <Title level={5}  className="text-slate-600" text='Zertifiziert durch:' />  
              <Row className="gap-4">
                <Badge variant="danger">BDH</Badge>
                <Badge variant="danger">Verband</Badge>
                <Badge variant="danger">ISO 9001</Badge>
              </Row>
            </Row>
          </div>

          {/* Right Content - Product/Service Cards */}
          <div className="relative">
            <div className="grid grid-cols-1 gap-4">
           
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-green-200 rounded-full blur-3xl opacity-20 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20 -z-10"></div>
    </section>
  );
}