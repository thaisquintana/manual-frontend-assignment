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
  setSelectedAnswer,
  setRejectedEvaluation
}: QuizState) => {
  const handleChooseAnswer = (
    e: React.ChangeEvent<HTMLInputElement>,
    rejection: boolean
  ) => {
    setSelectedAnswer(e.target.value)
    setRejectedEvaluation(rejection)
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
                      name={data?.[currentQuestionIndex]?.type}
                      value={answer.value || selectedAnswer}
                      id="option-answer"
                      onChange={(e) =>
                        handleChooseAnswer(e, answer.isRejection)
                      }
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
