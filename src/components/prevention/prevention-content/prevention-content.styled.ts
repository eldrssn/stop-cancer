import styled from 'styled-components'

import { Breakpoints } from '@app/tokens'

export const Wrapper = styled.section`
  margin-bottom: 79rem;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    margin-bottom: 70rem;
  }
  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    margin-bottom: 50rem;
  }
`
export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 75rem;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    margin-bottom: 70rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    margin-bottom: 207rem;
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
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    font-size: 45rem;
    margin-bottom: 20rem;
    line-height: 100%;
  }
`
export const Subheader = styled.h2`
  font-weight: 750;
  font-size: 50rem;
  line-height: 100%;
  max-width: 560rem;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    font-size: 40rem;
    max-width: 777rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    font-size: 25rem;
    margin-bottom: 20rem;
  }
`

export const Description = styled.div`
  font-weight: 400;
  font-size: 22rem;
  line-height: 130%;
  width: 610rem;
  display: flex;
  flex-direction: column;
  gap: 10rem;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    font-size: 20rem;
    width: 609rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    font-size: 18rem;
    width: 320rem;
    line-height: 130%;
  }
`

export const Text = styled.p``

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 44rem;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    margin-bottom: 62rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    margin-bottom: 0;
  }
`
export const ContentHeading = styled.div`
  display: flex;
  width: 100%;
  gap: 60rem;
  margin-bottom: 72rem;
  max-height: 180rem;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    margin-bottom: 70rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    gap: 20rem;
    flex-direction: column;
    margin-bottom: 50rem;
    max-height: unset;
  }
`
export const Info = styled.p`
  font-weight: 400;
  font-size: 22rem;
  line-height: 130%;
  max-width: 387rem;
  width: 100%;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    font-size: 20rem;
  }
  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    max-width: 100%;
    font-size: 18rem;
  }
`
export const ContentTitle = styled.h2`
  font-weight: 750;
  font-size: 50rem;
  line-height: 100%;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    font-size: 35rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    font-size: 25rem;
  }
`
export const Section1 = styled.div`
  display: flex;
  gap: 60rem;
  margin-bottom: 31rem;

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    margin-bottom: 25rem;
    gap: 25rem;
    flex-direction: column;
  }
`
export const Block1 = styled.div`
  backdrop-filter: blur(35px);
  -webkit-backdrop-filter: blur(35px);
  box-shadow: 0 15px 35px 0 rgba(58, 57, 159, 0.05);
  background: rgba(255, 255, 255, 0.3);
  border-radius: 45rem;
  padding: 30rem 40rem;
  max-width: 387rem;
  width: 100%;
  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    max-width: 360rem;
  }
`
export const Title = styled.div`
  font-weight: 750;
  font-size: 35rem;
  line-height: 100%;
  margin-bottom: 10rem;

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    font-size: 25rem;
  }
`
export const TextBlock = styled.div`
  font-weight: 400;
  font-size: 22rem;
  line-height: 130%;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    font-size: 20rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    font-size: 18rem;
  }
`
export const Block2 = styled.div`
  backdrop-filter: blur(35px);
  -webkit-backdrop-filter: blur(35px);
  box-shadow: 0 15px 35px 0 rgba(58, 57, 159, 0.05);
  background: rgba(255, 255, 255, 0.3);
  border-radius: 45rem;
  padding: 30rem 40rem;
`
export const Section2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30rem;
  max-width: 833rem;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    max-width: 780rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    max-width: auto;
    gap: 25rem;
    margin-bottom: 25rem;
    display: contents;
  }
`
export const Block3 = styled.div`
  backdrop-filter: blur(35px);
  -webkit-backdrop-filter: blur(35px);
  box-shadow: 0 15px 35px 0 rgba(58, 57, 159, 0.05);
  background: rgba(255, 255, 255, 0.3);
  border-radius: 45rem;
  padding: 30rem 40rem;

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    order: 1;
    margin-bottom: 25rem;
  }
`
export const Section3 = styled.div`
  width: 387rem;
  height: 424rem;
  float: left;
  margin-left: 60rem;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    width: 359rem;
    height: 391rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    margin: 0;
    width: 100%;
    height: auto;
    float: unset;
  }
`
export const Block4 = styled.div`
  backdrop-filter: blur(35px);
  -webkit-backdrop-filter: blur(35px);
  box-shadow: 0 15px 35px 0 rgba(58, 57, 159, 0.05);
  background: rgba(255, 255, 255, 0.3);
  border-radius: 45rem;
  padding: 30rem 40rem;
  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    margin-bottom: 25rem;
  }
`
