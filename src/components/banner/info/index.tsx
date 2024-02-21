import {
  InfoBannerSection,
  InfoBannerContent,
  InfoBannerContentDetails,
  InfoBannerCover,
  InfoBannerCoverImage,
  InfoBannerCoverText,
  InfoBannerDescription,
  InfoBannerDescriptionSmall
} from './styles'
import { InfoBannerProps } from './types'
import Image from 'next/image'

export const InfoBanner = ({
  title,
  image,
  imageAlt,
  numberSection,
  sectionName,
  subtitle,
  text,
  imageStyle,
  direction,
  positionBottom,
  positionLeft,
  positionRight,
  positionNumberSection,
  widthText
}: InfoBannerProps) => (
  <InfoBannerSection>
    <InfoBannerContent>
      {title && <h2>{title}</h2>}
      <InfoBannerContentDetails direction={direction}>
        {image && (
          <InfoBannerCover direction={direction}>
            <InfoBannerCoverImage direction={direction}>
              <Image
                src={image}
                alt={imageAlt}
                width={370}
                height={445}
                priority
                style={imageStyle}
              />
            </InfoBannerCoverImage>
            <InfoBannerCoverText positionNumberSection={positionNumberSection} positionRight={positionRight} direction={direction}>
              <p>{numberSection}</p>
            </InfoBannerCoverText>
          </InfoBannerCover>
        )}
        <InfoBannerDescription positionLeft={positionLeft} positionRight={positionRight} positionBottom={positionBottom} direction={direction}>
          {sectionName && (
            <div>
              <span>{sectionName}</span>
            </div>
          )}
          <InfoBannerDescriptionSmall widthText={widthText}>
            <div>
              <label>{subtitle}</label>
            </div>
            <div>
              <p>{text}</p>
            </div>
          </InfoBannerDescriptionSmall>
        </InfoBannerDescription>
      </InfoBannerContentDetails>
    </InfoBannerContent>
  </InfoBannerSection>
)
