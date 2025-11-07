import { Title, TextParagraph, TextLink } from '@/typography'
import type { FooterLinkProps } from '../types'


const FooterLinks: React.FC<{ data: FooterLinkProps[] }> = ( { data } ) =>
{

    return (    
      <>
            { data.map(( { category, items, column } ) => (
                <div className={ `${ column === 2 ? 'col-span-2' : 'col-span-1'} space-y-2 text-sm`} >
            <Title
                level={ 5 }
                weight="semibold"
                className="mb-4 text-blue-500"
                text={ category }
            />

            <ul className="space-y-2 text-sm">
                { items.map(( { name, link, isLink }, index ) => (
                    <li key={ index }>
                        {isLink ? <TextLink sm href={ link } text={ name } /> : <TextParagraph sm text={name} /> }
                     </li>
                ) ) }
            </ul>
            </div>
        ) )}
      </>
    )
}

  
    

export default FooterLinks
