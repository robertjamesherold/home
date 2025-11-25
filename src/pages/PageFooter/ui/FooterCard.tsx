import { Container  } from '@/layout';
import { TextParagraph } from '@/typography'
import type { FooterSectionData } from '../data'

type FooterCardProps = {
    data: typeof FooterSectionData.footercarttext;
};

const FooterCard:React.FC<FooterCardProps> = ({ data }) =>
{   
    return (
        <Container className="rounded-2xl border border-border/60 bg-background/70 p-4 text-slate-700 shadow-sm">
            <TextParagraph className='font-semibold text-slate-900' text={ data[ 0 ] } />
            <TextParagraph sm text={ data[ 1 ] } />
            <TextParagraph sm text={ data[ 2 ] } />
            <TextParagraph sm className="mt-2" text={ data[ 3 ] } />
        </Container>
    )
}

export default FooterCard