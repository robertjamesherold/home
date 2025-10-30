export type UseDragScrollOptions = {
  snap?: boolean; 
  snapSelector?: string;
  snapBehavior?: ScrollBehavior; 
  dragMultiplier?: number; 
};

export type Props = {
    title: string;
    images: string[];
    wheelMultiplier?: number; 
    wheelRequiresShift?: boolean; 
    className?: string;
    style?: React.CSSProperties;
};  