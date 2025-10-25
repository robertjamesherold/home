import { useEffect, useState } from 'react';
import type { Product } from '../types';


const useProductsData = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);

      // Simulierter API-Call
      await new Promise((r) => setTimeout(r, 1000));

      const mockProducts: Product[] = [
        {
          id: '1',
          title: 'Premium Wireless Headphones',
          price: '299.99',
          image:
            'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
          category: 'Electronics',
          rating: 4.8,
          description: 'High-quality wireless headphones with noise cancellation',
        },
        {
          id: '2',
          title: 'Classic Leather Jacket',
          price: '189.99',
          image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop',
          category: 'Fashion',
          rating: 4.6,
          description: 'Genuine leather jacket, perfect for any season',
        },
        {
          id: '3',
          title: 'Smart Watch Pro',
          price: '399.99',
          image:
            'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
          category: 'Electronics',
          rating: 4.9,
          description: 'Advanced smartwatch with health tracking',
        },
        {
          id: '4',
          title: 'Designer Sunglasses',
          price: '159.99',
          image:
            'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop',
          category: 'Accessories',
          rating: 4.5,
          description: 'UV protection with style',
        },
        {
          id: '5',
          title: 'Running Shoes Elite',
          price: '129.99',
          image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
          category: 'Sports',
          rating: 4.7,
          description: 'Professional running shoes for athletes',
        },
        {
          id: '6',
          title: 'Minimalist Backpack',
          price: '79.99',
          image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
          category: 'Accessories',
          rating: 4.4,
          description: 'Sleek and functional everyday backpack',
        },
        {
          id: '7',
          title: 'Wireless Keyboard',
          price: '89.99',
          image:
            'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=400&fit=crop',
          category: 'Electronics',
          rating: 4.6,
          description: 'Mechanical wireless keyboard for productivity',
        },
        {
          id: '8',
          title: 'Yoga Mat Premium',
          price: '49.99',
          image:
            'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&h=400&fit=crop',
          category: 'Sports',
          rating: 4.8,
          description: 'Eco-friendly non-slip yoga mat',
        },
      ];

      setProducts(mockProducts);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  return { products, loading, setProducts };
};

export default useProductsData;
