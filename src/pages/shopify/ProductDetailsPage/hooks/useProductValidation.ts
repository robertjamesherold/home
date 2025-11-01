import { useEffect } from 'react';
import type { ColorOption } from '../types';

type Dispatcher = (action: any) => void;

export const useProductValidation = (
  dispatch: Dispatcher,
  availableColors: ColorOption[],
  selectedColor: string
) => {
  useEffect(() => {
    if (
      availableColors.length > 0 &&
      !availableColors.find((c) => c.name === selectedColor)
    ) {
      dispatch({ type: 'SET_COLOR', payload: availableColors[0].name });
    }
  }, [availableColors, selectedColor, dispatch]);
};

export const useSizeValidation = (
  dispatch: Dispatcher,
  availableSizes: string[],
  selectedSize: string
) => {
  useEffect(() => {
    if (availableSizes.length > 0 && !availableSizes.includes(selectedSize)) {
      dispatch({ type: 'SET_SIZE', payload: availableSizes[0] });
    }
  }, [availableSizes, selectedSize, dispatch]);
};
