import { FC, useState } from 'react'

import { useLocation } from 'react-router-dom'

import { trackMoreAboutDispensaryClick } from '@app/analytics'
import { Tooltip } from '@app/ui'
import { useCheckDevice } from '@hooks'

import * as S from './content-symptoms.styled'

const maleContent = (
  <div>
    <p>
      <strong>18–39 лет</strong>
    </p>
    <ul>
      <li>
        — Профилактический осмотр на{`\u00A0`}выявление рака визуальной локализации — раз в{`\u00A0`}три года.
      </li>
    </ul>
    <p>
      <strong>После 40 лет</strong>
    </p>
    <ul>
      <li>— Флюорография или{`\u00A0`}рентгенография лёгких — ежегодно.</li>
      <li>
        — Исследование кала на{`\u00A0`}скрытую кровь — один раз в{`\u00A0`}два года.
      </li>
      <li>
        — Определение простат-специфического антигена (ПСА) в{`\u00A0`}крови — в 45, 50, 55, 60 лет и{`\u00A0`}64 года.
      </li>
      <li>— Эзофагогастродуоденоскопия — один раз, в{`\u00A0`}45 лет.</li>
    </ul>
  </div>
)

const femaleContent = (
  <div>
    <p>
      <strong>18–39 лет</strong>
    </p>
    <ul>
      <li>
        — Профилактический осмотр на{`\u00A0`}выявление рака визуальной локализации — раз в{`\u00A0`}три года.
      </li>
      <li>
        — Цитологическое исследование мазка с{`\u00A0`}шейки матки и{`\u00A0`}цервикального канала — раз в{`\u00A0`}три
        года.
      </li>
    </ul>
    <p>
      <strong>После 40 лет</strong>
    </p>
    <ul>
      <li>— Флюорографии или{`\u00A0`}рентгенографии лёгких — ежегодно.</li>
      <li>
        — Исследование кала на{`\u00A0`}скрытую кровь — один раз в{`\u00A0`}два года.
      </li>
      <li>— Маммография — один раз в{`\u00A0`}два года.</li>
      <li>— Эзофагогастродуоденоскопия — один раз, в{`\u00A0`}45 лет. </li>
    </ul>
  </div>
)

export const ContentSymptoms: FC = () => {
  const [activeTab, setActiveTab] = useState('male')
  const { isMobile } = useCheckDevice()
  const { pathname } = useLocation()

  return (
    <S.Wrapper id="end">
      <S.Header>
        Что входит в{`\u00A0`}первый{`\u00A0`}этап
        {!isMobile && <br />} диспансеризации
      </S.Header>

      <S.TabContainer>
        <S.TabButton $active={activeTab === 'male'} onClick={() => setActiveTab('male')}>
          Мужчины
        </S.TabButton>
        <S.TabButton $active={activeTab === 'female'} onClick={() => setActiveTab('female')}>
          Женщины
        </S.TabButton>
      </S.TabContainer>

      <S.Content>{activeTab === 'male' ? maleContent : femaleContent}</S.Content>

      <S.TextColumns>
        <S.TextColumn>
          Если во{`\u00A0`}время первого этапа диспансеризации врачи заподозрили неладное, пациенту могут{' '}
          <Tooltip
            content="Официальный портал Минздрава России об онкологических заболеваниях / Как предотвратить рак"
            href="https://onco-life.ru/ob-onkologii/profilactica/kak-predotvratit-rak"
          >
            назначить
          </Tooltip>{' '}
          дополнительные обследования. Например, КТ лёгких или{`\u00A0`}колоноскопию.
        </S.TextColumn>
        <S.TextColumn>
          Обнаружить некоторые опухоли{' '}
          <Tooltip
            content="Официальный портал Минздрава России об онкологических заболеваниях / Как предотвратить рак"
            href="https://onco-life.ru/ob-onkologii/profilactica/kak-predotvratit-rak"
          >
            можно
          </Tooltip>{' '}
          и{`\u00A0`}самостоятельно. Например, чтобы предупредить рак кожи, нужно следить за{`\u00A0`}состоянием родинок
          и{`\u00A0`}осматривать кожные покровы. Мужчинам раз в{`\u00A0`}месяц рекомендуют осматривать и{`\u00A0`}
          прощупывать член и{`\u00A0`}яички, а женщинам — молочную железу на 5–12-й день цикла. Наличие узлов и
          {`\u00A0`}уплотнений, втянутые соски, выделения из{`\u00A0`}сосков, изменение формы и{`\u00A0`}размера груди,
          изменения на{`\u00A0`}коже — всё это поводы записаться к{`\u00A0`}врачу.
        </S.TextColumn>
      </S.TextColumns>
      <S.Conslusion>
        Каждый россиянин может бесплатно пройти скрининги на{`\u00A0`}онкозаболевания во{`\u00A0`}время{' '}
        <a href="https://onco-life.ru/ob-onkologii/profilactica/kak-predotvratit-rak" target="_blank">
          диспансеризации
        </a>
        . Достаточно записаться в{`\u00A0`}поликлинику по{`\u00A0`}месту жительства через портал «Госуслуги», в
        {`\u00A0`}регистратуре или{`\u00A0`}по{`\u00A0`}телефону медучреждения. Понадобится только паспорт и{`\u00A0`}
        полис ОМС. С 18 до 39 лет диспансеризацию нужно проходить раз в{`\u00A0`}три года. В 2024-м на обследование ждут
        граждан 2006, 2003, 2000, 1997, 1994, 1991, 1988, 1985 годов рождения. После 40 лет обследоваться рекомендуют
        раз в{`\u00A0`}год.
      </S.Conslusion>
      <S.ConclusionLink
        target="_blank"
        href="https://onco-life.ru/ob-onkologii/profilactica/kak-predotvratit-rak"
        onClick={() =>
          trackMoreAboutDispensaryClick(pathname, 'https://onco-life.ru/ob-onkologii/profilactica/kak-predotvratit-rak')
        }
      >
        {isMobile ? 'Узнать больше' : 'Больше о диспансеризации'}
      </S.ConclusionLink>
    </S.Wrapper>
  )
}

export default ContentSymptoms
