import { Link } from 'react-router-dom'
import { Flame } from 'lucide-react'
import { Button } from '@ui/.'
import { productsData } from '@data/.'
import { Grid, Header } from '@layout/.'
import { ProductCard, NoFilteredProducts } from '@/pages/ProductGridPage/components'
import { Title, TextParagraph } from '@/typography'

const SalePage: React.FC = () =>
{
  const saleProducts = productsData.filter( ( product ) => product.tags.includes( 'sale' ) )

  return (
    <section className="container mx-auto px-4 py-10">
      <Header className="mb-8 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-gray-400">
            <Flame className="h-4 w-4 text-gray-900" />
            Sale
          </div>
          <Title level={ 1 } weight="bold" text="Kuratiertes Sale-Sortiment" />
          <TextParagraph
            className="text-gray-600"
            text="Minimalistische Looks, maximal reduziert. Entdecken Sie zeitlose Essentials mit frischem Akzent."
          />
        </div>
        <Button asChild variant="outline" className="border-gray-900 text-gray-900 hover:bg-gray-100">
          <Link to="/products">Alle Produkte</Link>
        </Button>
      </Header>

      <Grid className="grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <ProductCard filteredProducts={ saleProducts } />
      </Grid>

      <NoFilteredProducts filteredProducts={ saleProducts } />
    </section>
  )
}

export default SalePage
