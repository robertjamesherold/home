// src/pages/ProductDetail/hooks/useProductDetailState.ts
import { useEffect, useReducer } from 'react';

export type ActiveTab = 'description' | 'reviews' | 'shipping';

type State = {
  selectedImage: number;
  quantity: number;
  selectedSize: string;
  selectedColor: string;
  activeTab: ActiveTab;
  isFavorite: boolean;
};

type Action =
  | { type: 'SET_SELECTED_IMAGE'; payload: number }
  | { type: 'INCREASE' }
  | { type: 'DECREASE' }
  | { type: 'SET_SIZE'; payload: string }
  | { type: 'SET_COLOR'; payload: string }
  | { type: 'SET_ACTIVE_TAB'; payload: ActiveTab }
  | { type: 'TOGGLE_FAVORITE' }
  | { type: 'RESET' };

const initialState = (): State => ({
  selectedImage: 0,
  quantity: 1,
  selectedSize: '',
  selectedColor: '',
  activeTab: 'description',
  isFavorite: false,
});

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_SELECTED_IMAGE':
      return { ...state, selectedImage: action.payload };
    case 'INCREASE':
      return { ...state, quantity: state.quantity + 1 };
    case 'DECREASE':
      return { ...state, quantity: Math.max(1, state.quantity - 1) };
    case 'SET_SIZE':
      return { ...state, selectedSize: action.payload };
    case 'SET_COLOR':
      return { ...state, selectedColor: action.payload };
    case 'SET_ACTIVE_TAB':
      return { ...state, activeTab: action.payload };
    case 'TOGGLE_FAVORITE':
      return { ...state, isFavorite: !state.isFavorite };
    case 'RESET':
      return initialState();
    default:
      return state;
  }
}

export function useProductDetailState(productId?: string) {
  const [state, dispatch] = useReducer(reducer, undefined, initialState);

  // Reset wenn Produkt wechselt
  useEffect(() => {
    // Dispatch RESET, nicht direkt state manipulation
    dispatch({ type: 'RESET' });
  }, [productId]);

  // kleine Action-Wrappers, damit Komponente lesbar bleibt
  const setSelectedImage = (idx: number) => dispatch({ type: 'SET_SELECTED_IMAGE', payload: idx });
  const increase = () => dispatch({ type: 'INCREASE' });
  const decrease = () => dispatch({ type: 'DECREASE' });
  const setSelectedSize = (s: string) => dispatch({ type: 'SET_SIZE', payload: s });
  const setSelectedColor = (c: string) => dispatch({ type: 'SET_COLOR', payload: c });
  const setActiveTab = (t: ActiveTab) => dispatch({ type: 'SET_ACTIVE_TAB', payload: t });
  const toggleFavorite = () => dispatch({ type: 'TOGGLE_FAVORITE' });
  const reset = () => dispatch({ type: 'RESET' });

  return {
    selectedImage: state.selectedImage,
    setSelectedImage,
    quantity: state.quantity,
    increase,
    decrease,
    selectedSize: state.selectedSize,
    setSelectedSize,
    selectedColor: state.selectedColor,
    setSelectedColor,
    activeTab: state.activeTab,
    setActiveTab,
    isFavorite: state.isFavorite,
    toggleFavorite,
    reset,
  };
}
