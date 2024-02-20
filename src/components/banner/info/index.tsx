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
  direction,
  imageStyle
}: InfoBannerProps) => (
  <InfoBannerSection>
    <InfoBannerContent>
      {title && <h2>{title}</h2>}
      <InfoBannerContentDetails>
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
            <InfoBannerCoverText direction={direction}>
              <p>{numberSection}</p>
            </InfoBannerCoverText>
          </InfoBannerCover>
        )}
        <InfoBannerDescription direction={direction}>
          {sectionName && (
            <div>
              <span>{sectionName}</span>
            </div>
          )}
          <InfoBannerDescriptionSmall direction={direction}>
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
