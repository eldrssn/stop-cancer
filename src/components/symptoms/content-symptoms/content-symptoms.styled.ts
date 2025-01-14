import styled, { css } from 'styled-components'

import { Breakpoints, Colors } from '@app/tokens'

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1280rem;
  margin-bottom: 61rem;
  margin-top: 90rem;
  z-index: 1;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    max-width: 1200rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    margin-top: 50rem;
    max-width: 320rem;
    margin-bottom: 20rem;
  }
`
export const Header = styled.div`
  font-weight: 750;
  font-size: 50rem;
  line-height: 100%;
  margin-bottom: 34rem;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    font-size: 40rem;
    margin-bottom: 30rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    font-size: 25rem;
  }
`
export const TextColumns = styled.div`
  display: grid;
  grid-template-columns: 491rem 729rem;
  gap: 60rem;
  margin-bottom: 76rem;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    margin-bottom: 90rem;
    grid-template-columns: 491rem 649rem;
    margin-bottom: 90rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    display: flex;
    flex-direction: column;
    gap: 30rem;
    margin-bottom: 50rem;
  }
`
export const TextColumn = styled.p`
  font-weight: 400;
  font-size: 22rem;
  line-height: 130%;

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    font-size: 18rem;
  }
`

export const Conslusion = styled.div`
  border-radius: 45rem;
  padding: 30rem 40rem;
  font-weight: 400;
  font-size: 22rem;
  line-height: 130%;
  text-align: center;
  border: 1px solid ${Colors.PURPLE_DARK};
  margin-bottom: 50rem;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    font-size: 20rem;
    padding: 29rem 40rem;
    margin-bottom: 60rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    padding: 30rem 20rem;
    font-size: 14rem;
    margin-bottom: 30rem;
  }

  & a {
    text-decoration: underline;
    text-decoration-skip-ink: none;
  }

  & a,
  & a:hover {
    color: inherit;
  }
`

export const ConclusionLink = styled.a`
  border-radius: 90rem;
  padding: 15rem 50rem;
  width: 500rem;
  height: 80rem;
  background: ${Colors.PURPLE};
  font-weight: 400;
  font-size: 18rem;
  line-height: 120%;
  display: grid;
  place-content: center;
  margin: 0 auto;
  color: ${Colors.WHITE};

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    height: 80rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    width: 100%;
    height: 60rem;
  }
`

export const TabContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 20rem 0 0;
  height: 69rem;
  margin-bottom: -1rem;

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    height: 49rem;
  }
`

export const TabButton = styled.button<{ $active?: boolean }>`
  all: unset;
  font-size: 30rem;
  line-height: 100%;
  box-sizing: border-box;
  text-align: center;
  cursor: pointer;

  ${(props) =>
    !props.$active &&
    css`
      font-weight: 400;
    `}

  ${(props) =>
    props.$active &&
    css`
      border-radius: 25px 25px 0 0;
      font-weight: 750;
      backdrop-filter: blur(35px);
      -webkit-backdrop-filter: blur(35px);
      background: rgba(255, 255, 255, 0.3);
      box-shadow:
        -10px 0 10px rgba(58, 57, 159, 0.02),
        10px 0 10px rgba(58, 57, 159, 0.02),
        0 -10px 10px rgba(58, 57, 159, 0.02);
    `}

  border-radius: 25rem 25rem 0 0;
  padding: 10rem;
  width: 262rem;
  height: 100%;

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    font-size: 18rem;
  }
`

export const Content = styled.div`
  margin-bottom: 106rem;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    margin-bottom: 90rem;
  }

  & div {
    border-radius: 0 35rem 35rem 35rem;
    padding: 30rem 40rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 30rem;
    backdrop-filter: blur(35px);
    -webkit-backdrop-filter: blur(35px);
    box-shadow: 0 15px 85px 0 rgba(58, 57, 159, 0.05);
    background: rgba(255, 255, 255, 0.3);

    & p strong {
      font-weight: 750;
      font-size: 30rem;
      line-height: 100%;
    }

    & ul {
      list-style-type: none;
      display: flex;
      flex-direction: column;
      padding: 0;
      gap: 15rem;

      li {
        font-weight: 400;
        font-size: 22rem;
        line-height: 130%;
      }
    }
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    margin-bottom: 50rem;

    & div {
      border-radius: 0 0 35rem 35rem;
      padding: 30rem 20rem;
      & p strong {
        font-size: 25rem;
      }

      & ul li {
        font-weight: 400;
        font-size: 18rem;
        line-height: 130%;
        word-wrap: break-word;
      }
    }
  }
`
