'use client'

import { useQuery } from 'react-query'
import { HeroBanner } from '@/components/banner/hero'
import { InfoBanner } from '@/components/banner/info'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { ModalFullScreen } from '@/components/modal/modalFullScreen'
import { useState } from 'react'
import { CardQuestion } from '@/components/quiz/cardQuestion'
import { QuizProps } from '@/types'

export default function Home() {
  const [enabled] = useState(false)
  const [showModal, setShowModal] = useState<boolean>(false)
  const [questions, setQuestions] = useState<QuizProps>()
  const [currentQuestion] = useState<number>(0)
  const [showResult] = useState()

  const handleShowModal = () => {
    setShowModal(true)
  }

  const { refetch } = useQuery({
    queryFn: async () => {
      enabled
      const response = await fetch('http://localhost:3333/questions')
      const data = await response.json()
      return setQuestions(data)
    }
  })

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <>
      {showModal && (
        <ModalFullScreen showHeader cancelButton={() => closeModal()}>
          <div>
            {!showResult ? (
              <CardQuestion
                question={questions?.[currentQuestion].question}
                type={questions?.[currentQuestion].type}
                options={questions?.[currentQuestion].options}
              />
            ) : (
              <div>show questions</div>
            )}
          </div>
        </ModalFullScreen>
      )}
      <Header />
      <HeroBanner onClick={() => [handleShowModal(), () => refetch()]} />
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
