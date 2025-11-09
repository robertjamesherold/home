import type { ProductType } from '@/types';

export type FeaturedProductsType = {
  title: string;
  subtitle: string;
  buttonlink: string;
  buttontext: string;
  featuredProducts: ProductType[];
};
