import type { ProductType } from '@/types/.';

export type FilterMenuType = {
  filterMenuOpen: boolean;
  closeFilterMenu: () => void;
  categoriesData: string[];
  selectedCategories: string[];
  setSelectedCategories: (categories: string[]) => void;
  priceRange: number[];
  setPriceRange: (value: number[]) => void;
  handleCategoryToggle: (categoryId: string) => void;
  filteredProducts: ProductType[];
};
