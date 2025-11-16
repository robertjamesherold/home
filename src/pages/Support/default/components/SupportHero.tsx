import { Container } from '@/layout';
import { TextParagraph, Title } from '@/typography';

type SupportHeroProps = 
 {
  subtitle: string;
  title: string;
  description: string;
};

const SupportHero: React.FC<SupportHeroProps> = ({data}: SupportHeroProps) => {
  return (
    <Container outerClass="bg-linear-to-t from-blue-50 to-gray-300/40" innerClass="container mx-auto space-y-3 px-4 py-12">
        <TextParagraph xs className="uppercase tracking-[0.3em] text-gray-500" text={data.subtitle} />
        <Title level={2} weight="bold" className="text-gray-900" text={data.title} />
        <TextParagraph className="text-gray-600" text={data.description} />
      </Container>
  );
};

export default SupportHero;
