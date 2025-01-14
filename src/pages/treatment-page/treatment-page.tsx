import { FC } from 'react'

import { routes } from '@app/router'
import {
  BackgroundTreatment,
  BottomNav,
  ChartTreatment,
  Container,
  ContentTreatment,
  Footer,
  HeroTreatment,
} from '@components'

import * as S from './treatment-page.styled'

export const TreatmentPage: FC = () => {
  return (
    <Container nextPage={routes.prevention} prevPage={routes.about}>
      <S.Main>
        <BackgroundTreatment />
        <S.Wrapper>
          <HeroTreatment />
          <ChartTreatment />
          <ContentTreatment />
        </S.Wrapper>
        <BottomNav />
      </S.Main>
      <Footer />
    </Container>
  )
}

export default TreatmentPage
