import { formatCurrency } from './index';

export type Pricing = {
  priceValue: number;
  originalPriceValue: number;
  priceDisplay: string;
  originalPrice: string;
  discount: number;
};

export const calculatePricing = (price: number): Pricing => {
  const priceValue = Number(price || 0);
  const originalPriceValue = priceValue * 1.2;
  const priceDisplay = formatCurrency(priceValue);
  const originalPrice = formatCurrency(originalPriceValue);
  const discount = Math.max(
    0,
    Math.round(((originalPriceValue - priceValue) / originalPriceValue) * 100),
  );

  return { priceValue, originalPriceValue, priceDisplay, originalPrice, discount };
};
