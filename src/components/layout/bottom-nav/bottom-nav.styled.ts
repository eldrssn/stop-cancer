import styled from 'styled-components'

import { Breakpoints, Colors } from '@app/tokens'

export const Wrapper = styled.div`
  max-width: 1280rem;
  margin: 0 auto 39rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15rem 50rem;
  gap: 10rem;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    max-width: 1200rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    max-width: 360rem;
    padding: 15rem 20rem;
    margin: 0 auto 23rem;

    flex-direction: column;
  }
`
export const Text = styled.p`
  font-weight: 400;
  font-size: 24rem;
  line-height: 120%;
  color: ${Colors.PURPLE};

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    font-size: 22rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    font-size: 18rem;
    text-align: center;
  }
`
export const Icon = styled.span``
