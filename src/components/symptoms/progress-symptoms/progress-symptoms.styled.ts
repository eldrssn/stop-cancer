import styled, { keyframes } from 'styled-components'

import { Breakpoints, Colors } from '@app/tokens'

import { colors } from './constants'

const fadeInUp = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const fadeOutUp = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`

export const Container = styled.div`
  height: min-content;
  overflow-y: auto;
  position: relative;
  max-width: 1280rem;
  margin: 0 auto;
  height: 570rem;

  margin-bottom: 54rem;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
  overflow: hidden;
  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    margin: 0 auto 90rem;
    margin-bottom: 90rem;
    max-width: 1200rem;
    height: 380rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    max-width: 320rem;
    height: 440rem;
    margin-bottom: 30rem;
    overflow: visible;
  }
`

export const PinSection = styled.div`
  height: 470rem;
  margin: 0 auto;

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    height: 380rem;
  }
  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    height: 380rem;
  }
`

export const PinContent = styled.div<{
  $visible: boolean
}>`
  position: absolute;
  top: 16rem;
  height: 570rem;

  display: flex;
  gap: 60rem;
  max-width: 1280rem;
  margin: 0 auto;
  z-index: ${({ $visible }) => ($visible ? 2 : 1)};
  animation: ${({ $visible }) => ($visible ? fadeInUp : fadeOutUp)} 0.7s ease-out forwards;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    max-width: 1200rem;
    height: 380rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    flex-direction: column;
    max-width: 320rem;
    gap: 0;
    height: 420rem;
  }
`

export const Header = styled.h2`
  max-width: 1280rem;
  margin: 0 auto;
  margin-bottom: 70rem;
  font-weight: 750;
  font-size: 50rem;
  line-height: 100%;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    max-width: 1200rem;
    font-size: 40rem;
    margin-bottom: 42rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    font-size: 25rem;
    margin-bottom: 30rem;
    max-width: 320rem;
  }
`
export const ProgressBar = styled.div`
  background-color: red;
  height: 16rem;
  overflow: hidden;
`

export const ProgressBarBorder = styled.div`
  border-bottom: 1px solid ${Colors.PURPLE_DARK};
  max-width: 1280rem;
  margin: 0 auto;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    max-width: 1200rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    max-width: 320rem;
  }
`
export const ProgressBarColors = styled.div`
  min-width: 1280rem;
  display: flex;
  overflow: hidden;
  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    min-width: 1200rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    min-width: 320rem;
  }
`
export const ProgressBlock = styled.div<{ $color: string }>`
  width: 25%;
  height: 16rem;
  background-color: ${({ $color }) => $color};
`

export const Image = styled.div`
  flex-basis: 50%;
  display: grid;
  place-content: center;

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    flex-basis: unset;

    min-height: 180rem;
    & svg {
      height: 120rem;
      width: auto;
    }
  }
`

export const ImageThird = styled(Image)`
  & svg {
    margin-top: 18rem;

    @media screen and (max-width: ${Breakpoints.MOBILE}px) {
      margin-top: 16rem;

      scale: 1.31;
    }
  }
`

export const InfoBlock = styled.div`
  flex-basis: 50%;
  display: grid;
  place-content: center;
  flex-direction: column;
  gap: 30rem;

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    gap: 16rem;
    flex-basis: unset;
  }
`

export const InfoBlockTitle = styled.p<{ $i: number }>`
  font-weight: 750;
  font-size: 50rem;
  line-height: 100%;
  color: ${({ $i }) => colors[$i - 1]};
`
export const InfoBlockText = styled.div`
  font-weight: 400;
  font-size: 22rem;
  line-height: 130%;

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    font-size: 14rem;
  }
`
export const TextColumns = styled.div`
  max-width: 1280rem;
  margin: 0 auto;
  display: grid;
  gap: 60rem;
  grid-template-columns: 387rem 833rem;
  margin-bottom: 100rem;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    max-width: 1200rem;
    grid-template-columns: 387rem 753rem;
    margin-bottom: 90rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    display: flex;
    flex-direction: column;
    gap: 20rem;
    max-width: 320rem;
    margin-bottom: 50rem;
  }
`
export const Text = styled.p`
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
export const StrongText = styled.p`
  font-weight: 750;
  font-size: 50rem;
  line-height: 100%;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    font-size: 35rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    font-size: 18rem;
  }
`
