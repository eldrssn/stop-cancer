import styled, { css } from 'styled-components'

import { Breakpoints, Colors } from '@app/tokens'

export const Wrapper = styled.section`
  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    padding: 0 20rem;
  }
`

export const Content = styled.div`
  max-width: 1280rem;
  margin: 0 auto;
  border-radius: 45rem;
  padding: 60rem 106rem;
  padding-bottom: 86rem;
  background: ${Colors.WHITE};
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    max-width: 1200rem;
    padding: 50rem 72rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    padding: 40rem 20rem;
    padding-top: 41rem;
    border-radius: 25rem;
    padding-bottom: 0;
  }
`
export const Title = styled.h2`
  font-weight: 750;
  font-size: 90rem;
  line-height: 100%;
  text-align: center;
  color: ${Colors.PURPLE};
  margin-bottom: 20rem;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    font-size: 75rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    font-size: 35rem;
  }
`
export const Description = styled.p`
  font-weight: 400;
  font-size: 30rem;
  line-height: 130%;
  text-align: center;
  color: ${Colors.PURPLE};
  margin-bottom: 80rem;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    font-size: 26rem;
    margin: 0 34rem 80rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    font-size: 18rem;
    margin: 0;
    margin-bottom: 39rem;
  }
`

export const QuestionBlock = styled.div<{ $isFinish: boolean }>`
  border: 1rem solid ${Colors.PURPLE_LIGHT_BORDER};
  border-radius: 25rem;
  padding: 70rem 60rem 60rem 60rem;
  width: 1056rem;
  margin: 0 auto;
  position: relative;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    padding: 69rem 60rem 58rem 60rem;

    margin-bottom: 34rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    width: calc(100% + 40rem);
    margin: 0 -20rem;
    padding: 70rem 30rem 42rem 30rem;
    margin-top: 20rem;
    padding-bottom: 41rem;
  }

  ${(props) =>
    props.$isFinish &&
    css`
      padding: 40rem 60rem;
      margin-bottom: 30rem;

      @media screen and (max-width: ${Breakpoints.MOBILE}px) {
        padding: 40rem;
        margin: 0;
        margin-bottom: 54rem;
        width: 100%;
      }
    `};
`
export const Counter = styled.p`
  display: block;
  border: 1rem solid ${Colors.PURPLE_LIGHT_BORDER};
  border-radius: 90rem;
  padding: 30rem 40rem;
  width: 160rem;
  height: 100rem;
  background: ${Colors.WHITE};
  font-size: 25rem;
  color: ${Colors.PURPLE_LIGHT_BORDER};
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 50%;
  translate: -50% -50%;
  line-height: 80%;
  white-space: nowrap;

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    width: 119rem;
    height: 80rem;
    border-radius: 45rem;
    padding: 7.5rem 30rem;
    padding-bottom: 20rem;
  }
`
export const CurrentStep = styled.span`
  font-weight: 400;
  font-size: 50rem;
  line-height: 70%;
  color: ${Colors.PURPLE};
`
export const AllSteps = styled.span``

export const Question = styled.p`
  font-weight: 400;
  font-size: 22rem;
  line-height: 130%;
  color: ${Colors.PURPLE};

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    font-size: 20rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    font-size: 18rem;
    margin-bottom: 32rem;
  }
`
export const Buttons = styled.div`
  display: flex;
  gap: 15rem;
  position: absolute;
  bottom: 0rem;
  left: 50%;
  translate: -50% 50%;

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    position: static;
    translate: unset;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 25rem;
  }
`

export const Button = styled.button<{ $isLie?: boolean }>`
  border-radius: 90rem;
  padding: 15rem 50rem;
  width: 220rem;
  height: 52rem;
  border: none;
  background: ${Colors.PURPLE};
  font-weight: 400;
  font-size: 18rem;
  line-height: 120%;
  white-space: nowrap;
  color: ${Colors.WHITE};
  cursor: pointer;

  ${(props) =>
    props.$isLie &&
    css`
      background: linear-gradient(160deg, #9489f0 0%, rgba(179, 171, 247, 0.2) 100%), #c05aff;
    `};
`

export const FeedbackBlock = styled.div`
  padding: 30rem 50rem;
  display: flex;
  flex-direction: column;
  gap: 15rem;

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    margin-top: 11rem;
    text-align: center;
    padding: 0;
    margin-bottom: 51rem;
  }
`
export const Feedback = styled.p`
  font-weight: 400;
  font-size: 22rem;
  line-height: 130%;
  color: ${Colors.PURPLE};
  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    font-size: 18rem;
  }
`
export const AnsweDecription = styled.p`
  font-weight: 750;
  font-size: 22rem;
  line-height: 130%;
  color: ${Colors.PURPLE};
`
export const SelectedAnswer = styled(Feedback)``

export const ButtonNext = styled(Button)`
  width: auto;
  margin: 0 auto;
  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    margin-bottom: 40rem;
    width: 268rem;
    padding: 15rem 34rem;
  }
`

export const ResultBlock = styled.div`
  width: 100%;
  display: flex;
  gap: 100rem;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    flex-direction: column;
    text-align: center;
    gap: 30rem;
  }
`
export const Result = styled.p`
  font-weight: 400;
  font-size: 22rem;
  line-height: 130%;

  & strong {
    font-weight: 750;
  }
`
export const ResultTrue = styled(Result)`
  color: ${Colors.PURPLE};
`
export const ResultFalse = styled(Result)`
  color: ${Colors.PURPLE_LIGHT};
`

export const ConclusionBlock = styled.div`
  width: 1280rem;
  margin: 90rem auto 53rem;
  display: flex;
  flex-direction: column;
  gap: 50rem;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    width: 1200rem;
    margin: 65rem auto 50rem;
    gap: 30rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    width: 100%;
    margin: 53rem auto 30rem;
  }
`

export const Conclusion = styled.div`
  width: 100%;
  border-radius: 45rem;
  padding: 30rem 40rem;
  border: 1px solid ${Colors.PURPLE};
  font-weight: 400;
  font-size: 22rem;
  line-height: 130%;
  text-align: center;
  color: ${Colors.PURPLE};
  width: 100%;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    font-size: 20rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    width: 100%;
    border-radius: 25rem;
    padding: 30rem 20rem;
    font-size: 16rem;
  }
`
export const ConclusionLink = styled.a`
  border-radius: 90rem;
  padding: 15rem 50rem;
  width: 500rem;
  height: 80rem;
  background: ${Colors.PURPLE};
  font-weight: 400;
  font-size: 18rem;
  line-height: 120%;
  display: grid;
  place-content: center;
  margin: 0 auto;
  color: ${Colors.WHITE};

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    width: 100%;
    height: 60rem;
  }
`
