import styled from 'styled-components'

import { Breakpoints, Colors } from '@app/tokens'

export const Wrapper = styled.section`
  margin: 0 auto;
  margin-bottom: 84rem;
  max-width: 1280rem;
  z-index: 1;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    margin-bottom: 90rem;
    max-width: 1200rem;
  }
  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    margin-bottom: 50rem;
    max-width: 320rem;
  }
`
export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 95rem;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    margin-bottom: 90rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    margin-bottom: 192rem;
    width: 320rem;
  }
`
export const Header = styled.h1`
  font-weight: 750;
  font-size: 120rem;
  line-height: 80%;
  margin-bottom: 60rem;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    font-size: 90rem;
    margin-bottom: 30rem;
    width: 800rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    font-size: 45rem;
    margin-bottom: 20rem;
    line-height: 100%;
    width: 102%;
  }
`
export const Subheader = styled.h2`
  font-weight: 750;
  font-size: 50rem;
  line-height: 100%;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    font-size: 40rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    font-size: 25rem;
  }
`

export const TextBlock = styled.div`
  width: 609rem;
  display: flex;
  flex-direction: column;
  gap: 10rem;
  font-size: 20rem;
  line-height: 130%;
  margin-bottom: 90rem;

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    width: 100%;
    font-size: 16rem;
    gap: 20rem;
    margin-bottom: 50rem;
  }
`
export const Text = styled.p``

export const Description = styled.div`
  border-radius: 45rem;
  padding: 30rem 40rem;
  font-weight: 400;
  font-size: 22rem;
  line-height: 130%;
  text-align: center;
  border: 1px solid ${Colors.PURPLE_DARK};

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    font-size: 20rem;
    width: 569rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    font-size: 16rem;
    width: 100%;
  }
`
