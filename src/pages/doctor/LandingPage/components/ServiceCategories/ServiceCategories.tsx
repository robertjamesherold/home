import { TextParagraph, Title } from '@/typography';
import { Article, Grid, Section } from '@/layout'
import ServiceCategoriesData from './data';
import { Header, Container } from '@/layout';

export function ServiceCategories() {
  return (
    <Section className="bg-white section safe-area-padding">
      <Container className="container">
        <Header className="mb-12 text-center">
          <Title
            level={2}
            weight="bold"
            className="mb-4 text-slate-900"
          >
            Entdecken Sie unsere <span className='text-green-600'>Behandlungsmethoden</span>
          </Title>
          <Title
            level={5}
            weight="normal"
            className="mx-auto max-w-2xl text-slate-600"
            text="Wir bieten Ihnen ein breites Spektrum an naturheilkundlichen Therapien für Ihr Wohlbefinden"
          />
        </Header>

        <Grid className="grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
          {ServiceCategoriesData.map(
            (category: {
              id: number;
              title: string;
              description: string;
              image: string;
            }) => (
              <div
                key={category.id}
                className="group cursor-pointer overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl"
              >
                <Article className="relative aspect-square overflow-hidden">
                  <img className="h-full object-cover" src={category.image} />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <Title level={3} className="mb-1" text={category.title} />
                    <TextParagraph
                      className="text-white/90"
                      text={category.description}
                    />
                  </div>
                </Article>
              </div>
            )
          )}
        </Grid>
      </Container>
    </Section>
  );
}
