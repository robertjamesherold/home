import { Section, Grid, Column, Container } from '@/layout';
import { Title, TextParagraph } from '@/typography';
import type { FeaturesType } from '../types';

const Features: React.FC<FeaturesType> = (featuresData: FeaturesType) => {
  const data = featuresData.data;
  return (
    <Section isBox className="border-b">
      <Grid className="w-full grid-cols-1 gap-8 md:grid-cols-3">
        {data.map(({ Icon, title, text }) => (
          <Column key={title} className="items-center gap-4 text-center">
            <Container className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100">
              <Icon className="h-6 w-6" />
            </Container>
            <Title level={3} weight="semibold" text={title} />
            <TextParagraph className="text-gray-600" text={text} />
          </Column>
        ))}
      </Grid>
    </Section>
  );
};

export default Features;
