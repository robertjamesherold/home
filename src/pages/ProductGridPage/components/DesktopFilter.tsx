import type { FilterContentType } from '../types';
import FilterContent from './FilterContent';

const DesktopFilter: React.FC<FilterContentType> = ({
  categoriesData,
  selectedCategories,
  handleCategoryToggle,
  priceRange,
  setPriceRange,
}: FilterContentType) => {
  return (
    <aside className="hidden w-64 shrink-0 lg:block">
      <div className="sticky top-24">
        <FilterContent
          categoriesData={categoriesData}
          selectedCategories={selectedCategories}
          handleCategoryToggle={handleCategoryToggle}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
        />
      </div>
    </aside>
  );
};

export default DesktopFilter;
