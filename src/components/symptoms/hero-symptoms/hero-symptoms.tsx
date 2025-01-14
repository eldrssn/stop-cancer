import { FC } from 'react'

import { useCheckDevice } from '@hooks'

import * as S from './hero-symptoms.styled'

export const HeroSymptoms: FC = () => {
  const { isMobile } = useCheckDevice()
  return (
    <S.Wrapper>
      <S.Heading>
        <S.Header>
          Что поможет <br />
          вовремя обнаружить {!isMobile && <br />}
          опухоль
        </S.Header>
        <S.Subheader>
          Привычка регулярно <br />
          проходить обследования
          <br /> и диспансеризацию
        </S.Subheader>
      </S.Heading>
      <S.Description>
        На ранних стадиях у{`\u00A0`}рака, как{`\u00A0`}правило, нет специфических симптомов. Но{`\u00A0`}
        противоопухолевая терапия показывает лучшие результаты именно в{`\u00A0`}этот период. Поэтому посещать врачей
        для{`\u00A0`}профилактики важно, даже если ничего не беспокоит.
      </S.Description>
    </S.Wrapper>
  )
}

export default HeroSymptoms
