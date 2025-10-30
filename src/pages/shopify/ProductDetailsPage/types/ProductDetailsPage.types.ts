export interface Review {
  id: number;
  author: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

export type ActiveTab = 'description' | 'reviews' | 'shipping';

export interface ProductDetailsPageState {
  selectedImage: number;
  quantity: number;
  selectedSize: string;
  selectedColor: string;
  activeTab: ActiveTab;
  isFavorite: boolean;
}   

export type ProductDetailsPageAction = 
    | { type: 'SET_SELECTED_IMAGE'; payload: number }
    | { type: 'INCREASE' }
    | { type: 'DECREASE' }
    | { type: 'SET_SIZE'; payload: string }
    | { type: 'SET_COLOR'; payload: string }
    | { type: 'SET_ACTIVE_TAB'; payload: ActiveTab }
    | { type: 'TOGGLE_FAVORITE' }
    | { type: 'RESET' };

export interface ProductDetailsPageProps {
  productId?: string;
}  

export interface ColorOption {
  name: string;
  hex: string;
}   

export interface SizeOption {
    name: string;
    available: boolean;
}   
    

export interface Product {
  id: string;
  title: string;
  description: string;
  price: string;
  images: string[];
  rating: number;
  reviews: Review[];
  colors: ColorOption[];
  sizes: SizeOption[];
  features: string[];
  specifications: Record<string, string>;
} 

export interface RelatedProduct {
  id: string;
  title: string;
  image: string;
  price: string;
}

export interface ProductDetailsPageData {
    product: Product | null;
    relatedProducts: RelatedProduct[];
    loading: boolean;
    error: string | null;
}

export interface ProductDetailsPageHandlers {
    onAddToCart: ( product: Product, quantity: number, selectedSize: string, selectedColor: string ) => void;
}  

export interface ProductDetailsPageAllProps extends ProductDetailsPageProps, ProductDetailsPageData, ProductDetailsPageHandlers {}