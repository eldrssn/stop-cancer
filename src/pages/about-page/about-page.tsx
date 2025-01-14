import { FC } from 'react'

import { routes } from '@app/router'
import { BackgroundAbout, BottomNav, Container, ContentAbout, Footer, HeroAbout } from '@components'

import * as S from './about-page.styled'

export const AboutPage: FC = () => {
  return (
    <Container nextPage={routes.treatment} prevPage={routes.main}>
      <S.Main>
        <BackgroundAbout />
        <S.Wrapper>
          <HeroAbout />
          <ContentAbout />
        </S.Wrapper>
        <BottomNav />
      </S.Main>
      <Footer />
    </Container>
  )
}

export default AboutPage
