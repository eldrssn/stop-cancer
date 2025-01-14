import styled, { css } from 'styled-components'

export const Wrapper = styled.div<{ $lock: boolean }>`
  min-height: 100vh;
  width: 100vw;

  ${({ $lock }) =>
    $lock &&
    css`
      max-height: 100vh;
      overflow: hidden;
    `}
`
