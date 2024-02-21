'use client'
import { Button } from '@/components/button'
import {
  HeroBannerSection,
  HeroBannerImage,
  HeroBannerContent,
  HeroBannerHolder
} from './styles'
import Image from 'next/image'
import { HeroBannerProps } from './types'

export const HeroBanner = ({ imageStyle, onClick }: HeroBannerProps) => {
  return (
    <HeroBannerSection data-testid="hero-content">
      <HeroBannerHolder>
        <HeroBannerImage>
          <Image
            src="/assets/image-herobanner.webp"
            alt="Happy Man"
            width={1440}
            height={750}
            style={imageStyle}
            priority
          />
        </HeroBannerImage>
        <HeroBannerContent>
          <h1>
            Be good <br /> to yourself
          </h1>
          <p>
            We’re working around the clock to bring you a holistic <br />
            approach to your wellness. From top to bottom, inside and out.
          </p>
          <Button color="#7E0707" onClick={onClick} text="Take the quiz" />
        </HeroBannerContent>
      </HeroBannerHolder>
    </HeroBannerSection>
  )
}
