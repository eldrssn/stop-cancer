import styled from 'styled-components'

import { Breakpoints, Colors } from '@app/tokens'

export const Header = styled.h1`
  font-weight: 750;
  font-size: 50rem;
  margin-bottom: 81rem;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    font-size: 40rem;
    margin-bottom: 100rem;
    width: 990rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    font-size: 25rem;
    width: 100%;
    margin-bottom: 50rem;
  }
`

export const Desription = styled.div`
  font-weight: 400;
  font-size: 13rem;
  line-height: 130%;
  text-align: center;
  width: 100%;
  display: grid;
  place-content: center;
  margin-bottom: 115rem;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    font-size: 13rem;
    margin-bottom: 90rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    font-size: 12rem;
    margin-bottom: 51rem;
    line-height: 100%;
  }
`

export const Info = styled.p`
  font-weight: 400;
  font-size: 22rem;
  line-height: 130%;
  text-align: center;
  height: 160rem;
  border-radius: 45rem;
  padding: 30rem 40rem;
  text-align: center;
  border: 1px solid ${Colors.PURPLE_DARK};
  place-content: center;
  margin-bottom: 123rem;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    font-size: 20rem;
    margin-bottom: 90rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    height: auto;
    font-size: 18rem;
    margin-bottom: 50rem;
  }
`
