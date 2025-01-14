import styled from 'styled-components'

import { Breakpoints, Colors } from '@app/tokens'

export const Wrapper = styled.section``
export const Content = styled.div`
  max-width: 1280rem;
  margin: 0 auto;
  margin-bottom: 73rem;
  padding-top: 84rem;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    max-width: 1200rem;
    padding-top: 62rem;
    margin-bottom: 68rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    padding: 40rem 20rem;
    margin-bottom: 0rem;
  }
`
export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30rem;
  margin-bottom: 43rem;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    margin-bottom: 42rem;
  }
  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    margin-bottom: 347rem;
    gap: 20rem;
  }
`
export const Subheader = styled.h2`
  font-weight: 750;
  font-size: 50rem;
  line-height: 100%;
  color: ${Colors.PURPLE};

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    font-size: 40rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    font-size: 25rem;
  }
`
export const Header = styled.h1`
  font-weight: 750;
  font-size: 130rem;
  line-height: 80%;
  color: ${Colors.PURPLE};

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    line-height: 80%;
    font-size: 90rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    font-size: 32rem;
    line-height: 100%;
  }
`
export const Tags = styled.ul`
  display: flex;
  gap: 10rem;
  list-style-type: none;
  padding: 0;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    gap: 10rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    gap: 10rem;
    align-items: flex-start;
  }
`
export const Tag = styled.li`
  padding: 13rem 10rem;
  padding: 13rem 0 13rem 0;
  font-weight: 400;
  font-size: 22rem;
  line-height: 130%;
  color: ${Colors.PURPLE};
  display: flex;
  gap: 11rem;

  &:after {
    content: '/';
    display: block;
  }

  &:last-child::after {
    content: unset;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    font-size: 16rem;
    line-height: 120%;
    gap: 10rem;
    padding-top: 11rem;
  }
`

export const Desctiption = styled.p`
  font-size: 50rem;
  font-weight: 750;
  margin-bottom: 4rem;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    font-size: 40rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    font-size: 25rem;
  }
`
export const InfoBlocks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30rem;
  justify-content: flex-start;
  width: 610rem;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    gap: 27rem;

    width: 570rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    width: 100%;
    gap: 20rem;
  }
`
export const TextBlock = styled.article`
  backdrop-filter: blur(35rem);
  -webkit-backdrop-filter: blur(35rem);
  box-shadow: 0 15rem 35rem 0 rgba(58, 57, 159, 0.05);
  background: ${Colors.WHITE05};
  border-radius: 45rem;
  padding: 30rem 40rem;
  font-weight: 400;
  font-size: 22rem;
  line-height: 130%;
  color: ${Colors.PURPLE};
  display: flex;
  flex-direction: column;
  gap: 15rem;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    font-size: 20rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    font-size: 16rem;
    border-radius: 30rem;
    padding-bottom: 29rem;
  }
`
export const TextBlockBold = styled(TextBlock)`
  font-weight: 400;
  line-height: 130%;
`
export const Text = styled.p`
  line-height: 132%;
`

export const TextStrong = styled(Text)`
  font-weight: 750;
`

export const Link = styled.a`
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: ${Colors.PURPLE};
`
