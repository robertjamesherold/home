import type { BannerType } from '../types/';
import useRandomImages from '@/hooks/useRandomImages';

import { Section, Image, Column } from '@/layout';
import { TextParagraph, Title } from '@/typography/.';
import { Link } from 'react-router-dom';
import { Button } from '@ui/.';






const Banner: React.FC<BannerType> = ({ title, subtitle, buttonlink, buttontext }: BannerType) =>
{
    const { getRandomImageUrls } = useRandomImages();

    return (
        <Section className="relative h-[400px] flex items-center justify-center bg-gray-100">
            <Image
                isAbsolute
                src={ getRandomImageUrls( 3, { size: { width: 1920, height: 1080 }, cacheKey: 'homepage-hero' } )[ 0 ] }
                alt="Hero"
                className="absolute inset-0 w-full h-full object-cover"
            />
            <Image isAbsolute className="inset-0 bg-black/50" />
            <Column className="relative z-10 text-center text-white max-w-2xl px-4">
                <Title level={ 2 } weight='semibold' className="mb-4" text={title} />
                <TextParagraph className="text-lg mb-6 opacity-90" text={subtitle} />
                <Link to={buttonlink}>
                    <Button size="lg" variant="secondary">
                        {buttontext}
                    </Button>
                </Link>
            </Column>
        </Section>
    )
}   

export default Banner;