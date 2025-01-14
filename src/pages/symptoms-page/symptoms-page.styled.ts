import styled from 'styled-components'

import { Breakpoints, Colors } from '@app/tokens'

export const Main = styled.main`
  position: relative;
  color: ${Colors.PURPLE_DARK};
  overflow: hidden;
`

export const Wrapper = styled.div`
  margin: 0 auto;
  padding: 130rem 0 0;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    padding: 70rem 0 0;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    padding: 40rem 0 0;
  }
`

export const Block = styled.div`
  z-index: -1;
`
