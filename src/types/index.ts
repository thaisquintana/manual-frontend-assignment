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
  selectedAnswer: UserAnswerSelected | undefined
  handleAnswers: (id: string, value: string, isRejection: boolean) => void
  setSelectedAnswer?: ({ id, answer, isRejection }: UserAnswerSelected) => void
  setRejectedEvaluation?: (isRejection: boolean) => void
}

export type UserAnswerSelected = {
  id: string
  answer: string
  isRejection: boolean
}
