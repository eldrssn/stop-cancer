import styled, { css } from 'styled-components'

import { Breakpoints, Colors } from '@app/tokens'

export const Footer = styled.footer`
  background-color: ${Colors.WHITE};
  height: 101rem;
  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    height: 130rem;
  }
`

export const Content = styled.ul`
  max-width: 1280rem;
  margin: 0 auto;
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    max-width: 1200rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 15rem;
    padding: 0 20rem;
    padding-right: 10rem;
    padding-top: 5rem;
  }
`
export const Block = styled.li`
  font-weight: 400;
  font-size: 14rem;
  text-align: center;
  color: ${Colors.PURPLE};

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    text-align: left;
  }
`
export const Link = styled.a`
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: ${Colors.PURPLE};
`

export const BlockTeam = styled(Block)`
  cursor: pointer;
`

export const Button = styled.button``

export const TeamWrapper = styled.div`
  position: relative;
`

export const List = styled.ul<{ $visible: boolean }>`
  position: absolute;
  backdrop-filter: blur(35px);
  -webkit-backdrop-filter: blur(35px);
  bottom: 40rem;
  right: -10rem;
  display: flex;
  flex-direction: column;
  gap: 15rem;
  width: 325rem;
  height: 387rem;
  border-radius: 25px;
  padding: 20rem 30rem;
  box-shadow: 0 15px 35px 0 rgba(58, 57, 159, 0.05);
  margin: 0;
  list-style-type: none;
  list-style: none;
  z-index: 2;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease-in;

  @media (max-width: ${Breakpoints.MOBILE}px) {
    bottom: 40rem;
    right: unset;
    left: -5rem;
  }

  ${({ $visible }) =>
    $visible &&
    css`
      opacity: 1;
      pointer-events: all;
    `}
`
export const Row = styled.li`
  font-size: 12rem;
  line-height: 130%;
  font-weight: 400;
`

export const Strong = styled.strong`
  font-weight: 750;
`

export const Text = styled.span``
