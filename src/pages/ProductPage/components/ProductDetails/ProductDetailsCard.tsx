import { Card, CardContent, Tabs, TabsList, TabsContent, TabsTrigger } from '@ui/.'
import { Title } from '@/typography'
import type { ProductDetailsCardType } from '@/types/.'




const ProductDetailsCard: React.FC<ProductDetailsCardType> = ( {
  title, tab }: ProductDetailsCardType ) =>
{
  return (
    <Card className="border-border/80 bg-muted/50">
      <CardContent className="p-4">
        <Title level={ 3 } className="mb-2" weight="semibold" text={ title } />



        { tab?.map( ( { tabtitle, tabcontent } ) =>
        {
          return (
            <Tabs className="flex justify-between">
              <TabsList>
                <TabsTrigger value={ tabtitle }> { tabtitle } </TabsTrigger>

              </TabsList>
              <TabsContent value={ tabtitle } className="flex justify-between">
                <span>{ tabcontent.Eigenschaften }</span>
                <span>{ tabcontent.Wert }</span>
              </TabsContent>
            </Tabs>
          )
        } ) }


      </CardContent>
    </Card>
  )
};

export default ProductDetailsCard;

