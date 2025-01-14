import { FC, useMemo } from 'react'

import { useCheckDevice } from '@hooks'

import * as S from './background-treatment.styled'
import svg1 from './svg1.svg'
import svg2 from './svg2.svg'
import svg3 from './svg3.svg'
import { BackgroundTreatmentProps } from './types'
import balls1Desk from '/src/assets/images/methods/balls-1-1920.png'
import bgBottomMobile from '/src/assets/images/methods/bg-bottom-360.png'
import bgBottomTablet from '/src/assets/images/methods/bg-bottom-1280.png'
import bgBottomDesk from '/src/assets/images/methods/bg-bottom-1920.png'
import bgTopMobile from '/src/assets/images/methods/bg-top-360.png'
import bgTopTablet from '/src/assets/images/methods/bg-top-1280.png'
import bgTopDesk from '/src/assets/images/methods/bg-top-1920.png'

export const BackgroundTreatment: FC<BackgroundTreatmentProps> = () => {
  const { isTablet, isMobile, isDesktop } = useCheckDevice()

  const bgTop = useMemo(() => {
    if (isMobile) {
      return bgTopMobile
    }

    if (isTablet) {
      return bgTopTablet
    }

    return bgTopDesk
  }, [isMobile, isTablet])

  const bgBottom = useMemo(() => {
    if (isMobile) {
      return bgBottomMobile
    }

    if (isTablet) {
      return bgBottomTablet
    }

    return bgBottomDesk
  }, [isMobile, isTablet])

  return (
    <S.Wrapper>
      <S.Gradient1 />
      <S.Gradient2 />
      {isDesktop && <S.SvgBackground src={svg1} />}
      {!isDesktop && !isMobile && isTablet && <S.SvgBackground src={svg2} />}
      {isMobile && <S.SvgBackground src={svg3} />}
      <S.Image1 src={bgTop} />
      {!isMobile && <S.Image2 src={balls1Desk} />}
      <S.Image3 src={bgBottom} />
      <S.SvgBlur1 />
      {!isMobile && <S.SvgBlur2 />}
      <S.SvgBlur3 />
      <S.SvgBlur4 />
      {!isMobile && <S.SvgBlur8 />}
      {isDesktop && <S.SvgBlur9 />}
    </S.Wrapper>
  )
}

export default BackgroundTreatment
