export type SliderCard = {
  id: number | string;
  title: string;
  text: string;
  image?: string;
  eyebrow?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export interface SliderProps {
  slides?: SliderCard[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  className?: string;
  renderSlideContent?: (slide: SliderCard) => React.ReactNode;
  cardHeight?: string | number;
}

export type SliderState = {
  current: number;
  visual: number;
  transition: boolean;
};

export type SliderAction =
  | { type: 'INIT'; total: number }
  | { type: 'ENABLE_TRANSITION' }
  | { type: 'NEXT'; total: number }
  | { type: 'PREV'; total: number }
  | { type: 'GOTO'; index: number; total: number }
  | { type: 'WRAP_START'; total: number }
  | { type: 'WRAP_END' };
