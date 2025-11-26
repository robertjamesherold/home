import { useWindowSize } from './useWindowSize';

export const useBreakpoint = () =>
{
  const { width } = useWindowSize()

  const breakpoints = {
    default: 0,
    xs: 480,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    xxl: 1440
  }

  const getBreakpoint = () =>
  {
    if ( width < breakpoints.xs ) return 'default'; {/* bis 479px -> default */ }
    if ( width >= breakpoints.xs && width < breakpoints.sm ) return 'xs'; {/* 480px bis 639px -> XS */ }
    if ( width >= breakpoints.sm && width < breakpoints.md ) return 'sm'; {/* 640px bis 767px -> SM */ }
    if ( width >= breakpoints.md && width < breakpoints.lg ) return 'md'; {/* 768px bis 1023px -> MD */ }
    if ( width >= breakpoints.lg && width < breakpoints.xl ) return 'lg'; {/* 1024px bis 1279px -> LG */ }
    if ( width >= breakpoints.xl && width < breakpoints.xxl ) return 'xl'; {/* 1280px bis 1439px -> XL */ }
    if ( width >= breakpoints.xxl ) return 'xxl'; {/* ab 1440px-> XXL */ }
    return 'default'
  }

  const isDesktop = () => { return [ 'xl', 'xxl' ].includes( getBreakpoint() ) }
  const isTablet = () => { return [ 'md', 'lg' ].includes( getBreakpoint() ) } 
  const isMobile = () => { return [ 'default', 'xs', 'sm' ].includes( getBreakpoint() ) }
  
  return { getBreakpoint, isDesktop, isTablet, isMobile }
};
