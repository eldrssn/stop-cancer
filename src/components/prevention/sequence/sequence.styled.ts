import styled from 'styled-components'

import { Breakpoints } from '@app/tokens'

export const Wrapper = styled.div`
  position: absolute;
  height: 863rem;
  top: 336rem;
  right: 220rem;
  transform: rotate(15deg);
  aspect-ratio: 920/890;
  width: 600rem;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    top: 206rem;
    right: 110rem;
    height: 923rem;
    width: 570rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    top: 396rem;
    right: 100rem;
    height: 923rem;
    width: 310rem;
  }
`

export const Sequence = styled.canvas`
  width: 100%;
`
