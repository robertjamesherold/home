import type { BottomBarDataProps } from '../types';
import { TextParagraph } from '@/typography'

import { Container, Row } from '@/layout';

const BottomBar: React.FC<{ data: BottomBarDataProps }> = ( { data } ) =>
{

    return(
    <Container outerClass="border-t border-[#dceaea] pt-6" innerClass="flex flex-col items-center justify-between gap-4 text-sm text-[#4a5d66] md:flex-row">
            <TextParagraph className="text-center md:text-left" text={ data.copyrightText } />
        <Row className="flex gap-6 ">
                {data.links.map( ( link, index ) => (
                <a key={ index } href={ link.href } className="transition-colors hover:text-[#2f6d8b]">
                    { link.text }
                </a>
            ) ) }
        </Row>
    </Container>
    )
}

export default BottomBar;
