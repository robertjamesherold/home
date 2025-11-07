import type { FeaturedProductsType } from '../types';
import { Link } from 'react-router-dom';
import { Button } from '@ui/.';
import { Row, Grid, Section, Container, Header } from '@/layout';
import { TextParagraph, Title } from '@typography/.';
import { ImageCard } from '../ui';

const FeaturedProducts: React.FC<FeaturedProductsType> = (
  featuredProductsData: FeaturedProductsType
) => {
  return (
    <Section className="py-16">
      <Container className="container mx-auto px-4">
        <Header className="mb-12 text-center">
          <Title
            level={2}
            weight="bold"
            className="mb-4"
            text={featuredProductsData.title}
          />
          <TextParagraph
            className="text-gray-600"
            text={featuredProductsData.subtitle}
          />
        </Header>

        <Grid className="grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-3">
          <ImageCard product={featuredProductsData} />
        </Grid>

        <Row className="mt-12 w-full justify-center text-center">
          <Link to={featuredProductsData.buttonlink}>
            <Button size="lg">{featuredProductsData.buttontext}</Button>
          </Link>
        </Row>
      </Container>
    </Section>
  );
};

export default FeaturedProducts;
