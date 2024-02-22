'use client'

import { useQuery } from 'react-query'
import { HeroBanner } from '@/components/banner/hero'
import { InfoBanner } from '@/components/banner/info'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { ModalFullScreen } from '@/components/modal/modalFullScreen'
import { useState } from 'react'
import { CardQuestion } from '@/components/quiz/cardQuestion'
import { QuizState } from '@/types'
import { SquareButton } from '@/components/button/styles'
import { CardQuestionButtons } from '@/components/quiz/cardQuestion/styles'

export default function Home() {
  const [showModal, setShowModal] = useState<boolean>(false)
  const [quiz, setQuiz] = useState()
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0)
  const { isLoading } = useQuery<QuizState>({
    queryFn: async () => {
      const response = await fetch('http://localhost:3333/questions')
      const data = await response.json()
      setQuiz(data)
      return data?.data
    }
  })

  const [selectedAnswer, setSelectedAnswer] = useState('')

  console.log(selectedAnswer)
  const [showResult, setShowResult] = useState<boolean>(false)

  const handleShowModal = () => {
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  if (isLoading) {
    return null
  }

  const handleResultAndStep = () => {
    if (currentQuestionIndex === 2) {
      setShowResult(true)
    }
    setCurrentQuestionIndex(currentQuestionIndex + 1)
  }

  return (
    <>
      {showModal && (
        <ModalFullScreen showHeader cancelButton={() => closeModal()}>
          <div>
            {!showResult ? (
              <>
                <CardQuestion
                  data={quiz}
                  currentQuestionIndex={currentQuestionIndex}
                  setSelectedAnswer={setSelectedAnswer}
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
              <div>
                show questions
                <SquareButton
                  showButton
                  color={'#0b3b3c'}
                  onClick={() => [
                    setCurrentQuestionIndex(0),
                    setShowResult(false)
                  ]}
                >
                  Do again
                </SquareButton>
              </div>
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
