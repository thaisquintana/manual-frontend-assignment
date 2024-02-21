import { QuizAnswersProps, QuizProps } from '@/types'
import {
  Card,
  CardListOption,
  CardListOptions,
  CardListOptionsAnswers
} from './styles'

export const CardQuestion = ({ question, options }: QuizProps) => (
  <>
    <Card>
      <h3>{question}</h3>
    </Card>
    <div>
      <CardListOptions>
        {options?.map((answer: QuizAnswersProps) => {
          return (
            <CardListOptionsAnswers key={answer.value}>
              <div dangerouslySetInnerHTML={{ __html: answer.display }} />
              <CardListOption>
                <input
                  type="radio"
                  name={answer.value}
                  value={answer.value}
                  id="option-answer"
                />
                <label>{answer.value}</label>
              </CardListOption>
            </CardListOptionsAnswers>
          )
        })}
      </CardListOptions>
    </div>
  </>
)
