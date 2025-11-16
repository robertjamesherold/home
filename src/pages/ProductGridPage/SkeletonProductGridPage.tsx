import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom';

import { useProducts, } from '@/hooks';
import useFilter from './hooks/useFilter';
import {  Header, Section, Row, Main } from '@/layout'
import {
  FilterMenu,
} from './components';
import { TextParagraph, Title } from '@/typography';
import { Skeleton } from '@/ui'
import {SkeletonDesktopFilter, SkeletonProductGrid} from './skeletons';


const SkeletonProductGridPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') ?? '';
  const { products } = useProducts();
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


  return (
    <Main className='flex items-start'>
      <Section className="container mx-auto px-4 py-8">
        <Header className="mb-8 space-y-2">
          <Skeleton className='h-fit w-fit rounded'><Title level={ 1 } weight="bold" className='mt-0 opacity-0' text={ pageTitle } /></Skeleton>
          <Skeleton className='h-fit w-fit rounded'><TextParagraph className="text-gray-600 opacity-0" text={ subtitle } /></Skeleton>
        </Header>

        <Row className="flex gap-8">
          {/* Desktop Filters */}
          <SkeletonDesktopFilter
            categoriesData={categoriesData}
            selectedCategories={selectedCategories}
            handleCategoryToggle={handleCategoryToggle}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
          />
          {/* Product Grid */ }
          <SkeletonProductGrid
            filteredProducts={ filteredProducts }
            sortBy={ sortBy }
            setSortBy={ setSortBy }
            toggleFilterMenu={ toggleFilterMenu }
          />
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
    </Main>
  );
}

export default SkeletonProductGridPage;