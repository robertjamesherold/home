import { useSearchParams } from 'react-router-dom';
import { productsData } from '@/data';
import { categoriesData } from './data';
import useFilter from './hooks/useFilter';
import { Column, Grid, Header, Section, Row } from '@/layout';
import {
  ProductCard,
  SelectButton,
  NoFilteredProducts,
  DesktopFilter,
  FilterMenu,
} from './components';
import { TextParagraph, Title } from '@/typography';
import { Button } from '@/ui';
import { SlidersHorizontal } from 'lucide-react';
import { useState } from 'react';

const ProductGridPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') ?? '';
  const {
    sortBy,
    setSortBy,
    filteredProducts,
    selectedCategories,
    handleCategoryToggle,
    priceRange,
    setPriceRange,
    setSelectedCategories,
  } = useFilter(productsData, { searchTerm: searchQuery });
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

          {/* Product Grid */}
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
              <ProductCard {...{ filteredProducts }} />
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

export default ProductGridPage;
