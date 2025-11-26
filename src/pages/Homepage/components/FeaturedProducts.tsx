import type { FeaturedProductsType } from '../types';
import { Section, Container, Header, Grid, Row } from '@/layout'
import { Title, TextParagraph } from '@/typography'
import { Button } from '@/ui'
import { Link } from 'react-router-dom';
import { default as ImageCard } from '../ui/Card'

const FeaturedProducts: React.FC<FeaturedProductsType> = ( { title, subtitle, buttonlink, buttontext, featuredProducts }: FeaturedProductsType ) =>
{
  return (
    <Section className="py-16">
      <Container className="container mx-auto px-4">
        <Header className="mb-12 text-center">
          <Title
            level={2}
            weight="bold"
            className="mb-4"
            text={ title }
          />
          <TextParagraph
            className="text-gray-600"
            text={ subtitle }
          />
        </Header>

        <Grid className="grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-3">
          { featuredProducts.map( product => (
            <ImageCard key={ product.id } { ...product } />
          ) ) } 
        </Grid>

        <Row className="mt-12 w-full justify-center text-center">
          <Link to={ buttonlink }>
            <Button size="lg">{ buttontext }</Button>
          </Link>
        </Row>
      </Container>
    </Section> )
}

export default FeaturedProducts;
