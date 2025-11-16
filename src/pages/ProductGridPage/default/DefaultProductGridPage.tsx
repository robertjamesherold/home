
import { useProductGridPage } from '../hooks';
import { Header, Section, Row, Main } from '@/layout'
import
  {
  DesktopFilter,
  FilterMenu,
  ProductGrid,
} from './components';
import { TextParagraph, Title } from '@/typography';
import SkeletonProductGridPage from '../skeletons/SkeletonProductGridPage';


const DefaultProductGridPage: React.FC = () => {
 const { showSkeleton,
        categoriesData,
        sortBy,
        setSortBy,
        filteredProducts,
        selectedCategories,
        handleCategoryToggle,
        priceRange,
        setPriceRange,
        setSelectedCategories,
        pageTitle,
        subtitle,
        toggleFilterMenu,
        closeFilterMenu,
        filterMenuOpen,
      } = useProductGridPage();

  if (showSkeleton) {
    return <SkeletonProductGridPage />;
  }

  return (
    <Main className='flex items-start'>
      <Section className="container mx-auto px-4 py-8">
        <Header className="mb-8 space-y-2">
          <Title level={ 1 } weight="bold" className='mt-0' text={ pageTitle } />
          <TextParagraph className="text-gray-600" text={ subtitle } />
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
          <ProductGrid
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
};

export default DefaultProductGridPage
