import { FC, useMemo } from 'react'

import { useLocation } from 'react-router-dom'

import { trackAnswerClick, trackLearnMoreClick, trackNextQuestionClick } from '@app/analytics'
import { useMythsTestStore } from '@app/stores'
import { Tooltip } from '@app/ui'
import { useCheckDevice } from '@hooks'

import * as S from './myths-test.styled'

export const MythsTest: FC = () => {
  const {
    currentStep,
    questions,
    correctAnswers,
    incorrectAnswers,
    selectAnswer,
    nextQuestion,
    answerSelected,
    isAnswerCorrect,
  } = useMythsTestStore()

  const question = questions[currentStep]
  const { pathname } = useLocation()
  const isLastQuestion = currentStep === questions.length - 1
  const { isMobile } = useCheckDevice()
  const isFinish = currentStep >= questions.length

  const answerTooltipPosition = useMemo(() => {
    if (isMobile && currentStep === 4 && isAnswerCorrect) return false

    return isMobile && (currentStep === 2 || currentStep === 3 || currentStep === 4)
  }, [currentStep, isAnswerCorrect, isMobile])

  const handleButtonClick = (text: string, isCorrect: boolean, i: number) => () => {
    selectAnswer(text, isCorrect)
    const buttonName = i === 0 ? 'Правда' : 'Ложь'
    trackAnswerClick(pathname, String(currentStep + 1), buttonName)
  }

  const handleNextQuestion = () => {
    nextQuestion()
    trackNextQuestionClick(pathname)
  }

  return (
    <S.Wrapper>
      <S.Content>
        <S.Title>
          Правда <br /> или ложь?
        </S.Title>
        <S.Description>Проверьте, сколько фактов о раке вы сможете отличить от{`\u00A0`}вымысла.</S.Description>

        {isMobile ? (
          <>
            {isFinish && (
              <>
                <S.QuestionBlock $isFinish={isFinish}>
                  <S.ResultBlock>
                    <S.ResultTrue>
                      Правильных ответов: <strong>{correctAnswers}</strong>
                    </S.ResultTrue>
                    <S.ResultFalse>
                      Неправильных ответов: <strong>{incorrectAnswers}</strong>
                    </S.ResultFalse>
                  </S.ResultBlock>
                </S.QuestionBlock>
                <S.ButtonNext type="button" onClick={() => useMythsTestStore.getState().resetTest()}>
                  Пройти ещё раз
                </S.ButtonNext>
              </>
            )}
            {!answerSelected && !isFinish && (
              <S.QuestionBlock $isFinish={isFinish}>
                <S.Counter>
                  <S.CurrentStep>{currentStep + 1}</S.CurrentStep>/<S.AllSteps>{questions.length}</S.AllSteps>
                </S.Counter>
                <S.Question>{question.question}</S.Question>
                <S.Buttons>
                  {question.options.map((option, index) => (
                    <S.Button
                      $isLie={index === 1}
                      type="button"
                      key={index}
                      onClick={handleButtonClick(option.text, option.isCorrect, index)}
                      disabled={answerSelected}
                    >
                      {option.text}
                    </S.Button>
                  ))}
                </S.Buttons>
              </S.QuestionBlock>
            )}

            {answerSelected && !isFinish && (
              <>
                <S.FeedbackBlock>
                  <S.Feedback>
                    {isAnswerCorrect ? question.feedbackCorrect : question.feedbackIncorrect}
                    <Tooltip content={question.tooltip} href={question.link} isFull={answerTooltipPosition}>
                      {question.linkText}
                    </Tooltip>
                    {question.feedbackEnd}
                  </S.Feedback>
                </S.FeedbackBlock>

                <S.ButtonNext type="button" onClick={handleNextQuestion}>
                  {isLastQuestion ? 'Завершить тест' : 'Следующий вопрос'}
                </S.ButtonNext>
              </>
            )}
          </>
        ) : (
          <>
            <S.QuestionBlock $isFinish={isFinish}>
              {!isFinish && (
                <S.Counter>
                  <S.CurrentStep>{currentStep + 1}</S.CurrentStep>/<S.AllSteps>{questions.length}</S.AllSteps>
                </S.Counter>
              )}

              {!isFinish ? (
                <S.Question>{question.question}</S.Question>
              ) : (
                <S.ResultBlock>
                  <S.ResultTrue>
                    Правильных ответов: <strong>{correctAnswers}</strong>
                  </S.ResultTrue>
                  <S.ResultFalse>
                    Неправильных ответов: <strong>{incorrectAnswers}</strong>
                  </S.ResultFalse>
                </S.ResultBlock>
              )}

              {!answerSelected && !isFinish && (
                <S.Buttons>
                  {question.options.map((option, index) => (
                    <S.Button
                      $isLie={index === 1}
                      type="button"
                      key={index}
                      onClick={handleButtonClick(option.text, option.isCorrect, index)}
                      disabled={answerSelected}
                    >
                      {option.text}
                    </S.Button>
                  ))}
                </S.Buttons>
              )}
            </S.QuestionBlock>
            {answerSelected && (
              <>
                <S.FeedbackBlock>
                  <S.Feedback>
                    {isAnswerCorrect ? question.feedbackCorrect : question.feedbackIncorrect}
                    <Tooltip content={question.tooltip} href={question?.link} isFull={answerTooltipPosition}>
                      {question?.linkText}
                    </Tooltip>
                    {question?.feedbackEnd}
                  </S.Feedback>
                </S.FeedbackBlock>

                <S.ButtonNext type="button" onClick={handleNextQuestion}>
                  {isLastQuestion ? 'Завершить тест' : 'Следующий вопрос'}
                </S.ButtonNext>
              </>
            )}
            {isFinish && (
              <S.ButtonNext type="button" onClick={() => useMythsTestStore.getState().resetTest()}>
                Пройти ещё раз
              </S.ButtonNext>
            )}
          </>
        )}
      </S.Content>
      {/* {`\u00A0`} */}
      <S.ConclusionBlock>
        <S.Conclusion>
          Если вы ищете информацию о{`\u00A0`}раке, важно обращаться только к{`\u00A0`}проверенным источникам.
          Официальный портал Минздрава России об{`\u00A0`}онкологических заболеваниях Onco-life.ru был создан для
          {`\u00A0`}того, чтобы помочь сориентироваться в огромном потоке далеко не всегда правдивой информации о
          болезни, чтобы{`\u00A0`}каждый человек был вооружён знаниями о{`\u00A0`}профилактике и{`\u00A0`}ранней
          диагностике злокачественных новообразований, точно знал, как{`\u00A0`}действовать, если{`\u00A0`}поставлен
          онкологический диагноз, и{`\u00A0`}понимал: рак — не{`\u00A0`}приговор, а{`\u00A0`}болезнь, которая{`\u00A0`}
          лечится.
        </S.Conclusion>

        <S.ConclusionLink
          target="_blank"
          href="https://onco-life.ru/?erid=LjN8KMCPE"
          onClick={() => trackLearnMoreClick(pathname, 'https://onco-life.ru/?erid=LjN8KMCPE')}
        >
          Узнать больше
        </S.ConclusionLink>
      </S.ConclusionBlock>
    </S.Wrapper>
  )
}

export default MythsTest
