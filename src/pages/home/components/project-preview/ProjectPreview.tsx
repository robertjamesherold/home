import type { PreviewMapping } from './types'

import { Title, TextParagraph } from '@/typography'
import VillaOlivetoImage from "@images/VillaOlivetoImage"
import { Column, Grid, Section } from '@/layout'
import LinkButton from '@/ui/Buttons/LinkButton'
import { useProjectPreview } from './hooks/useProjectPreview'


const ProjectPreview: React.FC<PreviewMapping> = ( { data } ) =>
{
    const { isPadding, isSpan, isImageSpan } = useProjectPreview()

    return (
        <>
            { Array.isArray( data ) && data.map( ( item, index ) => (
                <Section key={ index } fullWidth className="bg-white" id="villa-oliveto">
                    <Grid className="mx-auto gap-4 grid-cols-12">
                        <Column className={ `gap-4 justify-center ${ isPadding } ${ isSpan } ${ item.isReversed ? 'order-2' : 'order-1' }` }>
                            <Title h4 text={ item.subtitle } />
                            <Title h2 text={ item.title } />
                            { Array.isArray( item.paragraph ) ? item.paragraph.map( ( text, index ) => (
                                <TextParagraph key={ index } text={ text } /> ) )
                                : <TextParagraph text={ item.paragraph } /> }
                            <LinkButton entry={ item.button.entry } label={ item.button.label } icon={ item.button.icon } />
                        </Column>
                        <Column className={ `gap-4 justify-center ${ isPadding } ${ isImageSpan } ${ item.isReversed ? 'order-1' : 'order-2' }` }>
                            <VillaOlivetoImage map={ item.image } className={ `rounded-3xl shadow-2xl h-full w-full overflow-hidden` } />
                        </Column>
                    </Grid>
                </Section> ) ) }
        </>
    )
}
export { ProjectPreview }