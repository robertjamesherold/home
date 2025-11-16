import { TextParagraph, Title } from '@/typography'
import { Link } from '@layout/.'

const FooterLogo: React.FC = () =>
{
    return (
        <Link
            to="/"
            className="inline-flex items-center gap-3 text-foreground"
        >
            <div>
                <Title level={5} weight='semibold' className="tracking-tight uppercase" text="Luxe" />
                <TextParagraph sm className="text-slate-900" text="Modern Wardrobe Studio" />
            </div>
        </Link>
    );
}

export default FooterLogo;