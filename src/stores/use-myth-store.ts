import { create } from 'zustand'

import { MYTH_TEST } from '@app/data/myth-test'

interface Option {
  text: string
  isCorrect: boolean
}

interface Question {
  question: string
  options: Option[]
  feedbackCorrect: string
  feedbackIncorrect: string
  tooltip?: string
  feedbackEnd?: string
  linkText?: string
  link?: string
}

interface MythsTestState {
  currentStep: number
  correctAnswers: number
  incorrectAnswers: number
  answerSelected: boolean
  isAnswerCorrect: boolean | null
  selectedAnswerText: string | null
  questions: Question[]
  selectAnswer: (optionText: string, isCorrect: boolean) => void
  nextQuestion: () => void
  resetTest: () => void
}

export const useMythsTestStore = create<MythsTestState>((set) => ({
  currentStep: 0,
  correctAnswers: 0,
  incorrectAnswers: 0,
  answerSelected: false,
  isAnswerCorrect: null,
  selectedAnswerText: null,
  questions: MYTH_TEST,
  selectAnswer: (optionText: string, isCorrect: boolean) =>
    set((state) => ({
      correctAnswers: state.correctAnswers + (isCorrect ? 1 : 0),
      incorrectAnswers: state.incorrectAnswers + (!isCorrect ? 1 : 0),
      answerSelected: true,
      isAnswerCorrect: isCorrect,
      selectedAnswerText: optionText,
    })),
  nextQuestion: () =>
    set((state) => ({
      currentStep: state.currentStep + 1,
      answerSelected: false,
      isAnswerCorrect: null,
      selectedAnswerText: null,
    })),
  resetTest: () =>
    set({
      currentStep: 0,
      correctAnswers: 0,
      incorrectAnswers: 0,
      answerSelected: false,
      isAnswerCorrect: null,
      selectedAnswerText: null,
    }),
}))
