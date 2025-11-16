import type { FilterContentType } from '../types';
import SkeletonFilterContent from './FilterContent'
import { Container } from '@layout/.'

const SkeletonDesktopFilter: React.FC<FilterContentType> = ( {
  categoriesData,
  selectedCategories,
  handleCategoryToggle,
  priceRange,
  setPriceRange,
}: FilterContentType ) =>
{
  return (
    <aside className="hidden w-64 shrink-0 lg:block">
      <Container className="sticky top-24">
        <SkeletonFilterContent
          categoriesData={ categoriesData }
          selectedCategories={ selectedCategories }
          handleCategoryToggle={ handleCategoryToggle }
          priceRange={ priceRange }
          setPriceRange={ setPriceRange }
        />
      </Container>
    </aside>
  )
}

export default SkeletonDesktopFilter