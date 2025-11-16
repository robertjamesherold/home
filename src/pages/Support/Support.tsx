import  { Clock, MapPin } from 'lucide-react';
import { FormTable} from '@/components';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Badge,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/ui';
import { TextParagraph, Title } from '@/typography';
import { Main, Section, Grid, Container } from '@/layout';
import { SupportHeroData, FAQItemsData, SupportHighlightsData, SupportFormData, SupportChannelsData  } from './data';
import SupportHero from './default/components/SupportHero';








const SupportPage: React.FC = () => 
  {
    return (
      <Main className='bg-linear-to-t from-blue-50 to-gray-300/40'>
        <Section className="w-full mb-6">
          <SupportHero data={SupportHeroData} />
          <Container className="container mx-auto px-4 space-y-6">
            <Grid className="w-full gap-3 lg:gap-6 md:grid-cols-1 lg:grid-cols-3">
              {SupportHighlightsData.map(({ icon: Icon, title, description, meta }) => (
              <Card key={ title } className="border bg-white shadow-sm">
                <CardHeader className="space-y-3 mb-5">
                  <Container className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                    <Icon size={20}/>
                  </Container>
                  <CardTitle className="text-xl text-gray-900">{title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                    {meta}
                  </Badge>
                </CardContent>
              </Card>
            ))}
            </Grid>

          <div className="grid gap-6 xl:grid-cols-2">
              <Card className="border bg-white shadow-sm">
                <CardHeader className="space-y-0 mb-3">
                  <Title h4 text='Kontaktwege & Studio' />
                  <TextParagraph sm text="Wählen Sie den Kanal, der am besten zu Ihrer Situation passt." />
              </CardHeader>
              <CardContent className="space-y-6">
                {SupportChannelsData.map(
                  ({ icon: Icon, title, detail, description, hours }) => (
                    <div
                      key={title}
                      className="flex flex-col gap-3 rounded-2xl border border-gray-100 p-4 sm:flex-row sm:items-center sm:justify-between"
                    >
                      <div className="flex flex-1 items-start gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-50 text-gray-900">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm uppercase tracking-[0.15em] text-gray-400">
                            {title}
                          </p>
                          <p className="text-base font-semibold text-gray-900">
                            {detail}
                          </p>
                          <TextParagraph sm className="text-gray-600">
                            {description}
                          </TextParagraph>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 rounded-full bg-gray-900/5 px-3 py-1 text-sm font-medium text-gray-700">
                        <Clock className="h-4 w-4" />
                        {hours}
                      </div>
                    </div>
                  )
                )}

                <div className="flex flex-col gap-4 rounded-2xl border border-dashed border-gray-200 p-4 md:flex-row md:items-center md:justify-between">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-gray-900">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-[0.15em] text-gray-400">
                        Studio Berlin Mitte
                      </p>
                      <p className="font-semibold text-gray-900">
                        Linienstraße 24, 10178 Berlin
                      </p>
                      <TextParagraph sm className="text-gray-600">
                        Termine nach Vereinbarung – persönliche Fittings,
                        Reparatur-Check-ins und Same-Day Abholung.
                      </TextParagraph>
                    </div>
                  </div>
                  <Badge className="w-fit bg-orange-500 text-white">
                    Private Session buchen
                  </Badge>
                </div>
              </CardContent>
            </Card>

              <Card className="border bg-white shadow-sm">
              <CardContent className="p-6">
                <FormTable {...SupportFormData} />
              </CardContent>
            </Card>
          </div>
            <Card className="border bg-white shadow-sm">
              <CardHeader className="space-y-0 mb-3">
                <Title h4 text='Häufige Fragen zum Support' />
                <TextParagraph sm text="Transparente Antworten auf Anliegen, die uns täglich erreichen." />
              </CardHeader>
              <CardContent className="overflow-visible">
                <Accordion
                type="single"
                collapsible
                className="space-y-3 rounded-2xl overflow-visible">
                {FAQItemsData.map(({ value, question, answer }) => (
                  <AccordionItem
                    key={value}
                    value={value}
                    className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-200/50 px-4"
                  >
                    <AccordionTrigger className="text-left text-base font-semibold text-gray-900 overflow-visible">
                      {question}
                    </AccordionTrigger>
                    <AccordionContent className="pb-4 text-gray-600">
                      {answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </Container>
      </Section>
    </Main>
  );
}

export default SupportPage;