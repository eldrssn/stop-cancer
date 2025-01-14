import styled from 'styled-components'

import { Breakpoints, Colors } from '@app/tokens'

export const Main = styled.main`
  position: relative;
  overflow: hidden;
  color: ${Colors.BLUE_DARK};
`

export const Wrapper = styled.div`
  max-width: 1280rem;
  margin: 0 auto;
  padding: 130rem 0 0;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    max-width: 1200rem;
    padding: 80rem 0 0;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    max-width: 320rem;
    margin: 0 auto;
    padding: 40rem 0 0;
  }
`
