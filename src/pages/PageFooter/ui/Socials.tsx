import { Link, Row, Icon } from '@layout/.'
import type { SocialsType } from '../data/FooterSection.data'

type SocialsProps = {
    data: SocialsType[];
}
    
const Socials: React.FC<SocialsProps> = ({data}) => (
    <Row className="gap-3">
        { data.map( ( { label, href, icon } ) => (
            <Link
                key={ label }
                href={ href }
                target="_blank"
                rel="noreferrer"
                aria-label={ label }
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border/60 text-muted-foreground transition hover:border-foreground hover:text-foreground"
            >
                <Icon Icon={ icon } size={ 4 } />
            </Link>
        ) ) }
    </Row>
)

export default Socials;