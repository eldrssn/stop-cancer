import { FC, useMemo } from 'react'

import { useCheckDevice } from '@hooks'

import { Sequence } from '../sequence'
import * as S from './background-prevention.styled'
import svg1 from './svg1.svg'
import svg2 from './svg2.svg'
import svg3 from './svg3.svg'
import svg4 from './svg4.svg'
import ballsLeft from '/src/assets/images/prevention/balls.png'
import ballsMobile from '/src/assets/images/prevention/balls-360.png'
import ballsTablet from '/src/assets/images/prevention/balls-1280.png'
import ballsDesc from '/src/assets/images/prevention/balls-1920.png'
import bgBottomMobile from '/src/assets/images/prevention/bg-bottom-360.png'
import bgBottomTablet from '/src/assets/images/prevention/bg-bottom-1280.png'
import bgBottomDesk from '/src/assets/images/prevention/bg-bottom-1920.png'

export const BackgroundPrevention: FC = () => {
  const { isTablet, isMobile, isDesktop } = useCheckDevice()

  const bgBottom = useMemo(() => {
    if (isMobile) {
      return bgBottomMobile
    }

    if (isTablet) {
      return bgBottomTablet
    }

    return bgBottomDesk
  }, [isTablet, isMobile])

  const balls = useMemo(() => {
    if (isMobile) {
      return ballsMobile
    }

    if (isTablet) {
      return ballsTablet
    }

    return ballsDesc
  }, [isTablet, isMobile])

  return (
    <S.Wrapper>
      <S.Gradient1 />
      <S.Image3 src={bgBottom} />
      {isDesktop && <S.SvgBackground src={svg1} />}

      {isDesktop && <S.SvgBackground2 src={svg2} />}
      <Sequence />
      {isDesktop && <S.Image4 src={ballsLeft} />}

      {!isDesktop && !isMobile && isTablet && <S.SvgBackground src={svg3} />}
      {isMobile && <S.SvgBackground src={svg4} />}
      <S.Image2 src={balls} />

      <S.SvgBlur1 />
      <S.SvgBlur2 />
      <S.SvgBlur3 />
      {isDesktop && <S.SvgBlur4 />}
      {!isMobile && <S.SvgBlur5 />}
    </S.Wrapper>
  )
}

export default BackgroundPrevention
