import { FC } from 'react'

import { Tooltip } from '@app/ui'
import { useCheckDevice } from '@hooks'

import * as S from './prevention-content.styled'

export const PreventionContent: FC = () => {
  const { isMobile } = useCheckDevice()
  return (
    <>
      <S.Wrapper>
        <S.Heading>
          <S.Header>Как образ жизни поможет снизить риски</S.Header>
          <S.Subheader>
            Повлиять можно{isMobile && <br />} не на все факторы, {isMobile && <br />} но на многие
          </S.Subheader>
        </S.Heading>
        <S.Description>
          <S.Text>
            Некоторые факторы контролировать сложно. Сыграть роль могут возраст, генетика и{`\u00A0`}даже расовая
            принадлежность. Например, риск меланомы в{`\u00A0`}20 раз выше среди белокожих по{`\u00A0`}сравнению с
            {`\u00A0`}темнокожими людьми.
          </S.Text>
          <S.Text>
            Но{`\u00A0`}процессы мутации клеток очень сложны, и{`\u00A0`}даже «плохая» генетика — это вовсе не{`\u00A0`}
            гарантия заболевания.
          </S.Text>
        </S.Description>
      </S.Wrapper>

      <S.Content>
        <S.ContentHeading>
          <S.Info>
            Иногда болезнь{' '}
            <Tooltip
              content="Официальный портал Минздрава России об онкологических заболеваниях / Канцерогенные вещества"
              href="https://onco-life.ru/ob-onkologii/profilactica/faktory-riska/vneshnie-faktory/post/kancerogennye-veshestva"
            >
              развивается
            </Tooltip>{' '}
            из-за{`\u00A0`}внешних факторов, таких как{`\u00A0`}плохая экологическая ситуация или{`\u00A0`}регулярный{' '}
            контакт с{`\u00A0`}веществами-канцерогенами.
          </S.Info>
          <S.ContentTitle>
            От таких рисков можно защититься или снизить их{`\u00A0`}влияние на{`\u00A0`}организм.
          </S.ContentTitle>
        </S.ContentHeading>

        <S.Section1>
          <S.Block1>
            <S.Title>Курение</S.Title>
            <S.TextBlock>
              Страдают не{`\u00A0`}только органы дыхания. Сигареты виноваты в{`\u00A0`}развитии около 20 видов рака,
              включая рак трахеи, мочевого пузыря, желудка, молочной железы.
            </S.TextBlock>
          </S.Block1>
          <S.Block2>
            <S.Title>Употребление спиртного</S.Title>
            <S.TextBlock>
              «Бокальчик красного для{`\u00A0`}здоровья» — это{`\u00A0`}миф. Безопасной дозы алкоголя не{`\u00A0`}
              существует. Спиртное связано как{`\u00A0`}минимум с{`\u00A0`}семью видами рака: молочной железы, полости
              рта, глотки, пищевода, печени, гортани и{`\u00A0`}прямой и{`\u00A0`}толстой кишки.
            </S.TextBlock>
          </S.Block2>
        </S.Section1>

        <S.Section2>
          <S.Block3>
            <S.Title> Малоподвижный образ жизни и{`\u00A0`}неправильное питание</S.Title>
            <S.TextBlock>
              Такой дуэт нередко приводит к ожирению, которое{' '}
              <Tooltip
                content="Официальный портал Минздрава России об онкологических заболеваниях / Лишний вес: как он повышает риск развития рака"
                href="https://onco-life.ru/ob-onkologii/profilactica/faktory-riska/pitanie/post/lishnij-ves-kak-on-povyshaet-risk-vozniknoveniya-raka"
              >
                связывают
              </Tooltip>{' '}
              с{`\u00A0`}повышенным риском развития опухолей в{`\u00A0`}десятке локализаций. Вероятность столкнуться с
              {`\u00A0`}диагнозом увеличивается пропорционально весу. Так,{`\u00A0`}у{`\u00A0`}женщины с III степенью
              ожирения риск возрастает на{`\u00A0`}62%, а{`\u00A0`}у{`\u00A0`}мужчины — на{`\u00A0`}52%.
            </S.TextBlock>
          </S.Block3>

          <S.Block3>
            <S.Title>Ультрафиолет</S.Title>
            <S.TextBlock>
              Воздействие УФ-лучей — самый распространённый фактор риска рака кожи разных типов. Важно отказываться от
              {`\u00A0`}загара и{`\u00A0`}прятать под
              {`\u00A0`}одеждой открытые участки кожи, когда{`\u00A0`}солнце особенно агрессивно, и{`\u00A0`}регулярно
              пользоваться SPF-средствами.
            </S.TextBlock>
          </S.Block3>
        </S.Section2>
        <S.Section3>
          <S.Block4>
            <S.Title>Инфекции</S.Title>
            <S.TextBlock>
              Вирусы гепатита B и C, некоторые виды ВПЧ, ВИЧ-инфекция, бактерии хеликобактер пилори — с{`\u00A0`}этими
              возбудителями связаны почти 13% диагнозов. Поэтому важно регулярно проходить общие обследования и
              {`\u00A0`}сдавать анализы.
            </S.TextBlock>
          </S.Block4>
        </S.Section3>
      </S.Content>
    </>
  )
}

export default PreventionContent