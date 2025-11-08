import React, { useState, useEffect, useCallback, useMemo } from 'react';
import type { CartItemType, ProductType } from '@/types';
import CartContext from './CartContext';

/**
 * Safely parse JSON with fallback
 */
const safeParse = <T,>(value: string | null, fallback: T): T => {
  if (!value) return fallback;
  try {
    return JSON.parse(value) as T;
  } catch (err) {
    console.error('Failed to parse JSON:', err);
    return fallback;
  }
};

/**
 * Safely stringify JSON with error handling
 */
const safeStringify = (value: unknown): string | null => {
  try {
    return JSON.stringify(value);
  } catch (err) {
    console.error('Failed to stringify value:', err);
    return null;
  }
};

/**
 * Storage key constant
 */
const CART_STORAGE_KEY = 'cart:items';

interface CartProviderProps {
  children: React.ReactNode;
}

/**
 * CartProvider - Manages shopping cart state with persistent storage
 * Uses Claude's persistent storage API for cross-session persistence
 */
const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [items, setItems] = useState<CartItemType[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  /**
   * Initialize cart from persistent storage
   */
  useEffect(() => {
    const initCart = async () => {
      try {
        setIsLoading(true);

        // Check if storage API is available
        if (typeof window === 'undefined' || !window?.storage) {
          setIsInitialized(true);
          return;
        }

        const result = await window.storage.get(CART_STORAGE_KEY);

        if (result?.value) {
          const parsed = safeParse<CartItemType[]>(
            typeof result.value === 'string'
              ? result.value
              : JSON.stringify(result.value),
            []
          );
          setItems(parsed);
        }
      } catch (err) {
        console.error('Failed to initialize cart from storage:', err);
        setIsInitialized(true);
      } finally {
        setIsLoading(false);
        setIsInitialized(true);
      }
    };

    initCart();
  }, []);

  /**
   * Persist cart to storage whenever items change
   */
  useEffect(() => {
    if (!isInitialized || isLoading) return;

    const persistCart = async () => {
      try {
        const payload = safeStringify(items);

        if (payload === null) {
          console.warn('Cart payload is null, skipping storage');
          return;
        }

        await window.storage?.set(CART_STORAGE_KEY, payload);
      } catch (err) {
        console.error('Failed to persist cart to storage:', err);
      }
    };

    persistCart();
  }, [items, isInitialized, isLoading]);

  /**
   * Add product to cart or increment quantity if exists
   */
  const addToCart = useCallback(
    (product: ProductType, quantity: number = 1) => {
      if (quantity <= 0) {
        console.warn('Quantity must be greater than 0');
        return;
      }

      setItems((prev) => {
        const map = new Map<string, CartItemType>();

        // Build map from existing items
        for (const item of prev) {
          map.set(item.product.id, { ...item });
        }

        // Add or update product
        const existing = map.get(product.id);
        if (existing) {
          map.set(product.id, {
            ...existing,
            quantity: existing.quantity + quantity,
          });
        } else {
          map.set(product.id, { product, quantity });
        }

        return Array.from(map.values());
      });
    },
    []
  );

  /**
   * Remove product from cart
   */
  const removeFromCart = useCallback((productId: string) => {
    setItems((prev) => prev.filter((item) => item.product.id !== productId));
  }, []);

  /**
   * Update product quantity or remove if <= 0
   */
  const updateQuantity = useCallback(
    (productId: string, quantity: number) => {
      if (quantity <= 0) {
        removeFromCart(productId);
        return;
      }

      setItems((prev) =>
        prev.map((item) =>
          item.product.id === productId ? { ...item, quantity } : item
        )
      );
    },
    [removeFromCart]
  );

  /**
   * Clear entire cart
   */
  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  /**
   * Memoize calculated values to prevent unnecessary recalculations
   */
  const { totalItems, totalPrice } = useMemo(() => {
    const items_total = items.reduce((sum, item) => sum + item.quantity, 0);
    const price_total = items.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );

    return {
      totalItems: items_total,
      totalPrice: price_total,
    };
  }, [items]);

  /**
   * Memoize context value to prevent unnecessary re-renders
   */
  const contextValue = useMemo(
    () => ({
      items,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      totalItems,
      totalPrice,
      isLoading,
      isInitialized,
    }),
    [
      items,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      totalItems,
      totalPrice,
      isLoading,
      isInitialized,
    ]
  );

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
