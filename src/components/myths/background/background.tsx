import { FC } from 'react'

import { useCheckDevice } from '@hooks'

import { Sequence } from '../sequence'
import { SequenceMobile } from '../sequence-mobile'
import * as S from './background.styled'
import ball1 from '/src/assets/images/ball1.png'
import ball2 from '/src/assets/images/ball2.png'
import ball3 from '/src/assets/images/ball3.png'
import ball4 from '/src/assets/images/ball4.png'
import ball5 from '/src/assets/images/ball5.png'
import ball6 from '/src/assets/images/ball6.png'
import ball7 from '/src/assets/images/ball7.png'
import ball8 from '/src/assets/images/ball8.png'
import bg from '/src/assets/images/bg-hero.png'
import bgMobile from '/src/assets/images/bg-hero-mobile.png'
import bg2 from '/src/assets/images/bg2.png'
import bg2Mobile from '/src/assets/images/bg2-mobile.png'

export const Background: FC = () => {
  const { isMobile } = useCheckDevice()

  const bgImage = isMobile ? bgMobile : bg
  const bg2Image = isMobile ? bg2Mobile : bg2

  return (
    <S.Background>
      <S.BgTop>
        <S.ImageBg src={bgImage} />
        <S.Ball4 src={ball4} />
        <S.CircleBlue1 />
        {!isMobile && <S.CircleBlue2 />}
        <S.Ball1 src={ball1} />
        <S.Circle2 />
        {isMobile ? <SequenceMobile /> : <Sequence />}
        <S.Circle1 />
        <S.Circle3 />
        <S.Ball2 src={ball2} />
        <S.Ball3 src={ball3} />
      </S.BgTop>
      <S.BgBottom>
        <S.ImageBgBottom src={bgImage} />
      </S.BgBottom>
      <S.CircleBlue3 />
      <S.Bg2 src={bg2Image} />
      {isMobile && <S.Bg3 src={bg2Image} />}
      {!isMobile && <S.CircleWhite1 />}
      <S.Circle4 />
      <S.Ball5 src={ball5} />
      <S.Circle5 />
      <S.Ball6 src={ball6} />
      <S.Ball7 src={ball7} />
      <S.CircleBlue4 />
      <S.CircleBlue5 />
      <S.Circle6 />
      {isMobile && <S.Circle7 />}
      {!isMobile && <S.Ball8 src={ball8} />}
    </S.Background>
  )
}

export default Background
