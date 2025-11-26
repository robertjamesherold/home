import React, { useState, useEffect, useCallback, useMemo } from 'react'
import type { CartItemType, ProductType } from '@/types'
import CartContext from './CartContext'

// Typed interface for optional platform storage API on window
type PlatformStorage = {
  get: ( key: string ) => Promise<{ value: unknown } | null>
  set: ( key: string, value: unknown ) => Promise<void>
}

/**
 * Safely parse JSON with fallback
 */
const safeParse = <T,> ( value: string | null | undefined, fallback: T ): T =>
{
  if ( !value ) return fallback
  try {
    return JSON.parse( value ) as T
  } catch (err) {
    console.error( 'Failed to parse JSON:', err )
    return fallback
  }
}

const safeStringify = (value: unknown): string | null => {
  try {
    return JSON.stringify( value )
  } catch (err) {
    console.error( 'Failed to stringify value:', err )
    return null
  }
}

const CART_STORAGE_KEY = 'cart:items'

interface CartProviderProps {
  children: React.ReactNode
}

const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [ items, setItems ] = useState<CartItemType[]>( [] )
  const [ isInitialized, setIsInitialized ] = useState( false )
  const [ isLoading, setIsLoading ] = useState( false )

  const readStoredCart = useCallback( async (): Promise<CartItemType[]> =>
  {
    if ( typeof window === 'undefined' ) return []
    try
    {
      const w = ( window as unknown ) as { storage?: PlatformStorage }
      if ( w?.storage && typeof w.storage.get === 'function' )
      {
        const result = await w.storage.get( CART_STORAGE_KEY )
        const raw = result?.value
        if ( !raw ) return []
        const str = typeof raw === 'string' ? raw : JSON.stringify( raw )
        return safeParse<CartItemType[]>( str, [] )
      }

      const stored = window.localStorage.getItem( CART_STORAGE_KEY )
      return safeParse<CartItemType[]>( stored, [] )
    } catch ( err )
    {
      console.error( 'Error reading stored cart:', err )
      return []
    }
  }, [] )

  useEffect( () =>
  {
    let mounted = true
    const init = async () =>
    {
      try
      {
        setIsLoading( true )
        const parsed = await readStoredCart()
        if ( !mounted ) return
        const sanitized = parsed
          .filter( ( i ): i is CartItemType => Boolean( i?.product?.id ) )
          .map( ( i ) => ( { product: i.product, quantity: Math.max( 1, Number( i.quantity ?? 1 ) ) } ) )
        setItems( sanitized )
      } catch (err) {
        console.error( 'Failed to init cart:', err )
      } finally {
        if ( !mounted ) return
        setIsLoading( false )
        setIsInitialized( true )
      }
    }
    init()
    return () =>
    {
      mounted = false
    }
  }, [ readStoredCart ] )

  useEffect(() => {
    if ( !isInitialized || isLoading ) return
    const persist = async () =>
    {
      try {
        const payload = safeStringify( items )
        if (payload === null) {
          console.warn( 'Cart payload is null, skipping storage' )
          return
        }
        const w = typeof window !== 'undefined' ? ( window as unknown as { storage?: PlatformStorage } ) : undefined
        if ( w?.storage && typeof w.storage.set === 'function' )
        {
          await w.storage.set( CART_STORAGE_KEY, payload )
        } else if ( typeof window !== 'undefined' )
        {
          window.localStorage.setItem( CART_STORAGE_KEY, payload )
        }
      } catch ( err )
      {
        console.error( 'Failed to persist cart:', err )
      }
    }
    persist()
  }, [ items, isInitialized, isLoading ] )

  useEffect( () =>
  {
    if ( typeof window === 'undefined' ) return
    const onStorage = ( e: StorageEvent ) =>
    {
      if ( e.key !== CART_STORAGE_KEY ) return
      try
      {
        const parsed = safeParse<CartItemType[]>( e.newValue, [] )
        const sanitized = parsed
          .filter( ( i ): i is CartItemType => Boolean( i?.product?.id ) )
          .map( ( i ) => ( { product: i.product, quantity: Math.max( 1, Number( i.quantity ?? 1 ) ) } ) )
        setItems( sanitized )
      } catch (err) {
        console.error( 'Failed to parse storage event:', err )
      }
    }
    window.addEventListener( 'storage', onStorage )
    return () => window.removeEventListener( 'storage', onStorage )
  }, [] )

  const addToCart = useCallback( ( product: ProductType, quantity = 1 ) =>
  {
    if ( quantity <= 0 ) return
    setItems( ( prev ) =>
    {
      const map = new Map<string, CartItemType>()
      for ( const item of prev )
      {
        map.set( item.product.id, { product: item.product, quantity: Math.max( 1, item.quantity ) } )
      }
      const existing = map.get( product.id )
      if ( existing ) map.set( product.id, { ...existing, quantity: existing.quantity + quantity } )
      else map.set( product.id, { product, quantity } )
      return Array.from( map.values() )
    } )
  }, [] )

  const removeFromCart = useCallback( ( id: string ) => setItems( ( prev ) => prev.filter( ( i ) => i.product.id !== id ) ), [] )
  const updateQuantity = useCallback(
    ( id: string, quantity: number ) =>
    {
      if (quantity <= 0) {
        removeFromCart( id )
        return
      }
      setItems( ( prev ) => prev.map( ( i ) => ( i.product.id === id ? { ...i, quantity } : i ) ) )
    },
    [ removeFromCart ],
  )
  const clearCart = useCallback( () => setItems( [] ), [] )

  const { totalItems, totalPrice } = useMemo(() => {
    const items_total = items.reduce( ( s, it ) => s + it.quantity, 0 )
    const price_total = items.reduce( ( s, it ) => s + it.product.price * it.quantity, 0 )
    return { totalItems: items_total, totalPrice: price_total }
  }, [ items ] )

  const contextValue = useMemo(
    () => ( { items, addToCart, removeFromCart, updateQuantity, clearCart, totalItems, totalPrice, isLoading, isInitialized } ),
    [ items, addToCart, removeFromCart, updateQuantity, clearCart, totalItems, totalPrice, isLoading, isInitialized ],
  )

  return <CartContext.Provider value={ contextValue }>{ children }</CartContext.Provider>
}

export default CartProvider
