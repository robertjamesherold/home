export type ProductType = {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  category: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  tags: string[];
};

export type CartItemType = {
  product: ProductType;
  quantity: number;
};

export type CartContextType = {
  items: CartItemType[];
  addToCart: (product: ProductType, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
};
