import { useEffect } from 'react';
import { useDetailState } from './useDetailState';
import { useProductData } from './useProductData';
import { useProductOptions } from './useProductOptions';
import { useProductContent } from './useProductContent';
import { useProductActions } from './useProductActions';
import { useProductValidation, useSizeValidation } from './useProductValidation';

export const useProductDetail = (productId?: string) => {
  const { loading, product, productsState } = useProductData(productId);
  const { availableColors, availableSizes } = useProductOptions(product);
  const {
    galleryImages,
    pricing,
    reviewCount,
    features,
    specifications,
    reviews,
  } = useProductContent(product);
  const { state, dispatch } = useDetailState(
    availableColors[0]?.name ?? '',
    availableSizes[0] ?? '',
  );
  const { handleAddToCart } = useProductActions(product, state.quantity, productsState);

  // Validations
  useProductValidation(dispatch, availableColors, state.selectedColor);
  useSizeValidation(dispatch, availableSizes, state.selectedSize);

  // Reset on product change
  useEffect(() => {
    dispatch({
      type: 'RESET',
      payload: { color: availableColors[0]?.name ?? '', size: availableSizes[0] ?? '' },
    });
  }, [productId]);

  return {
    loading,
    product,
    selectedImage: state.selectedImage,
    isFavorite: state.isFavorite,
    quantity: state.quantity,
    selectedColor: state.selectedColor,
    selectedSize: state.selectedSize,
    activeTab: state.activeTab,
    galleryImages,
    pricing,
    reviewCount,
    features,
    specifications,
    reviews,
    availableColors,
    availableSizes,
    setSelectedImage: (i: number) => dispatch({ type: 'SET_IMAGE', payload: i }),
    toggleFavorite: () => dispatch({ type: 'TOGGLE_FAVORITE' }),
    increase: () => dispatch({ type: 'INC_QTY' }),
    decrease: () => dispatch({ type: 'DEC_QTY' }),
    setQuantity: (q: number) => dispatch({ type: 'SET_QTY', payload: q }),
    setSelectedColor: (c: string) => dispatch({ type: 'SET_COLOR', payload: c }),
    setSelectedSize: (s: string) => dispatch({ type: 'SET_SIZE', payload: s }),
    setActiveTab: (t: any) => dispatch({ type: 'SET_TAB', payload: t }),
    handleAddToCart,
  } as const;
};

export default useProductDetail;
