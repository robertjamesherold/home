import { TextParagraph, Title } from '@/typography'
import { Grid, Section } from '@/layout'
import ServiceCategoriesData from './data'
import  { Header } from '@/layout'

export function ServiceCategories() {
  return (
    <Section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <Header className="text-center mb-12">
          <Title level={2} weight='bold' className="text-slate-900 mb-4" text='Entdecken Sie unsere Behandlungsmethoden' />
          <Title level={5}  weight='normal'  className="text-slate-600 max-w-2xl mx-auto" text='Wir bieten Ihnen ein breites Spektrum an naturheilkundlichen Therapien für Ihr Wohlbefinden' />      
        </Header>

        <Grid className="grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {ServiceCategoriesData.map((category:{id: number, title: string, description: string, image: string}) => (
            <div
              key={category.id}
              className="group cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-square overflow-hidden">
                <img className='h-full object-cover ' src={category.image} />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <Title level={3} className="mb-1" text={category.title} />
                  <TextParagraph className="text-white/90" text={category.description} />
                </div>
              </div>
            </div>
          ))}
        </Grid>
      </div>
    </Section>
  );
}
