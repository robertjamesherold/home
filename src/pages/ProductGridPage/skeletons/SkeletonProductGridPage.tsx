
import { useProductGridPage } from '../hooks'
import { Header, Section, Row, Main } from '@/layout'
import { TextParagraph, Title } from '@/typography';
import { Skeleton } from '@/ui'
import { SkeletonDesktopFilter, SkeletonProductGrid } from './components';


const SkeletonProductGridPage: React.FC = () => {
  const { 
    categoriesData,
    sortBy,
    setSortBy,
    filteredProducts,
    selectedCategories,
    handleCategoryToggle,
    priceRange,
    setPriceRange,
    pageTitle,
    subtitle,
  } = useProductGridPage();



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
          />
        </Row>
      </Section>

  
    </Main>
  );
}

export default SkeletonProductGridPage;