export type ProductType = {
  id: string;
  price: number;
  title?: string;
  sku?: string;
  imageUrl?: string;
  // optional weitere Felder, Index-Signatur für Erweiterbarkeit
  [key: string]: unknown;
};

export type CartItemType = {
  product: ProductType;
  quantity: number;
};
