import {
  FeatureList,
  FeatureListItem,
  FooterContent,
  FooterFeatures,
  FooterFeaturesList,
  FooterLogo,
  FeatureListSocial,
  FooterWaterMark
} from './styles'
import Image from 'next/image'

export const Footer = () => (
  <FooterContent>
    <FooterFeatures>
      <FooterLogo>
        <Image
          src="/assets/logo-manual.svg"
          alt="Logo Manual"
          width={75}
          height={75}
          priority
        />
      </FooterLogo>
      <FooterFeaturesList>
        <div>
          <label>Product</label>
          <FeatureList>
            <FeatureListItem>
              <a href="#" target="_blank" rel="noreferrer">
                Popular
              </a>
            </FeatureListItem>
            <FeatureListItem>
              <a href="#" target="_blank" rel="noreferrer">
                Trending
              </a>
            </FeatureListItem>
            <FeatureListItem>
              <a href="#" target="_blank" rel="noreferrer">
                Guided
              </a>
            </FeatureListItem>
            <FeatureListItem>
              <a href="#" target="_blank" rel="noreferrer">
                Products
              </a>
            </FeatureListItem>
          </FeatureList>
        </div>
        <div>
          <label>Company</label>
          <FeatureList>
            <FeatureListItem>
              <a href="#" target="_blank" rel="noreferrer">
                Press
              </a>
            </FeatureListItem>
            <FeatureListItem>
              <a href="#" target="_blank" rel="noreferrer">
                Mission
              </a>
            </FeatureListItem>
            <FeatureListItem>
              <a href="#" target="_blank" rel="noreferrer">
                Strategy
              </a>
            </FeatureListItem>
            <FeatureListItem>
              <a href="#" target="_blank" rel="noreferrer">
                About
              </a>
            </FeatureListItem>
          </FeatureList>
        </div>
        <div>
          <label>Info</label>
          <FeatureList>
            <FeatureListItem>
              <a href="#" target="_blank" rel="noreferrer">
                {' '}
                Support{' '}
              </a>
            </FeatureListItem>
            <FeatureListItem>
              <a href="#" target="_blank" rel="noreferrer">
                {' '}
                Custome Service{' '}
              </a>
            </FeatureListItem>
            <FeatureListItem>
              <a href="#" target="_blank" rel="noreferrer">
                Get started{' '}
              </a>
            </FeatureListItem>
          </FeatureList>
        </div>
        <div>
          <label>Follow us</label>
          <FeatureListSocial>
            <FeatureListItem>
              <a
                href="https://www.facebook.com/MenofManual"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="/assets/facebook.svg"
                  alt="facebook icon logo red"
                  width={24}
                  height={24}
                />
              </a>
            </FeatureListItem>
            <FeatureListItem>
              <a
                href="https://google.com/MenofManual"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="/assets/google.svg"
                  alt="Google icon logo red"
                  width={24}
                  height={24}
                />
              </a>
            </FeatureListItem>
            <FeatureListItem>
              <a
                href="https://twitter.com/MenofManual"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="/assets/twitter.svg"
                  alt="Twitter icon logo red"
                  width={24}
                  height={24}
                />
              </a>
            </FeatureListItem>
          </FeatureListSocial>
        </div>
      </FooterFeaturesList>
    </FooterFeatures>
    <FooterWaterMark>
      <hr />
      <p>© 2021 Manual. All rights reserverd</p>
    </FooterWaterMark>
  </FooterContent>
)
