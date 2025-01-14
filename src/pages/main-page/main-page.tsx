import { FC } from 'react'

import { routes } from '@app/router'
import { Background, BottomNav, Container, Footer, Hero, MythsContent, MythsTest } from '@components'

import * as S from './main-page.styled'

export const MainPage: FC = () => {
  return (
    <Container nextPage={routes.about}>
      <S.Body>
        <Background />
        <S.Main>
          <Hero />
          <MythsContent />
          <MythsTest />
          <BottomNav />
        </S.Main>
      </S.Body>
      <Footer />
    </Container>
  )
}

export default MainPage
