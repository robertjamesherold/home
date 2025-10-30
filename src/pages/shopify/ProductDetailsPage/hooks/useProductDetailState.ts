import { useCallback, useEffect, useReducer } from 'react';
import type { ActiveTab } from '../types';

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

const reducer = (state: State, action: Action): State => {
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
};

export const useProductDetailState = (productId?: string) => {
  const [state, dispatch] = useReducer(reducer, undefined, initialState);

  useEffect(() => {
    dispatch({ type: 'RESET' });
  }, [productId]);

  const setSelectedImage = useCallback(
    (index: number) => dispatch({ type: 'SET_SELECTED_IMAGE', payload: index }),
    [dispatch],
  );
  const increase = useCallback(() => dispatch({ type: 'INCREASE' }), [dispatch]);
  const decrease = useCallback(() => dispatch({ type: 'DECREASE' }), [dispatch]);
  const setSelectedSize = useCallback(
    (size: string) => dispatch({ type: 'SET_SIZE', payload: size }),
    [dispatch],
  );
  const setSelectedColor = useCallback(
    (color: string) => dispatch({ type: 'SET_COLOR', payload: color }),
    [dispatch],
  );
  const setActiveTab = useCallback(
    (tab: ActiveTab) => dispatch({ type: 'SET_ACTIVE_TAB', payload: tab }),
    [dispatch],
  );
  const toggleFavorite = useCallback(
    () => dispatch({ type: 'TOGGLE_FAVORITE' }),
    [dispatch],
  );
  const reset = useCallback(() => dispatch({ type: 'RESET' }), [dispatch]);

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
};
