import { useState, useEffect } from 'react';

// Breakpoints following Tailwind CSS defaults
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
} as const;

export type Breakpoint = keyof typeof BREAKPOINTS;

// Hook for responsive design
export const useResponsive = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1024,
    height: typeof window !== 'undefined' ? window.innerHeight : 768
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    // Debounce resize events for better performance
    let timeoutId: NodeJS.Timeout;
    const debouncedResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleResize, 150);
    };

    window.addEventListener('resize', debouncedResize);
    return () => {
      window.removeEventListener('resize', debouncedResize);
      clearTimeout(timeoutId);
    };
  }, []);

  const isMobile = windowSize.width < BREAKPOINTS.md;
  const isTablet = windowSize.width >= BREAKPOINTS.md && windowSize.width < BREAKPOINTS.lg;
  const isDesktop = windowSize.width >= BREAKPOINTS.lg;
  const isXl = windowSize.width >= BREAKPOINTS.xl;
  const is2Xl = windowSize.width >= BREAKPOINTS['2xl'];

  const getCurrentBreakpoint = (): Breakpoint => {
    if (windowSize.width >= BREAKPOINTS['2xl']) return '2xl';
    if (windowSize.width >= BREAKPOINTS.xl) return 'xl';
    if (windowSize.width >= BREAKPOINTS.lg) return 'lg';
    if (windowSize.width >= BREAKPOINTS.md) return 'md';
    return 'sm';
  };

  const isBreakpoint = (breakpoint: Breakpoint): boolean => {
    return windowSize.width >= BREAKPOINTS[breakpoint];
  };

  return {
    windowSize,
    isMobile,
    isTablet,
    isDesktop,
    isXl,
    is2Xl,
    getCurrentBreakpoint,
    isBreakpoint,
    // Utility functions
    showOnMobile: isMobile,
    showOnTablet: isTablet,
    showOnDesktop: isDesktop,
    hideOnMobile: !isMobile,
    hideOnTablet: !isTablet,
    hideOnDesktop: !isDesktop
  };
};

// Hook for media queries
export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // Modern browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
    // Legacy browsers
    else if (mediaQuery.addListener) {
      mediaQuery.addListener(handleChange);
      return () => mediaQuery.removeListener(handleChange);
    }
  }, [query]);

  return matches;
};

// Predefined media queries
export const useIsMobile = (): boolean => useMediaQuery(`(max-width: ${BREAKPOINTS.md - 1}px)`);
export const useIsTablet = (): boolean => useMediaQuery(`(min-width: ${BREAKPOINTS.md}px) and (max-width: ${BREAKPOINTS.lg - 1}px)`);
export const useIsDesktop = (): boolean => useMediaQuery(`(min-width: ${BREAKPOINTS.lg}px)`);
export const useIsDarkMode = (): boolean => useMediaQuery('(prefers-color-scheme: dark)');
export const useReducedMotion = (): boolean => useMediaQuery('(prefers-reduced-motion: reduce)');

// Responsive utility classes generator
export const getResponsiveClasses = (
  baseClasses: string,
  responsiveClasses: Partial<Record<Breakpoint | 'base', string>>
): string => {
  let classes = responsiveClasses.base || baseClasses;
  
  Object.entries(responsiveClasses).forEach(([breakpoint, classNames]) => {
    if (breakpoint !== 'base' && classNames) {
      classes += ` ${breakpoint}:${classNames}`;
    }
  });
  
  return classes;
};

// Container width utilities
export const getContainerMaxWidth = (breakpoint: Breakpoint): string => {
  const maxWidths = {
    sm: 'max-w-screen-sm',
    md: 'max-w-screen-md', 
    lg: 'max-w-screen-lg',
    xl: 'max-w-screen-xl',
    '2xl': 'max-w-screen-2xl'
  };
  
  return maxWidths[breakpoint];
};

