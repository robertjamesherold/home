export type FilterContentType = {
  categoriesData: string[];
  selectedCategories: string[];
  handleCategoryToggle: (category: string) => void;
  priceRange: number[];
  setPriceRange: (value: number[]) => void;
};
