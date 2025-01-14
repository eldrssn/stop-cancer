import { FC } from 'react'

import { Tooltip } from '@app/ui'
import { useCheckDevice } from '@hooks'

import { STEPS } from './constants'
import * as S from './myths-content.styled'
import { MythsContentProps } from './types'

export const MythsContent: FC<MythsContentProps> = () => {
  const { isMobile, isDesktop } = useCheckDevice()

  return (
    <S.Wrapper>
      <S.Content>
        <S.Heading>
          <S.Header>
            Мифы и <br /> реальность
          </S.Header>
          <S.Subheader>
            Вокруг заболевания существует
            {isDesktop && <br />} много мифов. {!isDesktop && <br />} Вот некоторые из{`\u00A0`}них.
          </S.Subheader>
        </S.Heading>
        <S.Steps>
          {STEPS.map((step) => (
            <S.StepContainer key={step.number}>
              <S.StepNumber>
                {step.number} <S.StepNumberText>Миф</S.StepNumberText>
              </S.StepNumber>
              <S.StepContent>
                <S.StepBlock>
                  {!isMobile && <S.StepTitle>Миф</S.StepTitle>}
                  <S.StepTextBlue>{step.myth}</S.StepTextBlue>
                </S.StepBlock>
                <S.StepBlock>
                  <S.StepTitle>Реальность</S.StepTitle>
                  <S.StepText>{step.reality}</S.StepText>
                </S.StepBlock>
                {step.number === 1 && (
                  <S.StepDescription>
                    Более 90% случаев рака{' '}
                    <Tooltip
                      content="Официальный портал Минздрава России об онкологических заболеваниях / Как предотвратить рак"
                      href="https://onco-life.ru/ob-onkologii/profilactica/kak-predotvratit-rak"
                    >
                      можно вылечить
                    </Tooltip>
                    , если обнаружить опухоль на{`\u00A0`}ранней стадии. Чтобы{`\u00A0`}держать болезнь под{`\u00A0`}
                    контролем и{`\u00A0`}не{`\u00A0`}пропустить начало возможного рецидива, нужно регулярно проходить
                    обследования.
                  </S.StepDescription>
                )}

                {step.number === 2 && (
                  <S.StepDescription>
                    Столкнуться с{`\u00A0`}диагнозом можно в{`\u00A0`}любом возрасте: болеют и{`\u00A0`}маленькие дети,
                    и{`\u00A0`}молодые люди. Некоторые злокачественные процессы начинаются до{`\u00A0`}45 лет. Поэтому
                    регулярные обследования необходимо проходить всем.
                  </S.StepDescription>
                )}

                {step.number === 4 && (
                  <S.StepDescription>
                    Генетика и{`\u00A0`}другие не зависящие от{`\u00A0`}человека факторы способствуют развитию опухолей
                    лишь в{`\u00A0`}30% случаев. Для профилактики важно отказаться от{`\u00A0`}вредных привычек,
                    заниматься спортом, правильно питаться и{`\u00A0`}использовать защиту от{`\u00A0`}солнца.
                  </S.StepDescription>
                )}
                {step.number === 5 && (
                  <S.StepDescription>
                    Невозможно заболеть раком из-за{`\u00A0`}тяжёлого дня на{`\u00A0`}работе, ссоры с{`\u00A0`}близкими
                    или{`\u00A0`}проваленного экзамена. Косвенно послужить началом для{`\u00A0`}развития процесса может
                    длительный хронический стресс, но{`\u00A0`}и{`\u00A0`}он напрямую не{`\u00A0`}связан с{`\u00A0`}
                    онкозаболеваниями.
                  </S.StepDescription>
                )}
                {step.number === 3 && <S.StepDescription dangerouslySetInnerHTML={{ __html: step.description }} />}
              </S.StepContent>
            </S.StepContainer>
          ))}
        </S.Steps>
      </S.Content>
    </S.Wrapper>
  )
}

export default MythsContent
