import { HeroBanner } from '@/components/banner/hero'
import { InfoBanner } from '@/components/banner/info'
import { Header } from '@/components/header'

export default function Home() {
  return (
    <>
      <Header />
      <HeroBanner />
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
      />
    </>
  )
}
