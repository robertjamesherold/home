import  { Clock, MapPin } from 'lucide-react';
import { FormTable} from '@/components';
import {
  Badge,
  Card,
  CardContent,
  CardHeader,
} from '@/ui';
import { TextParagraph, Title } from '@/typography';
import { Main, Section, Grid, Container, Icon, Column  } from '@/layout';
import { SupportHeroData, FAQItemsData, SupportHighlightsData, SupportFormData, SupportChannelsData  } from './data';
import SupportHero from './default/components/SupportHero';
import SupportHighlihght from './default/components/SupportHighlights';
import FAQItems from './default/components/FAQItems';








const SupportPage:React.FC = () => 
  {
    return (
      <Main className='bg-linear-to-t from-blue-50 to-gray-300/40'>
        <Section className="w-full mb-6">
          <SupportHero data={SupportHeroData} />
          <Container className="container mx-auto px-4 space-y-6">
            <SupportHighlihght data={SupportHighlightsData} />


          
          <Grid className="gap-6 xl:grid-cols-2">
              <Card className="border bg-white shadow-sm">
                <CardHeader className="space-y-0 mb-3">
                  <Title h4 text='Kontaktwege & Studio' />
                  <TextParagraph sm text="Wählen Sie den Kanal, der am besten zu Ihrer Situation passt." />
              </CardHeader>
              <CardContent className="space-y-6">
                {SupportChannelsData.map(
                  ({ Icon, title, detail, description, hours }) => (
                    <Column
                      key={title}
                      className="flex flex-col gap-3 rounded-2xl border border-gray-100 p-4 sm:flex-row sm:items-center sm:justify-between"
                    >
                      <Container className="flex flex-1 items-start gap-4">
                        <Container className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-50 text-gray-900">
                          <Icon Icon={MapPin} className="h-5 w-5" />
                        </Container>
                        <Container>
                          <TextParagraph sm className="uppercase tracking-[0.15em] text-gray-400" text={title} />
                          <TextParagraph className="font-semibold text-gray-900" text={detail} />
                          <TextParagraph sm className="text-gray-600" text={description} />
                        </Container>
                      </Container>
                      <Container className="flex items-center gap-2 rounded-full bg-gray-900/5 px-3 py-1 text-sm font-medium text-gray-700">
                         <Icon Icon={Clock} size={4} />
                        {hours}
                      </Container>
                    </Column>
                  )
                )}

                <Container className="flex flex-col gap-4 rounded-2xl border border-dashed border-gray-200 p-4 md:flex-row md:items-center md:justify-between">
                  <Container className="flex items-start gap-4">
                    <Container className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-gray-900">
                      <Icon Icon={MapPin} size={5}   />
                    </Container>
                    <Container>
                      <TextParagraph sm className="uppercase tracking-[0.15em] text-gray-400" text="Studio Berlin Mitte" />
                      <TextParagraph className="font-semibold text-gray-900" text="Linienstraße 24, 10178 Berlin" />
                      <TextParagraph sm className="text-gray-600" text="Termine nach Vereinbarung – persönliche Fittings, Reparatur-Check-ins und Same-Day Abholung." />
                    </Container>
                  </Container>
                  <Badge className="w-fit bg-orange-500 text-white">
                    Private Session buchen
                  </Badge>
                </Container>
              </CardContent>
            </Card>

              <Card className="border bg-white shadow-sm">
              <CardContent className="p-6">
                <FormTable {...SupportFormData} />
              </CardContent>
            </Card>
          </Grid>
           <FAQItems {...FAQItemsData} />
        </Container>
      </Section>
    </Main>
  );
}

export default SupportPage;

export { SupportPage };