import { useWindowSize } from './useWindowSize';

export const useBreakpoint = () => {
  const { width } = useWindowSize();

  const breakpoints = {
    default: 0,
    xs: 576,
    sm: 768,
    md: 992,
    lg: 1200,
    xl: 1400,
  };

  const getBreakpoint = () => {
    if (width < breakpoints.sm) return 'xs';
    if (width >= breakpoints.sm && width < breakpoints.md) return 'sm';
    if (width >= breakpoints.md && width < breakpoints.lg) return 'md';
    if (width >= breakpoints.lg && width < breakpoints.xl) return 'lg';
    if (width >= breakpoints.xl) return 'xl';
    return 'default';
  };

  const isDesktop = () => {
    return ['md', 'lg', 'xl'].includes(getBreakpoint());
  };

  const isMobile = () => {
    return ['default', 'sm'].includes(getBreakpoint());
  };

  return { getBreakpoint, isDesktop, isMobile };
};
