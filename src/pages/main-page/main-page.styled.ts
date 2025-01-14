import styled, { css, keyframes } from 'styled-components'

import loader from '/src/assets/images/loader.png'
import loaderBg from '/src/assets/images/loader-bg.webp'

export const Body = styled.div`
  background: #f2f3f7;
  position: relative;
  overflow: hidden;
`

export const Main = styled.main`
  position: relative;
`

export const Hidden = styled.div`
  display: none;
`

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const Loader = styled.div<{ $hide?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${`url("${loaderBg}") no-repeat center`};
  background-position: center;
  background-size: cover;
  z-index: 20;
  opacity: 1;
  transition: opacity 0.3s;

  ${({ $hide }) =>
    $hide &&
    css`
      opacity: 0;
    `}

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 50%;
    width: 80rem;
    height: 80rem;
    background: url('${loader}') no-repeat center;
    background-size: contain;
    translate: 50%;
    animation: ${rotate} 1.5s linear infinite;
  }
`
