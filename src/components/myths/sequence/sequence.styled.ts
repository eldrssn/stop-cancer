import styled from 'styled-components'

import { Breakpoints } from '@app/tokens'

export const Wrapper = styled.div`
  position: absolute;
  height: 863rem;
  top: 366rem;
  right: 120rem;
  transform: rotate(15deg);
  aspect-ratio: 920/890;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    top: 286rem;
    right: 290rem;
    height: 923rem;
  }
`

export const Sequence = styled.canvas`
  width: 100%;
`
