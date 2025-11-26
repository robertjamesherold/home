import { Card, CardContent, CardHeader, Badge } from '@/ui'
import { TextParagraph, Title } from '@/typography'
import { Container, Header, Icon, Iconpatch } from '@/layout'
import { SupportChannelsData } from '../../data'
import { Clock } from 'lucide-react'
import { useBreakpoint } from '@/hooks'

const SupportChannels: React.FC<{ data: typeof SupportChannelsData }> = ( { data }  ) =>
{
    const { getBreakpoint } = useBreakpoint()
    const breakpoint = getBreakpoint()

    /* Mobile View */

    if ( breakpoint === 'default' || breakpoint === 'xs' ) return (
        <>
            <Header className="space-y-0">
                <Title h3 text={ data.title } />
                <TextParagraph sm text={ data.subtitle } />
            </Header>
            <Container className="space-y-6">
                { data.data.map(
                    ( { icon, title, detail, description, hours, badge, border } ) => (

                        <Container
                            key={ title }
                            className={ `flex flex-col gap-3 rounded-2xl border border-gray-100 p-4 sm:flex-row sm:items-center sm:justify-between  ${ border }` }
                        >
                            <Container className="flex flex-col sm:flex-row md:flex-1 items-start gap-4">

                                <Iconpatch icon={ icon } size={ 6 } rounded="xl" className={`${ border } ${ badge }`} />
                                <Container className='space-y-0'>
                                    <TextParagraph xs className="uppercase -tracking-tight text-gray-600" text={ title } />
                                    <Title h5 weight='normal' className="text-gray-900" text={ detail } />
                                    <TextParagraph xs className="text-gray-600" text={ description } />
                                </Container>
                            </Container>



                            <Badge className={ `${ badge } sm:place-self-center` }> <Icon Icon={ Clock } size={ 4 } />
                                { hours }
                            </Badge>

                        </Container>
                    ) ) }





            </Container>
        </>
    )

    /* Desktop View */

    else return (
        <Card className="border bg-white shadow-sm">
            <CardHeader className="space-y-0 mb-3">
                <Title h4 text={ data.title } />
                <TextParagraph xs text={ data.subtitle } />
            </CardHeader>
            <CardContent className="space-y-6">
                { data.data.map(
                    ( { icon, title, detail, description, hours, badge, border } ) => (

                        <Container
                            key={ title }
                            className={ `flex flex-col gap-3 rounded-2xl border border-gray-100 p-4 sm:flex-row sm:items-center sm:justify-between  ${ border }` }
                        >
                            <Container className="flex flex-col sm:flex-row md:flex-1 items-start gap-4">
                               
                                <Iconpatch icon={ icon } size={ 6 } rounded="xl" className={ `${ badge } sm:place-self-center` } />
                                <Container className='space-y-0'>
                                    <TextParagraph xs className="uppercase -tracking-tight text-gray-600" text={ title } />
                                    <Title h5 weight='normal' className="text-gray-900" text={ detail } />
                                    <TextParagraph xs className="text-gray-600" text={ description } />
                                </Container>
                            </Container>



                            <Badge className={ `${ badge } sm:place-self-center` }> <Icon Icon={ Clock } size={ 4 } />
                                { hours }
                            </Badge>

                        </Container>
                    ) ) }





            </CardContent>
        </Card>
    )
}

export default SupportChannels;