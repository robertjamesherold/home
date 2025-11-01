import { useReducer } from 'react';
import type { ActiveTab } from '../types';

type DetailState = {
  selectedImage: number;
  isFavorite: boolean;
  quantity: number;
  selectedColor: string;
  selectedSize: string;
  activeTab: ActiveTab;
};

type DetailAction =
  | { type: 'SET_IMAGE'; payload: number }
  | { type: 'TOGGLE_FAVORITE' }
  | { type: 'INC_QTY' }
  | { type: 'DEC_QTY' }
  | { type: 'SET_QTY'; payload: number }
  | { type: 'SET_COLOR'; payload: string }
  | { type: 'SET_SIZE'; payload: string }
  | { type: 'SET_TAB'; payload: ActiveTab }
  | { type: 'RESET'; payload: { color: string; size: string } };

const detailReducer = (
  state: DetailState,
  action: DetailAction
): DetailState => {
  switch (action.type) {
    case 'SET_IMAGE':
      return { ...state, selectedImage: action.payload };
    case 'TOGGLE_FAVORITE':
      return { ...state, isFavorite: !state.isFavorite };
    case 'INC_QTY':
      return { ...state, quantity: state.quantity + 1 };
    case 'DEC_QTY':
      return { ...state, quantity: Math.max(1, state.quantity - 1) };
    case 'SET_QTY':
      return { ...state, quantity: Math.max(1, action.payload) };
    case 'SET_COLOR':
      return { ...state, selectedColor: action.payload };
    case 'SET_SIZE':
      return { ...state, selectedSize: action.payload };
    case 'SET_TAB':
      return { ...state, activeTab: action.payload };
    case 'RESET':
      return {
        selectedImage: 0,
        isFavorite: false,
        quantity: 1,
        selectedColor: action.payload.color,
        selectedSize: action.payload.size,
        activeTab: 'description',
      };
    default:
      return state;
  }
};

export const useDetailState = (initialColor: string, initialSize: string) => {
  const [state, dispatch] = useReducer(detailReducer, {
    selectedImage: 0,
    isFavorite: false,
    quantity: 1,
    selectedColor: initialColor,
    selectedSize: initialSize,
    activeTab: 'description',
  });

  return { state, dispatch };
};
