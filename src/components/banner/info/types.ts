import { CSSProperties } from 'react'

export type InfoBannerProps = {
  title?: string
  image?: string
  imageAlt: string
  numberSection?: string
  sectionName?: string
  subtitle: string
  text: string
  imageStyle?: CSSProperties
  direction: string
  positionBottom: number
  positionLeft: number
  positionRight: number
  widthText: number
  positionNumberSection: number
}
