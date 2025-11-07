import { Column, Row, Image } from '@/layout';
import { TextParagraph } from '@/typography';
import { Badge } from '../../../ui/badge';
import type { HeroCardDataTypes } from '../types'
await import( '../data' );


const HeroCard: React.FC<HeroCardDataTypes> = (data) =>
{
    return (
        <Column className="mt-6 gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-6 backdrop-blur-xl shadow-xl md:absolute md:-bottom-10 md:left-8 md:right-8 md:mt-0">
            <Row className="items-center gap-4">
                <Image className="h-12 w-12 rounded-full border border-slate-200" src={ data.image } alt={ data.alt } />
                <Column className="flex-1">
                    <TextParagraph sm className="font-semibold text-slate-800" text={`${data.name} · ${data.title}`} />
                    <TextParagraph xs className="text-slate-600" text={data.patientCount} />
                </Column>
            </Row>
            <Row className="flex-wrap items-center gap-3">
                <Badge className="border border-emerald-700/50 bg-emerald-700/15 text-emerald-600">{data.rating}</Badge>
                <TextParagraph xs className="text-slate-600" text={data.ratingInfo} />
            </Row>
        </Column>
    )
}

export default HeroCard;