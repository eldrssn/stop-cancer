import { FC } from 'react'

import { useCheckDevice } from '@hooks'

import * as S from './background-about.styled'
import svg1 from './svg1.svg'
import svg2 from './svg2.svg'
import svg3 from './svg3.svg'
import ball3 from '/src/assets/images/about/ball-lay.png'
import ball1 from '/src/assets/images/about/ball1.png'
import ball2 from '/src/assets/images/about/ball2.png'
import ball4 from '/src/assets/images/about/ball4.png'
import mol1 from '/src/assets/images/about/mol1.png'
import mol2 from '/src/assets/images/about/mol2.png'
import mol3 from '/src/assets/images/about/mol3.png'

export const BackgroundAbout: FC = () => {
  const { isMobile, isTablet } = useCheckDevice()

  return (
    <S.Wrapper>
      {isMobile ? (
        <>
          <S.Image2 src={mol2} />
          <S.SvgImage src={svg3} />
          <S.BgTop />
          <S.BgBottom />
          <S.SvgWrap5></S.SvgWrap5>
          <S.PurpleBlur2 />
          <S.PurpleBlur1 />
          <S.Image1 src={mol1} />
          <S.Blur1 />
          <S.Blur3 />
          <S.PurpleBlur3 />

          <S.Blur2 />

          <S.Ball4 src={ball4} />
          <S.Ball3 src={ball3} />
          <S.Ball5 src={ball3} />
        </>
      ) : (
        <>
          <S.BgTop />

          <S.BgBottom />
          {!isTablet && <S.SvgImage src={svg1} />}
          {isTablet && <S.SvgImage src={svg2} />}
          <S.PurpleBlur2 />
          <S.PurpleBlur1 />

          <S.Image1 src={mol1} />
          <S.Blur1 />
          <S.Blur2 />
          <S.Blur3 />

          <S.PurpleBlur5 />
          {!isTablet && <S.PurpleBlur4 />}
          <S.Ball1 src={ball1} />

          <S.BgCenter />
          <S.Image2 src={mol2} />
          <S.Image4 src={mol3} />
          <S.Ball2 src={ball2} />
          {!isTablet && <S.Ball4 src={ball4} />}
          {isMobile && <S.Ball3 src={ball3} />}
          {!isTablet && <S.PurpleBlur3 />}
          <S.Blur4 />
          <S.Blur5 />
        </>
      )}
    </S.Wrapper>
  )
}

export default BackgroundAbout
