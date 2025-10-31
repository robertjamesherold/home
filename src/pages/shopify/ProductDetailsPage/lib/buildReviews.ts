import type { Product } from '@/types/Product.types';
import type { Review } from '../types';

export const buildReviews = (product: Product, reviewCount: number): Review[] => [
  {
    id: 1,
    author: 'Sarah M.',
    rating: 5,
    date: 'vor 2 Wochen',
    comment: `"${product.title}" hat meine Erwartungen übertroffen – Qualität und Komfort sind absolut erstklassig!`,
    verified: true,
  },
  {
    id: 2,
    author: 'Michael R.',
    rating: Math.round(product.rating),
    date: 'vor 1 Monat',
    comment: 'Top Verarbeitung und schneller Versand. Besonders die kleinen Details machen den Unterschied.',
    verified: true,
  },
  {
    id: 3,
    author: 'Emma L.',
    rating: 5,
    date: 'vor 3 Wochen',
    comment: `Ich nutze ${product.title} täglich – Design, Funktion und Komfort passen einfach perfekt zusammen.`,
    verified: reviewCount > 120,
  },
];