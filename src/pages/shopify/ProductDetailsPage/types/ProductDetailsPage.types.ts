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
  available: boolean;
}
