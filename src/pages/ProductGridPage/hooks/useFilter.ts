import { useEffect, useMemo, useState } from 'react';
import type { ProductType } from '@/types';

type FilterOptions = {
  searchTerm?: string;
};

const useFilter = (
  productsData: ProductType[],
  options: FilterOptions = {}
) => {
  const { searchTerm: externalSearchTerm = '' } = options;

  const [selectedCategories, setSelectedCategories] = useState<string[]>([
    'Alle',
  ]);
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [sortBy, setSortBy] = useState('featured');
  const [searchTerm, setSearchTerm] = useState(externalSearchTerm);

  useEffect(() => {
    setSearchTerm(externalSearchTerm);
  }, [externalSearchTerm]);

  const handleCategoryToggle = (category: string) => {
    if (category === 'Alle') {
      setSelectedCategories(['Alle']);
      return;
    }

    setSelectedCategories((prev) => {
      const newCategories = prev.filter((c) => c !== 'Alle');
      if (prev.includes(category)) {
        const filtered = newCategories.filter((c) => c !== category);
        return filtered.length === 0 ? ['Alle'] : filtered;
      }
      return [...newCategories, category];
    });
  };

  const normalizedSearch = searchTerm.trim().toLowerCase();

  const filteredProducts = useMemo(() => {
    return productsData
      .filter((product) => {
        if (selectedCategories.includes('Alle')) return true;
        return selectedCategories.includes(product.category);
      })
      .filter((product) => {
        return product.price >= priceRange[0] && product.price <= priceRange[1];
      })
      .filter((product) => {
        if (!normalizedSearch) return true;
        const haystack = `${product.name} ${product.description ?? ''} ${product.category}`.toLowerCase();
        return haystack.includes(normalizedSearch);
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.price - b.price;
        if (sortBy === 'price-desc') return b.price - a.price;
        if (sortBy === 'rating') {
          const score = (value: ProductType) => value.rating?.score ?? 0;
          return score(b) - score(a);
        }
        return 0;
      });
  }, [productsData, selectedCategories, priceRange, sortBy, normalizedSearch]);

  return {
    selectedCategories,
    priceRange,
    sortBy,
    handleCategoryToggle,
    setPriceRange,
    setSortBy,
    setSelectedCategories,
    filteredProducts,
    searchTerm,
    setSearchTerm,
  };
};

export default useFilter;
