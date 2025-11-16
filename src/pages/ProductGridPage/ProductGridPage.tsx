import { useMemo, useState, type FC } from 'react'
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal } from 'lucide-react';

import { useProducts, useSkeletonLoader } from '@/hooks';
import useFilter from './hooks/useFilter';
import { Column, Grid, Header, Section, Row } from '@/layout';
import {
  SelectButton,
  NoFilteredProducts,
  DesktopFilter,
  FilterMenu,
} from './components';
import { TextParagraph, Title } from '@/typography';
import { Button } from '@/ui';
import { Skeleton } from '@/ui/skeleton'
import { ImageCard, ProductCardSkeleton } from './ui'


const ProductGridPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') ?? '';
  const { products, isReady } = useProducts();
  const { showSkeleton } = useSkeletonLoader({ isLoading: !isReady });
  const categoriesData = useMemo(() => {
    const categorySet = new Set<string>();
    for (const product of products) {
      if (product.category) {
        categorySet.add(product.category);
      }
    }

    return ['Alle', ...Array.from(categorySet).sort((a, b) => a.localeCompare(b))];
  }, [products]);
  const {
    sortBy,
    setSortBy,
    filteredProducts,
    selectedCategories,
    handleCategoryToggle,
    priceRange,
    setPriceRange,
    setSelectedCategories,
  } = useFilter(products, { searchTerm: searchQuery });
  const [filterMenuOpen, setFilterMenuOpen] = useState(false);





  const pageTitle = searchQuery ? 'Suchergebnisse' : 'Alle Produkte';
  const subtitle = searchQuery
    ? `${filteredProducts.length} Treffer für „${searchQuery}“`
    : `${filteredProducts.length} Produkte gefunden`;

  const toggleFilterMenu = () => {
    setFilterMenuOpen(!filterMenuOpen);
  };

  const closeFilterMenu = () => {
    setFilterMenuOpen(false);
  };

  if (showSkeleton) {
    return <ProductGridSkeleton />;
  }

  return (
    <>
      <Section className="container mx-auto px-4 py-8">
        <Header className="mb-8">
          <Title level={1} weight="bold" text={pageTitle} />
          <TextParagraph className="text-gray-600" text={subtitle} />
        </Header>

        <Row className="flex gap-8">
          {/* Desktop Filters */}
          <DesktopFilter
            categoriesData={categoriesData}
            selectedCategories={selectedCategories}
            handleCategoryToggle={handleCategoryToggle}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
          />

          {/* Product Grid */ }

          <Column className="flex-1">
            <Row className="mb-6 items-center justify-between gap-12">
              <Button
                variant="default"
                className="gap-2 lg:hidden"
                onClick={toggleFilterMenu}
              >
                <SlidersHorizontal className="h-4 w-4" />
                Filter
              </Button>

              <SelectButton
                value={sortBy}
                onChange={(value: string) => setSortBy(value)}
              />
            </Row>

            <Grid className="grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map(product => (
                <ImageCard key={product.id} {...product} />
              ))}
            </Grid>

            <NoFilteredProducts {...{ filteredProducts }} />
          </Column>
        </Row>
      </Section>

      <FilterMenu
        filterMenuOpen={filterMenuOpen}
        closeFilterMenu={closeFilterMenu}
        categoriesData={categoriesData}
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
        handleCategoryToggle={handleCategoryToggle}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        filteredProducts={filteredProducts}
      />
    </>
  );
};

const ProductGridSkeleton: FC = () =>
{
  const cards = useMemo(
    () =>
      Array.from( { length: 6 }, ( _, index ) => (
        <ProductCardSkeleton key={ `product-grid-skeleton-${ index }` } />
      ) ),
    []
  )

  return (
    <Section className="container mx-auto px-4 py-8">
      <Header className="mb-8 space-y-3">
        <Skeleton className="h-10 w-64 max-w-full" />
        <Skeleton className="h-5 w-80 max-w-full" />
      </Header>

      <Row className="flex gap-8">
        <FilterSkeleton />
        <Column className="flex-1">
          <Row className="mb-6 items-center justify-between gap-12">
            <Skeleton className="h-10 w-32 lg:hidden" />
            <Skeleton className="h-10 w-48" />
          </Row>

          <Grid className="grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            { cards }
          </Grid>
        </Column>
      </Row>
    </Section>
  )
}

const FilterSkeleton: FC = () => (
  <aside className="hidden w-64 shrink-0 lg:block">
    <div className="sticky top-24 space-y-6 rounded-3xl border border-border bg-white p-5 shadow-sm">
      <div>
        <Skeleton className="mb-4 h-5 w-32" />
        <div className="space-y-3">
          { Array.from( { length: 6 } ).map( ( _, index ) => (
            <div key={ `filter-category-skeleton-${ index }` } className="flex items-center gap-3">
              <Skeleton className="h-4 w-4 rounded" />
              <Skeleton className="h-4 flex-1" />
            </div>
          ) ) }
        </div>
      </div>

      <div className="space-y-4">
        <Skeleton className="h-5 w-14" />
        <Skeleton className="h-2 w-full rounded-full" />
        <div className="flex items-center justify-between">
          <Skeleton className="h-4 w-12" />
          <Skeleton className="h-4 w-12" />
        </div>
      </div>
    </div>
  </aside>
);

export default ProductGridPage;
