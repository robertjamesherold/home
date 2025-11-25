import { Card, CardContent, CardHeader, Badge } from '@/ui'
import { TextParagraph, Title } from '@/typography'
import { Container, Icon, Column, Iconpatch } from '@/layout'
import { SupportChannelsData } from '../../data'
import { Clock } from 'lucide-react'

const SupportChannels: React.FC<{ data: typeof SupportChannelsData }> = ( { data }  ) =>
{
    return (
        <Card className="border bg-white shadow-sm">
            <CardHeader className="space-y-0 mb-3">
                <Title h4 text={ data.title } />
                <TextParagraph xs text={ data.subtitle } />
            </CardHeader>
            <CardContent className="space-y-6">
                { data.data.map(
                    ( { icon: ChannelIcon, title, detail, description, hours, badge, border } ) => (

                        <Column
                            key={ title }
                            className={ `flex flex-col gap-3 rounded-2xl border border-gray-100 p-4 sm:flex-row sm:items-center sm:justify-between  ${ border }` }
                        >
                            <Container className="flex flex-1 items-start gap-4">
                               
                                <Iconpatch icon={ ChannelIcon } size={ 6 } rounded="lg" className={ badge } />
                                <Container>
                                    <TextParagraph xs className="uppercase -tracking-tight text-gray-600" text={ title } />
                                    <Title h5 weight='normal' className="text-gray-900" text={ detail } />
                                    <TextParagraph xs className="text-gray-600" text={ description } />
                                </Container>
                            </Container>



                            <Badge className={`${ badge } place-self-end`}> <Icon Icon={ Clock } size={ 4 } />
                                { hours }
                            </Badge>

                        </Column>
                    ) ) }





            </CardContent>
        </Card>
    )
}

export default SupportChannels;