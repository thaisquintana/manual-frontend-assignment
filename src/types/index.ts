export type QuizProps = {
  id: string
  question: string
  type: string
  options: Array<QuizAnswersProps>
}

export type QuizAnswersProps = {
  display: string
  value: string
  isRejection: boolean
}

export type QuizState = {
  templateColumns?: number
  data?: Array<QuizProps>
  currentQuestionIndex: number
  selectedAnswer: string
  setSelectedAnswer: (value: string) => void
  setRejectedEvaluation: (isRejection: boolean) => void
}
