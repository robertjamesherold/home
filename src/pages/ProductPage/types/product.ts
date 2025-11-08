export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  description: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  tags?: string[];
}

export interface ProductPageProps {
  product: Product;
}
