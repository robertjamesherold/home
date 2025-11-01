import type { Product } from '@/types/Product.types';
import { calculatePricing } from '../lib/price';
import { buildReviews } from '../lib/buildReviews';

export interface Review {
  id: number;
  author: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

export type ActiveTab = 'description' | 'reviews' | 'shipping';

export interface ColorOption {
  name: string;
  hex: string;
}

export interface SizeOption {
  name: string;
  availability: boolean;
}

export type ProductDetailState = {
  loading: boolean;
  product?: Product;
  galleryImages: string[];
  pricing: ReturnType<typeof calculatePricing>;
  reviewCount: number;
  features: string[];
  specifications: Record<string, string>;
  reviews: ReturnType<typeof buildReviews>;
  availableColors: ColorOption[];
  availableSizes: string[];
  selectedImage: number;
  isFavorite: boolean;
  quantity: number;
  selectedColor: string;
  selectedSize: string;
  activeTab: ActiveTab;
  setSelectedImage: (index: number) => void;
  increase: () => void;
  decrease: () => void;
  setSelectedColor: (color: string) => void;
  setSelectedSize: (size: string) => void;
  setActiveTab: (tab: ActiveTab) => void;
  toggleFavorite: () => void;
  handleAddToCart: () => void;
  handleBuyNow: () => void;
};
