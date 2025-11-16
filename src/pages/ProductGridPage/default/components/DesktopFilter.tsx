import FilterContent from './FilterContent';
import { Container } from '@layout/.'

type FilterContentType = {
  categoriesData: string[]
  selectedCategories: string[]
  handleCategoryToggle: ( category: string ) => void
  priceRange: number[]
  setPriceRange: ( value: number[] ) => void
};



const DesktopFilter: React.FC<FilterContentType> = ({
  categoriesData,
  selectedCategories,
  handleCategoryToggle,
  priceRange,
  setPriceRange,
}: FilterContentType) => {
  return (
    <aside className="hidden w-64 shrink-0 lg:block">
      <Container className="sticky top-24">
        <FilterContent
          categoriesData={categoriesData}
          selectedCategories={selectedCategories}
          handleCategoryToggle={handleCategoryToggle}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
        />
      </Container>
    </aside>
  );
};

export default DesktopFilter;


