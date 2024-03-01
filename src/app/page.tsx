'use client'

import { useQuery } from 'react-query'
import { HeroBanner } from '@/components/banner/hero'
import { InfoBanner } from '@/components/banner/info'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { ModalFullScreen } from '@/components/modal/modalFullScreen'
import { useEffect, useState } from 'react'
import { CardQuestion } from '@/components/quiz/cardQuestion'
import { QuizState, UserAnswerSelected } from '@/types'
import { SquareButton } from '@/components/button/styles'
import {
  CardQuestionButtons,
  CardResult
} from '@/components/quiz/cardQuestion/styles'

export default function Home() {
  const [showModal, setShowModal] = useState<boolean>(false)
  const [userAnswers, setUserAnswers] = useState<Array<UserAnswerSelected>>([])
  const [userSelectedAnswer, setUserSelectedAnswer] =
    useState<UserAnswerSelected>()
  const [showResult, setShowResult] = useState<boolean>(false)
  const [quiz, setQuiz] = useState([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0)
  const [hasRejection, setHasRejection] = useState<boolean>(false)
  useQuery<QuizState>({
    queryFn: async () => {
      const response = await fetch('http://localhost:3333/questions')
      const data = await response.json()
      setQuiz(data)
      return data?.data
    }
  })

  const handleShowModal = () => {
    setShowModal(true)
  }

  const closeModal = () => {
    setCurrentQuestionIndex(0)
    setShowResult(false)
    setShowModal(false)
    setUserAnswers([])
    setHasRejection(false)
    setUserSelectedAnswer({
      id: '',
      answer: '',
      isRejection: false
    })
  }

  const handleResultAndStep = () => {
    const hasRejectionValue = userAnswers.filter(
      (answers) => answers.isRejection === true
    )

    if (currentQuestionIndex === 2) {
      setShowResult(true)
    }

    if (hasRejectionValue?.length) {
      setHasRejection(true)
    }

    setCurrentQuestionIndex(currentQuestionIndex + 1)
    setUserSelectedAnswer({
      id: '',
      answer: '',
      isRejection: false
    })
  }

  const handleAnswers = (id: string, answer: string, isRejection: boolean) => {
    setUserSelectedAnswer({ id, answer, isRejection })

    if (id === userAnswers[currentQuestionIndex]?.id) {
      setUserAnswers((current) =>
        current.map((obj) => {
          if (obj.id === userAnswers[currentQuestionIndex].id) {
            return {
              ...obj,
              answer,
              isRejection
            }
          }
          return obj
        })
      )
    } else {
      return setUserAnswers((current) => [
        ...current,
        { id, answer, isRejection }
      ])
    }
  }

  useEffect(() => {
    const listAnswer = userAnswers.find(
      (answerObject) =>
        answerObject.id === userAnswers[currentQuestionIndex]?.id
    )
    if (listAnswer) {
      setUserSelectedAnswer(listAnswer)
    }
  }, [currentQuestionIndex, userAnswers])

  return (
    <>
      {showModal && (
        <ModalFullScreen showHeader cancelButton={() => closeModal()}>
          <div>
            {!showResult ? (
              <>
                <CardQuestion
                  data={quiz}
                  selectedAnswer={userSelectedAnswer}
                  currentQuestionIndex={currentQuestionIndex}
                  handleAnswers={handleAnswers}
                />
                <CardQuestionButtons>
                  <SquareButton
                    showButton={Boolean(currentQuestionIndex !== 0)}
                    color={'#6d8a83'}
                    onClick={() =>
                      setCurrentQuestionIndex(currentQuestionIndex - 1)
                    }
                  >
                    Previous
                  </SquareButton>
                  <SquareButton
                    showButton
                    color={'#0b3b3c'}
                    onClick={() => handleResultAndStep()}
                  >
                    {currentQuestionIndex === 2 ? 'See result' : 'Next'}
                  </SquareButton>
                </CardQuestionButtons>
              </>
            ) : (
              <CardResult>
                {hasRejection ? (
                  <div>
                    <p>
                      Unfortunately, we are unable to prescribe this medication
                      for you. This is because finasteride can alter the PSA
                      levels, which maybe used to monitor for cancer. You should
                      discuss this further with your GP or specialist if you
                      would still like this medication.
                    </p>
                  </div>
                ) : (
                  <>
                    <div>
                      <p>
                        Great news! We have the perfect treatment for your hair
                        loss. Proceed to{' '}
                        <a
                          href="https://www.manual.co/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          www.manual.co
                        </a>
                        , and prepare to say hello to your new hair!
                      </p>
                    </div>
                  </>
                )}
                <SquareButton
                  showButton
                  color={'#0b3b3c'}
                  onClick={() => closeModal()}
                >
                  Finish
                </SquareButton>
              </CardResult>
            )}
          </div>
        </ModalFullScreen>
      )}
      <Header />
      <HeroBanner onClick={() => handleShowModal()} />
      <InfoBanner
        sectionName={'Hair loss'}
        subtitle={'Hair loss needn’t be irreversible. We can help!'}
        text={
          'We’re working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside and out.'
        }
        title={'What we can help with'}
        image={'assets/image-hair-loss.webp'}
        imageAlt={'Hair loss Image'}
        numberSection={'01'}
        direction={'left'}
        positionBottom={183}
        positionNumberSection={-85}
        positionLeft={0}
        positionRight={317}
        widthText={372}
      />
      <InfoBanner
        sectionName={'Erecetile dysfunction'}
        subtitle={'Erections can be a tricky thing. But no need to feel down!'}
        text={
          'We’re working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside and out.'
        }
        image={'assets/image-ed-photo.webp'}
        imageAlt={'Man in peace'}
        numberSection={'02'}
        direction={'right'}
        positionBottom={147}
        positionNumberSection={90}
        positionLeft={289}
        positionRight={0}
        widthText={372}
      />
      <Footer />
    </>
  )
}
