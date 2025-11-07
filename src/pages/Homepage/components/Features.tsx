import { Section, Grid, Column, Container } from '@layout/.'
import { Title, TextParagraph } from '@typography/.'
import type { FeaturesType } from '../types'


const Features: React.FC<FeaturesType> = ( featuresData :FeaturesType ) =>
{
    const data = featuresData.data
    return (
        <Section isBox className="border-b">
            <Grid className="grid-cols-1 md:grid-cols-3 gap-8">
                { data.map( ( { Icon, title, text } ) => (
                    <Column key={ title } className="items-center text-center gap-4">
                        <Container className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center">
                            <Icon className="h-6 w-6" />
                        </Container>
                        <Title level={ 3 } weight="semibold" text={ title } />
                        <TextParagraph className="text-gray-600" text={ text } />
                    </Column>
                ))}
            </Grid>
        </Section>
    )
} 

export default Features