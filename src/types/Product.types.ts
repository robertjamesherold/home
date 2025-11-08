export type ProductDetailsCardType = {
  title?: string;
  tab?: {
    tabtitle: string;
    tabcontent: {
      Eigenschaften?: string[];
      Wert?: string[];
    };
  }[];
};

export type RatingProps = {
  score?: number;
  reviews?: number;
};

export type CartItemType = {
  product?: ProductType;
};

export type CartContextType = {
  product?: ProductType;
  products?: CartItemType[];
  addToCart?: (product: ProductType, quantity?: number) => void;
  removeFromCart?: (productId: string) => void;
  updateQuantity?: (productId: string, quantity: number) => void;
  clearCart?: () => void;
  totalItems?: number;
  totalPrice?: number;
  sumQuantity?: (productId: string, quantity?: number) => void;
};

export type ProductContextType = {
  data: CartContextType;
} & React.HTMLAttributes<HTMLDivElement>;

export type ProductType = {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description?: string;
  category?: string;
  rating?: RatingProps;
  inStock: boolean;
  tags?: string[];
  image?: string;
  images?: string[];
  link?: string;
  quantity?: number;
  details?: ProductDetailsCardType;
};
