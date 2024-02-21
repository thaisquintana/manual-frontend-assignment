'use client'

import { HeroBanner } from '@/components/banner/hero'
import { InfoBanner } from '@/components/banner/info'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { ModalFullScreen } from '@/components/modal/modalFullScreen'
import { useState } from 'react'

export default function Home() {
  const [showModal, setShowModal] = useState<boolean>(false)

  const handleShowModal = () => {
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <>
      {showModal && (
        <ModalFullScreen showHeader cancelButton={() => closeModal()} />
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
