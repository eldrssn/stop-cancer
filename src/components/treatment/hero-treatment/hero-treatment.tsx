import { FC } from 'react'

import { useCheckDevice } from '@hooks'

import * as S from './hero-treatment.styled'

export const HeroTreatment: FC = () => {
  const { isMobile } = useCheckDevice()
  return (
    <S.Wrapper>
      <S.Heading>
        <S.Header>
          Как лечат онко{isMobile && '-'}
          {isMobile && <br />}заболевания
        </S.Header>
        <S.Subheader>Для разных типов рака есть свои методы</S.Subheader>
      </S.Heading>
      <S.Description>
        <S.Text>В России действует ускоренный порядок оказания помощи людям с{`\u00A0`}онкозаболеваниями.</S.Text>
        <S.Text>
          По закону, лечение должно быть назначено в{`\u00A0`}течение 7 рабочих дней с{`\u00A0`}момента постановки
          диагноза. Ведь чем{`\u00A0`}быстрее начать терапию, тем{`\u00A0`}больше шансов, что{`\u00A0`}она пройдёт
          успешно. Пять лет без{`\u00A0`}рецидивов часто указывают на
          {`\u00A0`}то, что{`\u00A0`}заболевание побеждено и,{`\u00A0`}скорее всего, не{`\u00A0`}вернётся.
        </S.Text>
      </S.Description>
    </S.Wrapper>
  )
}

export default HeroTreatment
