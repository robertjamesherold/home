import { useSearchParams } from 'react-router-dom'
import {  SlidersHorizontal } from 'lucide-react'
import { Button } from '@ui/.'
import { productsData } from '@data/.'
import { categoriesData } from './data'
import { Grid, Header } from '@layout/.'
import
  {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from '@/ui/sheet'
import useFilter from './hooks/useFilter'
import { ProductCard, Select, NoFilteredProducts, DesktopFilter, FilterContent } from './components'
import { TextParagraph, Title } from '@/typography'


const ProductGridPage: React.FC = () =>
{
  const [ searchParams ] = useSearchParams()
  const searchQuery = searchParams.get( 'search' ) ?? ''

  const { sortBy, setSortBy, filteredProducts, selectedCategories, handleCategoryToggle, priceRange, setPriceRange } = useFilter( productsData, { searchTerm: searchQuery } )

  const pageTitle = searchQuery ? 'Suchergebnisse' : 'Alle Produkte'
  const subtitle = searchQuery
    ? `${ filteredProducts.length } Treffer für „${ searchQuery }“`
    : `${ filteredProducts.length } Produkte gefunden`
  return (
    <div className="container mx-auto px-4 py-8">
      <Header className="mb-8">
        <Title level={1} weight="bold" text={ pageTitle } />
        <TextParagraph className="text-gray-600" text={ subtitle } />
      </Header>

      <div className="flex gap-8">
        {/* Desktop Filters */ }
       <DesktopFilter
          categoriesData={ categoriesData }
          selectedCategories={ selectedCategories }
          handleCategoryToggle={ handleCategoryToggle }
          priceRange={ priceRange }
          setPriceRange={ setPriceRange }
        />

        {/* Product Grid */ }
        <div className="flex-1">
          <div className="flex items-center justify-between mb-6">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="lg:hidden gap-2">
                  <SlidersHorizontal className="h-4 w-4" />
                  Filter
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle>Filter</SheetTitle>
                  <SheetDescription>
                    Filtern Sie die Produkte nach Ihren Wünschen
                  </SheetDescription>
                </SheetHeader>
                <div className="mt-6">
                  <FilterContent
                    categoriesData={ categoriesData }
                    selectedCategories={ selectedCategories }
                    handleCategoryToggle={ handleCategoryToggle }
                    priceRange={ priceRange }
                    setPriceRange={ setPriceRange }
                  />
                </div>
              </SheetContent>
            </Sheet>

            <Select
              value={ sortBy }
              onChange={ ( value: string ) => setSortBy( value ) }
             />
          </div>

          <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProductCard {...{ filteredProducts } } />
          </Grid>

          <NoFilteredProducts {...{ filteredProducts } } />
        </div>
      </div>
    </div>
  )
}

export default ProductGridPage;
