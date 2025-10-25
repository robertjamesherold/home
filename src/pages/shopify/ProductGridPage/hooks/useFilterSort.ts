// useFilterSort.ts
import {  useMemo, useState } from 'react';
import type{ Product, SortBy } from '../types';

/**
 * Verantwortlichkeit:
 * - Manage searchTerm, selectedCategory, sortBy
 * - Liefert filteredProducts (relevant für Anzeige)
 */
type UseFilterSortInput = {
  products: Product[];
};

const applyFiltersAndSort = (
  products: Product[],
  searchTerm: string,
  selectedCategory: string,
  sortBy: SortBy,
) => {
  let result = [...products];

  if (selectedCategory !== 'all') {
    result = result.filter((p) => p.category === selectedCategory);
  }

  if (searchTerm.trim().length > 0) {
    const term = searchTerm.toLowerCase();
    result = result.filter(
      (p) => p.title.toLowerCase().includes(term) || p.description.toLowerCase().includes(term),
    );
  }

  if (sortBy === 'price-low') {
    result.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
  } else if (sortBy === 'price-high') {
    result.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
  } else if (sortBy === 'rating') {
    result.sort((a, b) => b.rating - a.rating);
  }

  return result;
};

const useFilterSort = ({ products }: UseFilterSortInput) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<SortBy>('default');

  const filteredProducts = useMemo(
    () => applyFiltersAndSort(products, searchTerm, selectedCategory, sortBy),
    [products, searchTerm, selectedCategory, sortBy],
  );

  const categories = useMemo(
    () => ['all', ...Array.from(new Set(products.map((p) => p.category)))],
    [products],
  );

  return {
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    sortBy,
    setSortBy,
    filteredProducts,
    categories,
  };
};

export default useFilterSort;
