import { Row, Column } from '@/layout'
import {  Card, CardAction, CardContent } from '@/ui'
import { Skeleton } from '@/ui/skeleton'


const SkeletonImageCard: React.FC = () => (
  <Card className="overflow-hidden">
    <Row className="relative aspect-5/3 w-full">
      <Skeleton className="absolute inset-0 h-full w-full" />
    </Row>
    <CardContent className="space-y-3 p-4">
      <Column className="flex flex-col gap-2">
        <Skeleton className="h-4 w-24 rounded" />
        <Skeleton className="h-5 w-3/4 rounded" />
      </Column>
      <Row className="flex items-center gap-2">
        <Skeleton className="h-4 w-4 rounded" />
        <Skeleton className="h-4 w-10 rounded" />
        <Skeleton className="h-4 w-16 rounded" />
      </Row>
      <Row className="flex items-center gap-3">
        <Skeleton className="h-5 w-20 rounded" />
        <Skeleton className="h-4 w-14 rounded" />
      </Row>
      <CardAction className='w-full sm:w-4/6'>
        <Skeleton className="h-10 w-full rounded-xl" />
      </CardAction>
    </CardContent>
  </Card>
)


export default SkeletonImageCard