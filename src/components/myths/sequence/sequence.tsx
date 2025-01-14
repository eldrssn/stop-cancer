import { FC } from 'react'

import { useSequence } from '@hooks'

import * as S from './sequence.styled'

const frames = Array(70)
  .fill('')
  .map((_, i) => {
    const index = i.toString().padStart(5, '0')
    return new URL(`/src/assets/sequences/Anim_920x890_70frames/Anim_920x890_70frames_${index}.png`, import.meta.url)
      .href
  })

export const Sequence: FC = () => {
  const { canvasRef } = useSequence({
    width: 920,
    height: 890,
    frames,
    frameInterval: 30,
    isStarted: true,
    isLooping: true,
  })

  return (
    <S.Wrapper>
      <S.Sequence ref={canvasRef} width={'920rem'} height={'890rem'} />
    </S.Wrapper>
  )
}

export default Sequence
