import { Card, CardContent, CardHeader, Badge } from "@/ui"
import { Grid, Iconpatch } from "@/layout"
import type { LucideIcon } from 'lucide-react'
import { TextParagraph, Title } from '@/typography'

type SupportHighlightsProps = {
  data: {
    title: string
    description: string
    meta: string
    badge: string
    icon: LucideIcon
  }[]
}

const SupportHighlihght = ( { data }: SupportHighlightsProps ) =>
{
  return (
    <Grid className="w-full gap-3 lg:gap-6 sm:grid-cols-1 md:grid-cols-3 items-stretch">
      { data.map( ( { title, description, meta, icon, badge } ) => (
        <Card key={ title } className="border bg-white shadow-sm h-full flex flex-col">
          <CardHeader className="space-y-0 mb-3 flex flex-col flex-1">
            <Iconpatch icon={ icon } size={ 6 } rounded="xl" variant='secondary' />
            <Title h4 className="text-slate-900 " text={ title } />
            <TextParagraph sm className="text-gray-00 h-full grow" text={ description } />
          </CardHeader>

          <CardContent>
            <Badge className={ `text-gray-200 ${ badge }` } >
              { meta }
            </Badge>
          </CardContent>
        </Card>
      ) ) }
    </Grid>
  )
}

export default SupportHighlihght
