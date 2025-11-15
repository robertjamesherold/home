import type { BannerType } from '../types/'
import { Section, Image, Column } from '@layout/.'
import { Title, TextParagraph, } from '@/typography'
import { Link } from 'react-router-dom';
import { Button } from '@/ui';

const Banner: React.FC<BannerType> = ({
  image,
  title,
  subtitle,
  buttonlink,
  buttontext,
}: BannerType ) =>
{ 
  return (
    <Section className="relative flex h-[400px] items-center justify-center bg-gray-100">
      <Image isAbsolute src={ image }
        alt="Banner Image"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <Image isAbsolute className="inset-0 bg-black/50" />
      <Column className="relative z-10 max-w-2xl px-4 text-center text-white">
        <Title level={2} weight="semibold" className="mb-4" text={title} />
        <TextParagraph className="mb-6 text-lg opacity-100" text={ subtitle } />
        <Link to={buttonlink}>
          <Button size="lg" variant="secondary">
            {buttontext}
          </Button>
        </Link>
      </Column>   
    </Section>
  );
};

export default Banner;
