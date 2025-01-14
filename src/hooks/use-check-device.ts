import { useMediaQuery } from 'usehooks-ts'

const [mobileMediaQuery, tabletMediaQuery, desktopMediaQuery] = [
  '(max-width: 767.9px)',
  '(max-width: 1440px)',
  '(min-width: 1000px)',
] as const

export const useCheckDevice = () => {
  const { isMobile, isDesktop, isTablet } = {
    isMobile: useMediaQuery(mobileMediaQuery),
    isTablet: useMediaQuery(tabletMediaQuery),
    isDesktop: useMediaQuery(desktopMediaQuery),
  }

  if (!(isMobile && isDesktop && !isTablet)) {
    return {
      isMobile: window.innerWidth < 767.9,
      isTablet: window.innerWidth <= 1440,
      isDesktop: window.innerWidth > 1440,
    }
  }

  return { isMobile, isDesktop, isTablet }
}
