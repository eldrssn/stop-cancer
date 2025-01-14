import { FC } from 'react'

import { Tooltip } from '@app/ui'
import { useCheckDevice } from '@hooks'

import * as S from './hero-about.styled'

export const HeroAbout: FC = () => {
  const { isMobile } = useCheckDevice()

  return (
    <S.Wrapper>
      <S.Heading>
        <S.Header>Что такое рак</S.Header>
        <S.Subheader>В основе болезни лежит мутация клеток</S.Subheader>
        <S.Description>
          То, что{`\u00A0`}люди обычно называют раком, на{`\u00A0`}языке медицины означает целую группу заболеваний. Они
          появляются в{`\u00A0`}разных органах и{`\u00A0`}системах тела, но{`\u00A0`}в{`\u00A0`}основе всегда лежит один
          и{`\u00A0`}тот же{' '}
          <Tooltip
            isRight={isMobile}
            content=" Официальный портал Минздрава России об онкологических заболеваниях / Что такое опухоль?"
            href="https://onco-life.ru/ob-onkologii/osnovy/chto-takoe-rak/post/chto-takoe-opuhol"
          >
            процесс:
          </Tooltip>{' '}
          <S.Strong>бесконтрольное разрастание мутировавших клеток.</S.Strong>
        </S.Description>
      </S.Heading>

      <S.Content>
        <S.SchemaText>
          <S.Strong>
            Здоровая клетка{' '}
            <Tooltip
              isFull={isMobile}
              content="Официальный портал Минздрава России об онкологических заболеваниях / Что такое раковые клетки?"
              href="https://onco-life.ru/ob-onkologii/osnovy/chto-takoe-rak/post/chto-takoe-rakovye-kletki"
            >
              живёт
            </Tooltip>{' '}
            по чёткому
            <br /> задуманному природой алгоритму
          </S.Strong>
          <S.Text>Она рождается, растёт, созревает, а затем умирает, уступая место новой.</S.Text>
        </S.SchemaText>
        <S.SchemaAside>
          <S.Text>
            Иногда в этот цикл вмешиваются патологии, которые заставляют клетку мутировать. Тогда она теряет способность
            умирать, а{`\u00A0`}вот{`\u00A0`}делиться не{`\u00A0`}прекращает.
          </S.Text>
        </S.SchemaAside>
      </S.Content>
      <S.Conclusion>
        Каждый день в разных частях организма образуется множество раковых клеток. Это естественный процесс: он не
        означает обязательное наступление болезни.
      </S.Conclusion>
    </S.Wrapper>
  )
}

export default HeroAbout
