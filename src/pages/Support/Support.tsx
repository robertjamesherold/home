import { Main, Section, Grid, Container } from '@/layout'
import { SupportHeroData, FAQItemsData, SupportHighlightsData, SupportFormData, SupportChannelsData  } from './data';
import SupportHero from './default/components/SupportHero';
import SupportHighlihght from './default/components/SupportHighlights';
import FAQItems from './default/components/FAQItems';
import SupportForm from './default/components/SupportForm'
import SupportChannels from './default/components/SupportChannels'




const SupportPage: React.FC = () =>
{
  return (
    <Main className='bg-linear-to-t from-blue-50 to-gray-300/40'>
      <Section isBox className="w-full mb-6">
        <SupportHero data={ SupportHeroData } />
        <Container className="container mx-auto space-y-6">
          <SupportHighlihght data={ SupportHighlightsData } />
          <Grid className="gap-6 xl:grid-cols-2">
            <SupportChannels data={ SupportChannelsData } />
            <SupportForm data={ SupportFormData } />
          </Grid>
          <FAQItems { ...FAQItemsData } />
        </Container>
      </Section>
    </Main> )
}

export default SupportPage;
