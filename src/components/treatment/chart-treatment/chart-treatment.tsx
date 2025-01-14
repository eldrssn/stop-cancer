import { FC } from 'react'

import { Tooltip } from '@app/ui'
import { Chart } from '@components'

import * as S from './chart-treatment.styled'
import { ChartTreatmentProps } from './types'

export const ChartTreatment: FC<ChartTreatmentProps> = () => {
  return (
    <>
      <S.Header>
        Виды опухолей, которые{' '}
        <Tooltip
          content="Российское общество специалистов по опухолям головы и шеи / Виды рака которые успешно лечатся почти всегда"
          href="https://hnonco.ru/vidyi-raka,-kotoryie-uspeshno-lechatsya-pochti-vsegda.html"
        >
          показывают
        </Tooltip>{' '}
        самые высокие проценты выздоровлений*
      </S.Header>
      <Chart />
      <S.Desription>
        *Данные пятилетней выживаемости при{`\u00A0`}вмешательстве на{`\u00A0`}ранних стадиях.
      </S.Desription>
      <S.Info>
        Выбор схемы лечения всегда{' '}
        <Tooltip
          content="Официальный портал Минздрава России об онкологических заболеваниях / Базовые сведения о методах лечения"
          href="https://onco-life.ru/ob-onkologii/lechenie/metody-lecheniya/post/bazovye-svedeniya-o-metodah-lecheniya"
        >
          индивидуален
        </Tooltip>
        . Как правило, врачи сочетают несколько методов — вот{`\u00A0`}самые популярные.
      </S.Info>
    </>
  )
}

export default ChartTreatment
