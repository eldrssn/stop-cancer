import styled from 'styled-components'

import { Breakpoints } from '@app/tokens'

export const Main = styled.main`
  position: relative;
  overflow: hidden;
`

export const Wrapper = styled.div`
  max-width: 1280rem;
  margin: 0 auto;
  padding: 130rem 0 0;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    max-width: 1200rem;
    padding: 70rem 0 0;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    max-width: 320rem;
    margin: 0 auto;
    padding: 40rem 0 0;
  }
`
