import styled, { keyframes } from 'styled-components'

import { Breakpoints, Colors } from '@app/tokens'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 300rem;
  position: relative;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    height: 392rem;
    justify-content: flex-start;
    margin-bottom: 20rem;
  }
`

export const ButtonNav = styled.button`
  position: absolute;
  top: 50%;
  translate: 0 -200%;
  border: none;
  background: transparent;
  z-index: 2;
  height: 37px;
  overflow: visible;
`
export const ButtonPrev = styled(ButtonNav)`
  left: 0;
`
export const ButtonNext = styled(ButtonNav)`
  right: 0;
`

export const ButtonListMobile = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  gap: 60rem;
  width: 100%;
  height: 279rem;
  padding-top: 10rem;
  padding-bottom: 10rem;
  height: 439rem;

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    gap: 0;
    width: 320rem;
  }

  & > div {
    scroll-snap-align: start;
    display: flex;
    scroll-behavior: smooth;
    justify-content: flex-end;
    min-width: 320rem;
  }
`

export const ButtonList = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  height: 100%;
  gap: 60rem;
`
const fadeInUp = keyframes`
  from {
    height: 30rem;
  }
  to {
    height: 100%;
  }
`

const fadeOut = keyframes`
  from {
    height: 100%;
  }
  to {
    height: 30rem;
  }
`
export const Button = styled.button<{ $isHovered?: boolean }>`
  all: unset;
  width: 110rem;
  border: 1px solid ${Colors.PURPLE};
  border-radius: 25rem;
  padding: 4rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  animation: ${({ $isHovered }) => ($isHovered ? fadeInUp : fadeOut)} 0.3s linear forwards;
  display: flex;
  align-items: end;
  overflow: hidden;
`

export const Caption = styled.div<{ $visible: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16rem;
  font-weight: 400;
  font-size: 20rem;
  line-height: 100%;
  text-align: center;
  color: ${Colors.PURPLE_BRIGHT};
  transition: opacity 0.2s;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
`

export const Bar = styled.div<{ $isHovered: boolean; $rate?: number }>`
  height: ${({ $rate }) => ($rate ? `${$rate}%` : '24rem')};
  animation: ${({ $isHovered }) => ($isHovered ? fadeInUp : fadeOut)} 0.3s linear;

  min-height: 24rem;
  border-radius: 10rem;
  transition: height 0.3s ease;
  width: 100%;
  border-radius: 20rem;
  display: flex;
  align-items: end;
  text-align: center;
  background: linear-gradient(180deg, rgba(122, 109, 236, 0.2) 0%, rgba(122, 109, 236, 1) 100%);
`
export const BarWrap = styled.div<{ $isActive?: boolean }>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: end;
  position: relative;
  transition: all 0.2s ease;
  cursor: pointer;
  max-height: 279rem;
  &:hover button {
    height: 100%;
  }

  & button {
    height: ${({ $isActive }) => ($isActive ? '100%' : 'auto')};
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    gap: 29rem;
  }
`

export const BarLabel = styled.p<{ $isLast?: boolean; $isBig?: boolean }>`
  position: absolute;
  left: 153rem;
  bottom: 118rem;
  font-weight: 750;
  font-size: 35rem;
  line-height: 100%;
  color: ${Colors.PURPLE_BRIGHT};
  bottom: ${({ $isBig }) => ($isBig ? '60rem' : '118rem')};

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    left: ${({ $isLast }) => ($isLast ? 'unset' : '153rem')};
    right: ${({ $isLast }) => ($isLast ? '153rem' : 'unset')};
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    font-size: 16rem;
    text-align: center;
    top: 312rem;
    left: 50%;
    translate: -50% 0;
    position: absolute;
  }
`

export const TextBar = styled.span`
  font-weight: 750;
  font-size: 30rem;
  line-height: 130%;
  color: ${Colors.WHITE};
  margin: auto;
  margin-bottom: 16rem;
`

export const Hr = styled.div`
  width: 100%;
  height: 2rem;
  background: ${Colors.PURPLE_BRIGHT};
  border: 5rem;
  margin-top: 8rem;
  margin-bottom: 31rem;

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    margin-bottom: 106rem;
    position: absolute;
    top: 289rem;
    right: 0;
    left: 0;
    margin-bottom: 0;
  }
`
