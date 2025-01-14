import { FC } from 'react'

import { routes } from '@app/router'
import { BackgroundPrevention, BottomNav, Container, Footer, PreventionContent } from '@components'

import * as S from './prevetion-page.styled'

export const PrevetionPage: FC = () => {
  return (
    <Container nextPage={routes.symptoms} prevPage={routes.treatment}>
      <S.Main>
        <BackgroundPrevention />
        <S.Wrapper>
          <PreventionContent />
        </S.Wrapper>
        <BottomNav />
      </S.Main>
      <Footer />
    </Container>
  )
}

export default PrevetionPage
