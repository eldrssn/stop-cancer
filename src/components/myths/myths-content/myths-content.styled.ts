import styled from 'styled-components'

import { Breakpoints, Colors } from '@app/tokens'

export const Wrapper = styled.section``
export const Content = styled.div`
  max-width: 1280rem;
  margin: 0 auto;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    max-width: 1200rem;
    margin-top: -10rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    padding: 40rem 20rem;
    padding-top: 14rem;
    padding-bottom: 55rem;
    margin: 0;
    max-width: 100%;
    width: 100%;
  }
`
export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50rem;
  margin-bottom: 101rem;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    margin-bottom: 50rem;
    gap: 30rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    margin-bottom: 30rem;
    gap: 20rem;
  }
`
export const Header = styled.h2`
  font-weight: 750;
  font-size: 90rem;
  line-height: 100%;
  color: ${Colors.PURPLE};

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    font-size: 75rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    font-size: 35rem;
    line-height: 100%;
  }
`
export const Subheader = styled.h3`
  font-weight: 750;
  font-size: 50rem;
  line-height: 100%;
  color: ${Colors.PURPLE};

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    font-size: 35rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    font-size: 25rem;
  }
`

export const Steps = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 100rem;
  list-style-type: none;
  padding: 0;
  margin-bottom: 95rem;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    gap: 40rem;
    margin-bottom: 59rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    gap: 41.5rem;
    margin-bottom: 0;
  }
`

export const StepContainer = styled.li`
  display: flex;
  gap: 40rem;

  &:nth-child(3) {
    margin-top: -20rem;
  }

  &:nth-child(4) {
    margin-top: -6rem;
  }

  &:nth-child(5) {
    margin-top: -50rem;
  }

  &:nth-child(2n) {
    margin-left: auto;
  }

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    &:nth-child(5) {
      margin-top: 0;
    }

    &:nth-child(3),
    &:nth-child(4) {
      margin-top: 6rem;
    }
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    flex-direction: column;
    gap: 30rem;

    &:nth-child(2n) {
      margin-left: unset;
    }

    &:nth-child(2),
    &:nth-child(3) {
      margin-bottom: -15rem;
    }
    &:nth-child(4) {
      margin-bottom: -10rem;
    }
  }
`
export const StepNumber = styled.div`
  backdrop-filter: blur(35rem);
  -webkit-backdrop-filter: blur(35rem);
  box-shadow: 0 15rem 35rem 0 rgba(58, 57, 159, 0.05);
  background: ${Colors.WHITE03};
  border-radius: 25rem;
  padding: 30rem 40rem;
  width: 125rem;
  font-size: 50rem;
  height: 125rem;
  font-weight: 750;
  line-height: 130%;
  color: ${Colors.PURPLE};
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  gap: 10rem;

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    width: min-content;
    height: 95rem;
    padding: 30rem 40rem;
    backdrop-filter: blur(10rem);
    -webkit-backdrop-filter: blur(10rem);
  }
`

export const StepNumberText = styled.span`
  display: none;
  font-size: 22rem;
  line-height: 100%;
  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    display: inline;
  }
`

export const StepContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 29.5rem;
  width: 668rem;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    gap: 30rem;
    width: 615rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    width: 100%;
  }
`
export const StepBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20rem;

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    gap: 30rem;
  }
`
export const StepTitle = styled.h4`
  font-weight: 750;
  font-size: 22rem;
  line-height: 100%;
  color: ${Colors.PURPLE};

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    font-size: 20rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    padding-top: 2rem;
    padding-bottom: 0rem;
    font-size: 22rem;
  }
`

export const StepText = styled.p`
  backdrop-filter: blur(35rem);
  -webkit-backdrop-filter: blur(35rem);
  box-shadow: 0 15rem 35rem 0 rgba(58, 57, 159, 0.05);
  background: ${Colors.WHITE05};
  border-radius: 25rem;
  padding: 30rem 40rem;
  width: 100%;
  min-height: 89rem;
  font-weight: 400;
  font-size: 22rem;
  line-height: 130%;
  color: ${Colors.PURPLE};

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    font-size: 20rem;
  }

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    font-size: 22rem;
  }
`

export const StepTextBlue = styled(StepText)`
  background: ${Colors.BLUE04};
`
export const StepDescription = styled.p`
  font-weight: 400;
  font-size: 18rem;
  line-height: 162%;
  color: ${Colors.PURPLE};
  font-family: 'Muller', sans-serif;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    font-size: 16rem;
    line-height: 160%;
    margin-top: -2rem;
  }
  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    font-size: 16rem;
    margin-top: -0;
  }

  & a {
    text-decoration: underline;
    text-decoration-skip-ink: none;
    color: ${Colors.PURPLE};
  }
`
