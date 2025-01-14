import { FC } from 'react'

import { useLocation } from 'react-router-dom'

import { trackExternalLinkClick } from '@app/analytics'

import * as S from './hero.styled'
import { HeroProps } from './types'

export const Hero: FC<HeroProps> = () => {
  const { pathname } = useLocation()

  return (
    <S.Wrapper>
      <S.Content>
        <S.Heading>
          <S.Subheader>Это нужно всем</S.Subheader>
          <S.Header>Гид по онкологическим заболеваниям:</S.Header>
          <S.Desctiption>от рисков до лечения</S.Desctiption>
        </S.Heading>
        <S.InfoBlocks>
          <S.TextBlock>
            <S.Text>
              Не так давно диагноз «рак» воспринимался как{`\u00A0`}приговор, а каждый случай выздоровления — как чудо.
            </S.Text>
            <S.Text>
              Сейчас ситуация изменилась: появились новые методы диагностики и{`\u00A0`}лечения, препараты и{`\u00A0`}
              подходы к{`\u00A0`}терапии. Самое главное{`\u00A0`}&mdash; обнаружить болезнь на{`\u00A0`}ранних стадиях.
            </S.Text>
          </S.TextBlock>
          <S.TextBlockBold>
            <S.TextStrong>
              Почему возникает рак, как{`\u00A0`}его лечат и{`\u00A0`}что{`\u00A0`}может сделать каждый человек для
              {`\u00A0`}
              своего здоровья
              {`\u00A0`}&mdash; рассказываем вместе с{`\u00A0`}ведущими экспертами и{`\u00A0`}
              <S.Link
                onClick={() => trackExternalLinkClick(pathname, 'https://minzdrav.gov.ru/')}
                href="https://minzdrav.gov.ru/"
              >
                Минздравом России
              </S.Link>
              .
            </S.TextStrong>
          </S.TextBlockBold>
        </S.InfoBlocks>
      </S.Content>
    </S.Wrapper>
  )
}

export default Hero
