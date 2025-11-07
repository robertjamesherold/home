import { Section, Image, Container } from '@layout/.';
import { Title, TextParagraph } from '@typography/.';
import { Link } from 'react-router-dom';
import { Button } from '@ui/.';
import { ArrowRight } from 'lucide-react';
import useRandomImages from '@/hooks/useRandomImages';
import type { HeroType } from '../types';

const Hero: React.FC<HeroType> = ({
  title,
  subtitle,
  buttonText,
  buttonLink,
}: HeroType) => {
  const { getRandomImageUrls } = useRandomImages();

  return (
    <Section className="relative flex h-[600px] items-center justify-center bg-gray-100">
      <Image
        isAbsolute
        src={
          getRandomImageUrls(1, {
            size: { width: 1920, height: 1080 },
            cacheKey: 'homepage-hero',
          })[0]
        }
        alt="Hero"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <Image className="absolute inset-0 bg-black/40" />
      <Container className="relative z-10 max-w-3xl px-4 text-center text-white">
        <Title level={1} weight="bold" className="mb-6" text={title} />
        <TextParagraph className="mb-8 text-xl opacity-90" text={subtitle} />
        <Link to={buttonLink}>
          <Button size="lg" className="gap-2">
            {buttonText}
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </Container>
    </Section>
  );
};

export default Hero;
