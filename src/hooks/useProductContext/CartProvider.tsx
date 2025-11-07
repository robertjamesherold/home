import React, { useState, useEffect } from 'react';
import type { CartItemType, ProductType } from '@/types';
import CartContext from './CartContext';

const safeParse = <T,> ( value: string | null, fallback: T ): T =>
{
  if ( !value ) return fallback
  try
  {
    return JSON.parse( value ) as T
  } catch ( err )
  {
    console.error( 'Failed to parse JSON from localStorage:', err )
    return fallback
  }
}

const safeStringify = ( value: unknown ): string | null =>
{
  try
  {
    return JSON.stringify( value )
  } catch ( err )
  {
    console.error( 'Failed to stringify value for localStorage:', err )
    return null
  }
}

const CartProvider: React.FC<{ children: React.ReactNode }> = ( { children } ) =>
{
  const [items, setItems] = useState<CartItemType[]>(() => {
    if ( typeof window === 'undefined' ) return [];
    const saved = localStorage.getItem('cart');
    return safeParse<CartItemType[]>( saved, [] );
  });

  useEffect(() => {
    if ( typeof window === 'undefined' ) return
    const payload = safeStringify( items )
    if ( payload !== null )
    {
      try
      {
        localStorage.setItem( 'cart', payload )
      } catch ( err )
      {
        console.error( 'Failed to write cart to localStorage:', err )
      }
    }
  }, [items]);

  const addToCart = (product: ProductType, quantity: number = 1) => {
    setItems((prev) => {
      // Map für O(1) Lookups und saubere Updates
      const map = new Map<string, CartItemType>()
      for ( const it of prev )
      {
        map.set( it.product.id, { ...it } )
      }

      const existing = map.get( product.id );
      if (existing) {
        map.set( product.id, { ...existing, quantity: existing.quantity + quantity } )
      } else
      {
        map.set( product.id, { product, quantity } );
      }

      return Array.from( map.values() );
    });
  };

  const removeFromCart = (productId: string) => {
    setItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
