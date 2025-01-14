import { FC } from 'react'

import { useSequence } from '@hooks'

import * as S from './sequence.styled'

const frames = Array(5)
  .fill('')
  .map((_, i) => {
    const index = i.toString().padStart(1, '0')
    return new URL(`/src/assets/sequences/anim-gif/gif${index}.png`, import.meta.url).href
  })

export const Sequence: FC = () => {
  const { canvasRef } = useSequence({
    width: 350,
    height: 350,
    frames,
    frameInterval: 750,
    isStarted: true,
    isLooping: true,
  })

  return (
    <S.Wrapper>
      <S.Sequence ref={canvasRef} width={'650rem'} height={'650rem'} />
    </S.Wrapper>
  )
}

export default Sequence