// Grid columns responsive utility
export const getGridCols = (
  mobile: number,
  tablet?: number,
  desktop?: number,
  xl?: number
): string => {
  let classes = `grid-cols-${mobile}`;
  
  if (tablet) classes += ` md:grid-cols-${tablet}`;
  if (desktop) classes += ` lg:grid-cols-${desktop}`;
  if (xl) classes += ` xl:grid-cols-${xl}`;
  
  return classes;
};

// Typography responsive utility
export const getTextSize = (
  mobile: string,
  tablet?: string,
  desktop?: string
): string => {
  let classes = mobile;
  
  if (tablet) classes += ` md:${tablet}`;
  if (desktop) classes += ` lg:${desktop}`;
  
  return classes;
};

// Spacing responsive utility
export const getSpacing = (
  mobile: string,
  tablet?: string,
  desktop?: string,
  property: 'p' | 'm' | 'px' | 'py' | 'mx' | 'my' | 'pt' | 'pb' | 'pl' | 'pr' | 'mt' | 'mb' | 'ml' | 'mr' = 'p'
): string => {
  let classes = `${property}-${mobile}`;
  
  if (tablet) classes += ` md:${property}-${tablet}`;
  if (desktop) classes += ` lg:${property}-${desktop}`;
  
  return classes;
};

// Touch-friendly sizing
export const getTouchTarget = (size: 'sm' | 'md' | 'lg' = 'md'): string => {
  const sizes = {
    sm: 'min-h-[40px] min-w-[40px]', // Minimum 40px for accessibility
    md: 'min-h-[44px] min-w-[44px]', // iOS recommended minimum
    lg: 'min-h-[48px] min-w-[48px]'  // Android recommended minimum
  };
  
  return sizes[size];
};

// Responsive image utilities
export const getImageSizes = (
  mobile: string,
  tablet?: string,
  desktop?: string
): string => {
  let sizes = `(max-width: ${BREAKPOINTS.md}px) ${mobile}`;
  
  if (tablet) {
    sizes += `, (max-width: ${BREAKPOINTS.lg}px) ${tablet}`;
  }
  
  if (desktop) {
    sizes += `, ${desktop}`;
  }
  
  return sizes;
};

// Animation utilities for reduced motion
export const getAnimationClass = (
  animationClass: string,
  fallbackClass: string = ''
): string => {
  return `motion-safe:${animationClass} motion-reduce:${fallbackClass}`;
};

// Responsive font loading utility
export const getOptimalFontDisplay = (): 'auto' | 'block' | 'swap' | 'fallback' | 'optional' => {
  if (typeof window === 'undefined') return 'swap';
  
  // Use connection API if available
  if ('connection' in navigator) {
    const connection = (navigator as any).connection;
    if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
      return 'optional'; // Skip custom fonts on slow connections
    }
  }
  
  return 'swap'; // Default to swap for better performance
};

// Viewport utilities
export const getViewportHeight = (fraction: number = 1): string => {
  return `${fraction * 100}vh`;
};

export const getViewportWidth = (fraction: number = 1): string => {
  return `${fraction * 100}vw`;
};

// Safe area utilities for mobile devices
export const getSafeAreaClasses = (): string => {
  return 'pb-safe-area-inset-bottom pl-safe-area-inset-left pr-safe-area-inset-right pt-safe-area-inset-top';
};

// Z-index management
export const zIndex = {
  behind: -1,
  auto: 'auto',
  base: 0,
  docked: 10,
  dropdown: 1000,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800
} as const;

export type ZIndex = keyof typeof zIndex;

export const getZIndex = (level: ZIndex): string | number => {
  return zIndex[level];
};

// Export everything as default object
export default {
  BREAKPOINTS,
  useResponsive,
  useMediaQuery,
  useIsMobile,
  useIsTablet,
  useIsDesktop,
  useIsDarkMode,
  useReducedMotion,
  getResponsiveClasses,
  getContainerMaxWidth,
  getGridCols,
  getTextSize,
  getSpacing,
  getTouchTarget,
  getImageSizes,
  getAnimationClass,
  getOptimalFontDisplay,
  getViewportHeight,
  getViewportWidth,
  getSafeAreaClasses,
  zIndex,
  getZIndex
};