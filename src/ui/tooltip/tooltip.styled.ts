import styled, { css } from 'styled-components'

import { Breakpoints, Colors } from '@app/tokens'

import { TooltipStyleType } from './types'

export const Wrapper = styled.span<TooltipStyleType>`
  position: relative;
  display: inline;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  cursor: pointer;
`
export const WrapperContent = styled.span<TooltipStyleType>`
  display: block;
  margin-top: -20rem;
  padding-top: 20rem;
  position: absolute;
  top: 30rem;
  z-index: -1;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
  right: 50%;
  translate: 50% 0;

  ${(props) =>
    props.$visible &&
    css`
      opacity: 1;
      z-index: 3;
    `}

  ${(props) =>
    props.$isRight &&
    css`
      right: 0;
    `}

    ${(props) =>
    props.$isLeft &&
    css`
      left: 0;
    `}

  ${(props) =>
    props.$isFull &&
    css`
      width: 400rem;
    `}
`

export const Content = styled.span<TooltipStyleType>`
  display: block;
  font-weight: 400;
  font-size: 13rem;
  background: ${Colors.WHITE};
  border-radius: 9rem;
  padding: 10rem 20rem;
  min-width: 250rem;
  max-width: 250rem;
  line-height: 120%;
  box-shadow: 0 15px 35px 0 rgba(58, 57, 159, 0.25);

  @media screen and (min-width: ${Breakpoints.TABLET}px) {
    box-sizing: content-box;
  }

  & a {
    color: ${Colors.PURPLE};
    text-decoration: underline;
    text-decoration-skip-ink: none;
  }
`
