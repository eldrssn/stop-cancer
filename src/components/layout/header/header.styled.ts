import { Link as RouterLink } from 'react-router-dom'
import styled, { css } from 'styled-components'

import { Breakpoints, Colors } from '@app/tokens'

import mobileMenuBg from '/src/assets/images/mobile-menu-bg.png'

export const Wrapper = styled.header`
  min-height: 85rem;
  display: grid;
  place-content: center;
  background-color: ${Colors.WHITE};
  position: sticky;
  top: 0;
  background-color: ${Colors.WHITE};
  z-index: 10;
  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    min-height: 90rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    min-height: 55rem;
    max-height: 55rem;
  }
`
export const Content = styled.div`
  min-width: 1280rem;
  height: 70rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    min-width: 1200rem;
    margin-left: 40rem;
    margin-right: 40rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    min-width: auto;
    gap: 25rem;
    margin-left: 20rem;
    margin-right: 14rem;
    height: 40rem;
  }
`

export const List = styled.ul`
  display: flex;
  gap: 25rem;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  padding: 0;
  padding-right: 6rem;
  z-index: 10;
  position: relative;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    gap: 25rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    flex-direction: column;
    padding: 55rem 40rem;
    gap: 40rem;
  }
`
export const Link = styled.a`
  color: inherit;
  cursor: pointer;
`

export const NavLink = styled(RouterLink)`
  color: inherit;
  cursor: pointer;
`

export const Logo = styled.img`
  height: 27rem;
  width: 100rem;
  aspect-ratio: 100/27;
`
export const Nav = styled.nav<{ $isNavOpen?: boolean }>`
  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    position: fixed;
    display: none;
    min-height: calc(var(--vh, 1vh) * 100 - 100rem);
    backdrop-filter: blur(100px);
    -webkit-backdrop-filter: blur(100px);
    top: 55rem;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${`url("${mobileMenuBg}") no-repeat center`};
    background-size: cover;

    ${(props) =>
      props.$isNavOpen &&
      css`
        display: block;
      `}
  }
`
export const Item = styled.li<{ $active: boolean }>`
  font-weight: 400;
  font-size: 14rem;
  text-align: center;
  color: ${Colors.BLACK};

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    font-size: 22rem;
  }

  ${(props) =>
    props.$active &&
    css`
      font-weight: 750;
      color: ${Colors.RED};
      @media screen and (max-width: ${Breakpoints.MOBILE}px) {
        text-decoration: underline;
        text-decoration-skip-ink: none;
      }
    `};
`
export const Partners = styled.div`
  display: flex;
  gap: 30rem;
  align-items: center;
  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    gap: 27rem;
  }
`
export const Partner = styled.img`
  width: auto;
`

export const Partner1 = styled(Partner)`
  height: 70rem;
  aspect-ratio: 227 / 70;
  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    height: 55rem;

    aspect-ratio: 50 / 55;
  }
  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    height: 40rem;
    aspect-ratio: 45 / 50;
  }
`

export const Partner2 = styled(Partner)`
  height: 66rem;
  aspect-ratio: 89 / 66;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    height: 55rem;
    aspect-ratio: 76 / 55;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    height: 35rem;
    aspect-ratio: 62 / 46;
  }
`

export const NavButton = styled.button`
  border: none;
  background-color: inherit;
`
