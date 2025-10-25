export type SortBy = 'default' | 'price-low' | 'price-high' | 'rating';

export interface Product {
  id: string;
  title: string;
  price: string;
  image: string;
  category: string;
  rating: number;
  description: string;
}
