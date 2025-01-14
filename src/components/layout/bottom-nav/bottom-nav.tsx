import { FC } from 'react'

import * as S from './bottom-nav.styled'
import { BottomNavProps } from './types'

export const BottomNav: FC<BottomNavProps> = () => {
  return (
    <S.Wrapper>
      <S.Text>Пролистайте вниз, чтобы перейти к следующему разделу</S.Text>
      <S.Icon>
        <svg width="24rem" height="24rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 19V5" stroke="#472981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path
            d="M17.001 13.999L12 19L6.99902 13.999"
            stroke="#472981"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </S.Icon>
    </S.Wrapper>
  )
}

export default BottomNav
