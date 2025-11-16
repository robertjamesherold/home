import { Card, CardContent, CardDescription, CardHeader, CardTitle, Badge } from "@/ui";
import { Container, Grid, Icon } from "@/layout";

type SupportHighlightsProps = {
data: {
  title: string;
  description: string;
  meta: string;
  icon: LucideIcon;
}[];
}

const SupportHighlihght = ( {data}: SupportHighlightsProps)    => {
    return (
            <Grid className="w-full gap-3 lg:gap-6 md:grid-cols-1 lg:grid-cols-3">
              {data.map(({  title, description, meta, icon }) => (
              <Card key={ title } className="border bg-white shadow-sm">
                <CardHeader className="space-y-3 mb-5">
                  <Container className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                    <Icon Icon={icon} size={20}/>
                  </Container>
                  <CardTitle className="text-xl text-gray-900">{title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                    {meta}
                  </Badge>
                </CardContent>
              </Card>
            ))}
            </Grid>
       )
    }

    export default SupportHighlihght;