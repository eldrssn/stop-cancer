import { FC, forwardRef, useEffect, useMemo, useState } from 'react'

import { useCheckDevice } from '@hooks'

import * as S from './background-symptoms.styled'
import svg1 from './svg1.svg'
import svg2 from './svg2.svg'
import svg3 from './svg3.svg'
import bgBottomMobile from '/src/assets/images/symptoms/bg-bottom-360.png'
import bgBottomTablet from '/src/assets/images/symptoms/bg-bottom-1280.png'
import bgBottomDesk from '/src/assets/images/symptoms/bg-bottom-1920.png'
import bgTopMobile from '/src/assets/images/symptoms/bg-top-360.png'
import bgTopTablet from '/src/assets/images/symptoms/bg-top-1280.png'
import bgTopDesk from '/src/assets/images/symptoms/bg-top-1920.png'
import img1Mobile from '/src/assets/images/symptoms/img-360.png'
import img1Tablet from '/src/assets/images/symptoms/img-1280.png'
import img1Desk from '/src/assets/images/symptoms/img-1920.png'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const BackgroundSymptoms: FC<any> = forwardRef<HTMLDivElement>((_, ref) => {
  const { isTablet, isMobile, isDesktop } = useCheckDevice()

  const bgTop = useMemo(() => {
    if (isMobile) {
      return bgTopMobile
    }
    if (isTablet) {
      return bgTopTablet
    }
    return bgTopDesk
  }, [isTablet, isMobile])

  const bgBottom = useMemo(() => {
    if (isMobile) {
      return bgBottomMobile
    }
    if (isTablet) {
      return bgBottomTablet
    }
    return bgBottomDesk
  }, [isTablet, isMobile])

  const img = useMemo(() => {
    if (isMobile) {
      return img1Mobile
    }
    if (isTablet) {
      return img1Tablet
    }
    return img1Desk
  }, [isTablet, isMobile])

  // Добавьте состояние для контроля видимости SVG
  const [isSvgVisible, setIsSvgVisible] = useState(false)

  useEffect(() => {
    // Отложите загрузку SVG на 100 мс
    const timeoutId = setTimeout(() => setIsSvgVisible(true), 100)

    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <S.Block ref={ref}>
      <S.Wrapper ref={ref}>
        <S.Gradient1 />
        <S.Gradient2 />
        {isSvgVisible && (
          <S.Svg1>
            {isDesktop && <S.SvgImage src={svg1} />}
            {isTablet && !isMobile && !isDesktop && <S.SvgImage src={svg2} />}
            {isMobile && <S.SvgImage src={svg3} />}
          </S.Svg1>
        )}
        <S.Image1 src={bgTop} />
        <S.Image2 src={img} />
        <S.Image3 src={bgBottom} />
        <S.SvgBlur1 />
        <S.SvgBlur2 />
        <S.SvgBlur3 />
        <S.SvgBlur4 />
        <S.SvgBlur5 />
      </S.Wrapper>
    </S.Block>
  )
})

export default BackgroundSymptoms
