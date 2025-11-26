import { Column, Link } from '@/layout';
import { Title } from '@/typography'
import FooterLinksData from '../data/FooterLinks.data'

type FooterLinksProps = {
    data: typeof FooterLinksData
}; 

const FooterLinks:React.FC<FooterLinksProps> = ({ data }) =>
{
    const FooterLinks = data.length <= 3 ? data : data.slice( 0, 3 );

    return (<>
        {
            FooterLinks.map( ( { title, links }, sectionIndex ) => (
                <Column key={ sectionIndex } className="space-y-3">

                    <Title level={ 6 } className="uppercase tracking-[0.15em] text-slate-700" text={ title } />
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        { Array.isArray( links ) &&
                            links.map( ( link: { label: string, to?: string }, index: number ) =>
                            {
                                const { label, to } = link
                                return (
                                    <li key={ index }>
                                        <Link

                                            to={ to }
                                            className="transition hover:underline"
                                            text={ label }
                                        />
                                    </li>
                                )
                            } ) }
                    </ul>
                </Column>
            ) )
        }
    </>     
    )
}

export default FooterLinks