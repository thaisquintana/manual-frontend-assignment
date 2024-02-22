import { QuizAnswersProps, QuizState } from '@/types'
import {
  Card,
  CardListOption,
  CardListOptions,
  CardListOptionsAnswers
} from './styles'
import React from 'react'

export const CardQuestion = ({
  data,
  currentQuestionIndex,
  setSelectedAnswer
}: QuizState) => {
  const handleChooseAnswer = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedAnswer(e.target.value)
  }
  return (
    <>
      <Card>
        <h3>{data?.[currentQuestionIndex]?.question}</h3>
      </Card>
      <div>
        <CardListOptions
          templateColumns={Number(
            data?.[currentQuestionIndex]?.options?.length
          )}
        >
          {data?.[currentQuestionIndex]?.options?.map(
            (answer: QuizAnswersProps) => {
              return (
                <CardListOptionsAnswers key={answer.value}>
                  <div dangerouslySetInnerHTML={{ __html: answer.display }} />
                  <CardListOption>
                    <input
                      type="radio"
                      name="option-answer"
                      value={answer.value}
                      id={answer.value}
                      onChange={handleChooseAnswer}
                    />
                    <label>{answer.value}</label>
                  </CardListOption>
                </CardListOptionsAnswers>
              )
            }
          )}
        </CardListOptions>
      </div>
    </>
  )
}
