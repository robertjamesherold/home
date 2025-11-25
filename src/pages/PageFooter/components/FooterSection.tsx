import { Column } from '@layout/.'
import { TextParagraph } from '@/typography'

import { Socials, FooterLogo, FooterCard } from '../ui'

type FooterSectionProps = {
    data: { 
        text: string;
        socials: {
            label: string;
            href: string;
            icon: React.ComponentType;
        }[];
        footercarttext: string[];
    };
}


const FooterSection: React.FC<FooterSectionProps> = ({data}) =>
{
    return (
        <Column className="space-y-5 sm:col-span-3 lg:col-span-2">
            <FooterLogo />
            <TextParagraph sm className="max-w-sm text-slate-900" text={ data.text } />
            <Socials data={ data.socials } />
            <FooterCard data={ data.footercarttext } />
        </Column>
    )
}

export default FooterSection;