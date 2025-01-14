import { FC } from 'react'

import { useSequence } from '@hooks'

import * as S from './sequence-mobile.styled'

const frames = Array(45)
  .fill('')
  .map((_, i) => {
    const index = i.toString().padStart(5, '0')
    return new URL(`/src/assets/sequences/Anim_650x650_16fps/Anim_650x650_16fps_${index}.png`, import.meta.url).href
  })

export const SequenceMobile: FC = () => {
  const { canvasRef } = useSequence({
    width: 650,
    height: 650,
    frames,
    frameInterval: 30,
    isStarted: true,
    isLooping: true,
  })

  return (
    <S.Wrapper>
      <S.Sequence ref={canvasRef} width={'650rem'} height={'650rem'} />
    </S.Wrapper>
  )
}

export default SequenceMobile
