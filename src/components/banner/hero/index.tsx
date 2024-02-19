'use client'
import { Button } from '@/components/button'
import {
  HeroBannerBackDrop,
  HeroBannerImage,
  HeroBannerContent,
  HeroBannerHolder
} from './styles'
import Image from 'next/image'
import { CSSProperties } from 'react'

export const HeroBanner = (imageStyle: CSSProperties) => {
  const handleClick = () => {
    console.log('teste')
  }

  return (
    <HeroBannerBackDrop data-testid="hero-content">
      <HeroBannerHolder>
        <HeroBannerImage>
          <Image
            src="/assets/image-herobanner.webp"
            alt="Happy Man"
            width={1440}
            height={750}
            style={imageStyle}
          />
        </HeroBannerImage>
        <HeroBannerContent>
          <h1>
            Be good <br /> to yourself
          </h1>
          <p>
            We’re working around the clock to bring you a holistic approach to
            your wellness. From top to bottom, inside and out.
          </p>
          <Button color="#7E0707" onClick={handleClick} text="Take the quiz" />
        </HeroBannerContent>
      </HeroBannerHolder>
    </HeroBannerBackDrop>
  )
}
