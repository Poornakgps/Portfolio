import { useState, useEffect } from 'react';

/**
 * Custom hook for responsive design
 * @param {string} query - CSS media query string (e.g., '(min-width: 768px)')
 * @returns {boolean} - Whether the media query matches
 */
const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    
    // Initial check
    setMatches(mediaQuery.matches);
    
    // Add listener for changes
    const handleResize = (event) => {
      setMatches(event.matches);
    };
    
    // Modern browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleResize);
      return () => {
        mediaQuery.removeEventListener('change', handleResize);
      };
    } 
    // Legacy support
    else {
      mediaQuery.addListener(handleResize);
      return () => {
        mediaQuery.removeListener(handleResize);
      };
    }
  }, [query]);

  return matches;
};

// Predefined breakpoints based on Tailwind CSS defaults
export const breakpoints = {
  sm: '(min-width: 640px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 1024px)',
  xl: '(min-width: 1280px)',
  '2xl': '(min-width: 1536px)',
};

// Predefined media query hooks
export const useIsMobile = () => !useMediaQuery(breakpoints.md);
export const useIsTablet = () => useMediaQuery(breakpoints.md) && !useMediaQuery(breakpoints.lg);
export const useIsDesktop = () => useMediaQuery(breakpoints.lg);
export const useIsLargeScreen = () => useMediaQuery(breakpoints.xl);

export default useMediaQuery;