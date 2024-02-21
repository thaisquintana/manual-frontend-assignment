export type QuizProps = {
  currentQuestion: number
  question: string
  type: string
  options: Array<QuizAnswersProps>
}

export type QuizAnswersProps = {
  display: string
  value: boolean
  isRejection: boolean
}
