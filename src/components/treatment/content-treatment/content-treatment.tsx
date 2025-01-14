import { FC } from 'react'

import { Tooltip } from '@app/ui'
import { useCheckDevice } from '@hooks'

import * as S from './content-treatment.styled'
import { ContentTreatmentProps } from './types'
import doc1 from '/src/assets/images/doc1.png'
import doc2 from '/src/assets/images/doc2.png'

export const ContentTreatment: FC<ContentTreatmentProps> = () => {
  const { isMobile } = useCheckDevice()
  return (
    <S.Wrapper>
      <S.DoctorBlock>
        <S.DoctorBlockLeft>
          <S.Title>Хирургический</S.Title>
          <S.TextBlock>
            <S.Text>
              Это удаление опухоли или{`\u00A0`}поражённых тканей операционным путём. Хирургия может применяться
              самостоятельно или{`\u00A0`}в{`\u00A0`}сочетании с{`\u00A0`}другими методами лечения для{`\u00A0`}
              предотвращения рецидива — например, лучевой, лекарственной или{`\u00A0`}гормональной терапией. Решение о
              {`\u00A0`}необходимости вмешательства принимает врач на{`\u00A0`}основе результатов диагностики и
              {`\u00A0`}общего состояния пациента.
            </S.Text>
          </S.TextBlock>
        </S.DoctorBlockLeft>
        <S.DoctorBlockRight>
          <S.Doctor>
            <S.DoctorImg src={doc1} />
            <S.DoctorInfo>
              <S.DoctorName>Андрей Рябов</S.DoctorName>
              <S.DoctorPosition>
                Заместитель генерального директора ФГБУ «НМИЦ радиологии» Минздрава России.
              </S.DoctorPosition>
            </S.DoctorInfo>
          </S.Doctor>
          <S.DoctorText>
            <S.Text>
              Частота применения хирургического метода лечения зависит от{`\u00A0`}множества факторов. Например, типа и
              {`\u00A0`}стадии злокачественного новообразования, общего состояния пациента, сопутствующих заболеваний.
            </S.Text>
            <S.Text>
              Современные методы становятся всё более щадящими и{`\u00A0`}малоинвазивными. Это особенно важно для
              {`\u00A0`}пациентов, которые хорошо реагируют на{`\u00A0`}другие методы лечения, но{`\u00A0`}нуждаются в
              {`\u00A0`}удалении опухоли. Задача врача — подобрать наиболее эффективный и{`\u00A0`}наименее травматичный
              метод лечения для{`\u00A0`}каждого конкретного случая.
            </S.Text>
          </S.DoctorText>
        </S.DoctorBlockRight>
      </S.DoctorBlock>

      <S.DoctorBlockFull>
        <S.Title>Лучевая терапия</S.Title>
        <S.TextBlock>
          <S.Text>
            На опухоль воздействуют высокими дозами радиации. Ионизирующее излучение{' '}
            <Tooltip
              content="Официальный портал Минздрава России об онкологических заболеваниях / Лучевая терапия"
              href="https://onco-life.ru/ob-onkologii/lechenie/metody-lecheniya/post/luchevaya-terapiya"
            >
              разрушает
            </Tooltip>{' '}
            генетическую структуру раковых клеток, и{`\u00A0`}они погибают. Лучевая терапия работает точечно, чтобы
            {`\u00A0`}воздействие на{`\u00A0`}здоровые ткани было минимальным.
          </S.Text>
          <S.Text>
            После курса лечения нормальные клетки, которые были повреждены, начинают восстанавливаться. Лучевая терапия
            часто{' '}
            <Tooltip
              content="Официальный портал Минздрава России об онкологических заболеваниях / Лучевая терапия"
              href="https://onco-life.ru/ob-onkologii/lechenie/metody-lecheniya/post/luchevaya-terapiya"
              isLeft={isMobile}
            >
              применяется
            </Tooltip>{' '}
            для{`\u00A0`}лечения рака шейки матки, предстательной железы, молочной железы, лёгкого, простаты и{`\u00A0`}
            мозга.
          </S.Text>
        </S.TextBlock>
      </S.DoctorBlockFull>

      <S.DoctorBlock>
        <S.DoctorBlockLeft>
          <S.Title>Химиотерапия</S.Title>
          <S.TextBlock>
            <S.Text>
              Пациенту{' '}
              <Tooltip
                content="Официальный портал Минздрава России об онкологических заболеваниях / Химиотерапия"
                href="https://onco-life.ru/ob-onkologii/lechenie/metody-lecheniya/post/himioterapiya"
              >
                назначают
              </Tooltip>{' '}
              курс противоопухолевых препаратов, которые{`\u00A0`}уничтожают делящиеся раковые клетки. Лекарственную
              терапию могут провести до{`\u00A0`}операции, чтобы{`\u00A0`}уменьшить размер опухоли, или{`\u00A0`}после —
              для{`\u00A0`}снижения рисков рецидива.
            </S.Text>
          </S.TextBlock>
        </S.DoctorBlockLeft>
        <S.DoctorBlockRight>
          <S.Doctor>
            <S.DoctorImg src={doc2} />
            <S.DoctorInfo>
              <S.DoctorName>Лариса Болотина</S.DoctorName>
              <S.DoctorPosition>
                Заведующая отделением химиотерапии МНИОИ им П. А. Герцена – филиала ФГБУ «НМИЦ радиологии» Минздрава
                России.
              </S.DoctorPosition>
            </S.DoctorInfo>
          </S.Doctor>
          <S.DoctorTextPadding>
            <S.Text>
              Переносимость химиотерапии индивидуальна, к тому же{`\u00A0`}многое зависит от{`\u00A0`}препаратов,
              которые назначены пациенту. Чтобы лечебный эффект был достигнут, а{`\u00A0`}негативные реакции
              минимизированы, доза рассчитывается индивидуально, исходя из{`\u00A0`}роста, веса, возраста и{`\u00A0`}
              других параметров.
            </S.Text>
            <S.Text>
              Тошнота и рвота — одни из{`\u00A0`}наиболее частых и{`\u00A0`}тягостных симптомов, которые испытывают
              пациенты во{`\u00A0`}время лечения. Ярко выраженные токсические реакции часто происходят из-за{`\u00A0`}
              того, что{`\u00A0`}человек мало пьёт, отказывается от{`\u00A0`}еды или{`\u00A0`}стремительно теряет
              жидкость при{`\u00A0`}диарее. Всё это приводит к{`\u00A0`}высокой концентрации цитостатиков и{`\u00A0`}
              вызывает дисбаланс в{`\u00A0`}организме. Поэтому во{`\u00A0`}время лечения важно соблюдать все
              рекомендации лечащего врача.
            </S.Text>
          </S.DoctorTextPadding>
        </S.DoctorBlockRight>
      </S.DoctorBlock>

      <S.DoctorBlockFull>
        <S.TitleSmaller>Фотодинамическое лечение</S.TitleSmaller>
        <S.TextBlock>
          <S.Text>
            В организм пациента{' '}
            <Tooltip
              content="Официальный портал Минздрава России об онкологических заболеваниях / Фотодинамическая терапия"
              href="https://onco-life.ru/ob-onkologii/lechenie/metody-lecheniya/post/fotodinamicheskaya-terapiya"
              isLeft={isMobile}
            >
              вводят
            </Tooltip>{' '}
            терапевтические средства в{`\u00A0`}неактивной форме. Затем активируют их лазерным облучением в{`\u00A0`}
            опухолевом очаге. Препараты начинают производить активные формы кислорода, которые повреждают или{`\u00A0`}
            уничтожают расположенные рядом раковые клетки.
          </S.Text>
          <S.Text>
            Этот метод часто применяется для{`\u00A0`}лечения опухолей с{`\u00A0`}затруднённым доступом — в{`\u00A0`}
            носу или{`\u00A0`}ушной раковине. Фотодинамическая терапия{' '}
            <Tooltip
              content="Официальный портал Минздрава России об онкологических заболеваниях / Фотодинамическая терапия"
              href="https://onco-life.ru/ob-onkologii/lechenie/metody-lecheniya/post/fotodinamicheskaya-terapiya"
            >
              считается
            </Tooltip>{' '}
            щадящей для{`\u00A0`}репродуктивной системы при{`\u00A0`}лечении злокачественных опухолей в{`\u00A0`}половой
            системе женщин.
          </S.Text>
        </S.TextBlock>
      </S.DoctorBlockFull>

      <S.DoctorBlockFull>
        <S.Title>Иммунотерапия</S.Title>
        <S.TextBlock>
          <S.Text>
            Это инновационный метод медикаментозного лечения. Оно{' '}
            <Tooltip
              content="Официальный портал Минздрава России об онкологических заболеваниях / Новейшие исследования противоопухолевого иммунитета"
              href="https://onco-life.ru/ob-onkologii/lechenie/diagnoz-ot-a-ya/ekspertnoe-mnenie/post/novejshie-issledovaniya-protivoopuholevogo-immuniteta"
            >
              воздействует
            </Tooltip>{' '}
            не{`\u00A0`}на{`\u00A0`}опухолевые клетки, а{`\u00A0`}на{`\u00A0`}лимфоциты в{`\u00A0`}крови человека,
            заставляя их активнее уничтожать опасного соседа.
          </S.Text>
          <S.Text>
            Иммунотерапия применяется при{`\u00A0`}меланоме, раке почки, лёгких, мочевого пузыря, желудка, простаты,
            поджелудочной железы, лимфомы Ходжкина, глиобластоме и{`\u00A0`}многих других опухолях.
          </S.Text>
        </S.TextBlock>
      </S.DoctorBlockFull>

      <S.DoctorBlockFull>
        <S.Title>Гормональная терапия</S.Title>
        <S.TextBlock>
          <S.Text>
            Некоторые виды рака напрямую связаны с{`\u00A0`}гормонами, которые производит наш организм. Такая терапия
            уменьшает их выработку и{`\u00A0`}лишает опухоль «подпитки», замедляя таким образом её рост.
          </S.Text>
        </S.TextBlock>
      </S.DoctorBlockFull>
    </S.Wrapper>
  )
}

export default ContentTreatment
