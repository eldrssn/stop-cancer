import styled from 'styled-components'

import { Breakpoints, Colors } from '@app/tokens'

import ball from '/src/assets/images/about/ball-lay.png'
import schema from '/src/assets/images/cell-schema.svg'
import schemaMobile from '/src/assets/images/cell-schema-mobile.svg'

export const Wrapper = styled.section`
  margin-bottom: 130rem;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    margin-bottom: 100rem;
  }
  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    margin-bottom: 59rem;
  }
`
export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  width: 833rem;
  margin-bottom: 132rem;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    margin-bottom: 98rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    margin-bottom: 223rem;
    width: 320rem;
  }
`
export const Header = styled.h1`
  font-weight: 750;
  font-size: 130rem;
  line-height: 80%;
  margin-bottom: 60rem;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    font-size: 90rem;
    margin-bottom: 32rem;
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
  margin-bottom: 30rem;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    font-size: 40rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    font-size: 25rem;
    margin-bottom: 20rem;
  }
`

export const Description = styled.p`
  font-weight: 400;
  font-size: 22rem;
  line-height: 130%;
  width: 609rem;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    font-size: 20rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    font-size: 16rem;
    width: 320rem;
    line-height: 132%;
  }
`
export const Strong = styled.strong`
  font-weight: 750;
  span {
    color: ${Colors.RED};
  }
`

export const Link = styled.a`
  font-weight: 750;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: ${Colors.RED};
`

export const Content = styled.div`
  display: flex;
  width: 100%;
  gap: 52rem;
  position: relative;
  margin-bottom: 304rem;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    gap: 62rem;
    margin-bottom: 284rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    flex-direction: column;
    gap: 590rem;
    margin-bottom: 36rem;
  }

  &::after {
    content: '';
    position: absolute;
    width: 1056rem;
    height: 280rem;
    left: -2rem;
    top: 120rem;
    background: ${`url("${schema}") no-repeat center`};
    background-position: center;
    background-size: contain;

    @media screen and (max-width: ${Breakpoints.TABLET}px) {
      top: 88rem;
    }
    @media screen and (max-width: ${Breakpoints.MOBILE}px) {
      background: ${`url("${schemaMobile}") no-repeat center`};
      width: 320rem;
      height: 490rem;
      background-position: center;
      background-size: contain;
      left: unset;
      top: 290rem;
    }
  }
`
export const SchemaText = styled.div`
  box-shadow: 0 15px 35px 0 rgba(58, 57, 159, 0.05);
  border-radius: 45rem;
  padding: 50rem;
  border: 1rem solid ${Colors.PURPLE};
  font-weight: 750;
  font-size: 22rem;
  line-height: 130%;
  text-align: center;
  margin-left: 70rem;
  min-width: 834rem;
  display: flex;
  flex-direction: column;
  gap: 10rem;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    padding: 0rem;
    min-width: 709rem;
    height: 175rem;
    font-size: 20rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    padding: 30rem;
    padding-bottom: 29rem;
    gap: 10rem;
    min-width: 320rem;
    margin-left: 0;
    font-size: 18rem;
    line-height: 128%;
    height: auto;
  }
`
export const Text = styled.p`
  font-weight: 400;
  font-size: 18rem;
  line-height: 160%;
  font-family: 'Muller', sans-serif;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    font-size: 16rem;
  }
  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    font-size: 16rem;
  }
`
export const SchemaAside = styled.div`
  margin-top: 38rem;
  margin-bottom: 44rem;
  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    margin: 0;
  }
`

export const Conclusion = styled.p`
  backdrop-filter: blur(35px);
  -webkit-backdrop-filter: blur(35px);
  box-shadow: 0 15rem 35rem 0 rgba(58, 57, 159, 0.05);
  background: linear-gradient(158deg, rgba(179, 171, 247, 0.4) 0%, rgba(179, 171, 247, 0.2) 100%);
  border-radius: 45rem;
  padding: 50rem;
  font-weight: 400;
  font-size: 22rem;
  line-height: 130%;
  position: relative;

  & span {
    color: ${Colors.RED};
  }

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    font-size: 20rem;

    padding: 40rem 50rem;
  }

  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 111rem;
    height: 111rem;
    right: 150rem;
    bottom: -81rem;
    background: ${`url("${ball}") no-repeat center`};
    background-size: contain;

    @media screen and (max-width: ${Breakpoints.TABLET}px) {
      right: 160rem;
      bottom: -76rem;
    }

    @media screen and (max-width: ${Breakpoints.MOBILE}px) {
      width: 62rem;
      height: 62rem;
      right: 24rem;
      bottom: -39rem;
    }
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    font-size: 18rem;
    padding: 30rem;
  }
`
