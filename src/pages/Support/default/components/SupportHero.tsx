import { Container } from '@/layout';
import { TextParagraph, Title } from '@/typography';

type SupportHeroProps = {
  data: {
    subtitle: string
    title: string
    description: string;
  }
};

const SupportHero: React.FC<SupportHeroProps> = ( { data } ) =>
{
  return (
    <Container className='container mx-auto space-y-1 px-4 py-12'>
      <TextParagraph sm className="uppercase tracking-[0.3em] text-gray-500" text={ data.subtitle } />
        <Title level={2} weight="bold" className="text-gray-900" text={data.title} />
        <TextParagraph className="text-gray-600" text={data.description} />
      </Container>
  );
};

export default SupportHero;
