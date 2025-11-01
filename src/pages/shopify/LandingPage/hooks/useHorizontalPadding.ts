import { useBreakpoint } from '@/hooks/useBreakpoint';

const useHorizontalPadding = () => {
  
  const bp = useBreakpoint();
  const getHorizontalPadding = (bp: string) => {
  switch (bp) {
    case 'xs':
      return 'px-6';
    case 'sm':
      return 'px-8';
    case 'md':
      return 'px-12';
    case 'lg':
      return 'px-16';
    default:
      return 'px-20';
  }
};
    return getHorizontalPadding(bp);
};

export default useHorizontalPadding;