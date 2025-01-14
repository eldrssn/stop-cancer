import { FC } from 'react'

import { useCheckDevice } from '@hooks'

import * as S from './content-about.styled'
import killSchema from '/src/assets/images/kill-schema.svg'
import killSchemaMobile from '/src/assets/images/kill-schema-mobile.svg'

export const ContentAbout: FC = () => {
  const { isMobile, isTablet } = useCheckDevice()

  return (
    <S.Wrapper>
      <S.Header>
        Иммунитет каждый день борется с{`\u00A0`}изменениями
        {!isTablet && <br />} в{`\u00A0`}клетках
      </S.Header>
      <S.BlockImmunity>
        <S.CellBlock>
          <S.TextBlock>
            <S.Text>
              Когда здоровая клетка превращается в{`\u00A0`}злокачественную, на{`\u00A0`}её уничтожение устремляются
              иммунные защитники. Их в организме много:
            </S.Text>
            <S.List>
              <S.ListItem>Т-лимфоциты, </S.ListItem>
              <S.ListItem>естественные киллеры, </S.ListItem>
              <S.ListItem>макрофаги, </S.ListItem>
              <S.ListItem>дендритные клетки.</S.ListItem>
            </S.List>
            <S.Text>
              Эта борьба происходит постоянно, мы её не{`\u00A0`}замечаем и{`\u00A0`}просто живём свою жизнь.
            </S.Text>
            <S.CellConclusion>
              Болезнь наступает лишь в{`\u00A0`}том случае, если{`\u00A0`}иммунитет по{`\u00A0`}каким-то причинам не
              {`\u00A0`}
              справился со{`\u00A0`}своей задачей и{`\u00A0`}раковые клетки размножились до{`\u00A0`}опухоли.
            </S.CellConclusion>
          </S.TextBlock>
        </S.CellBlock>
        <S.SchemaWrapper>
          <S.SchemaImage src={isMobile ? killSchemaMobile : killSchema} />
        </S.SchemaWrapper>
      </S.BlockImmunity>

      <S.TypesConclusion>
        Самые распространённые виды рака в{`\u00A0`}России: кожи, желудка, молочной и{`\u00A0`}
        предстательной желёз, ободочной и{`\u00A0`}
        прямой кишки, трахеи, бронхов и{`\u00A0`}лёгких.
      </S.TypesConclusion>
    </S.Wrapper>
  )
}

export default ContentAbout
