import { Container } from '@/layout';
import { TextParagraph } from '@/typography'

type FooterFootProps = {
    text?: string;
}

const FooterFoot:React.FC<FooterFootProps> = ({ text }) =>
{
    return (
        <Container className="mt-10 flex flex-col gap-4 border-t border-border/60 pt-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
            <TextParagraph sm text={ text } />
        </Container> )

}


export default FooterFoot;