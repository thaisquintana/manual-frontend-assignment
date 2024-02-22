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
  selectedAnswer,
  handleAnswers
}: QuizState) => {
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
                      name={answer.value}
                      value={answer.value}
                      id="option-answer"
                      checked={selectedAnswer?.answer === String(answer.value)}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => [
                        handleAnswers(
                          data?.[currentQuestionIndex]?.id,
                          e.target.value,
                          answer.isRejection
                        )
                      ]}
                    />
                    <label htmlFor="">{answer.value}</label>
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
