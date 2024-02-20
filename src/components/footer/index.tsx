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
        />
      </FooterLogo>
      <FooterFeaturesList>
        <div>
          <label>Product</label>
          <FeatureList>
            <FeatureListItem>Popular</FeatureListItem>
            <FeatureListItem>Trending</FeatureListItem>
            <FeatureListItem>Guided</FeatureListItem>
            <FeatureListItem>Products</FeatureListItem>
          </FeatureList>
        </div>
        <div>
          <label>Company</label>
          <FeatureList>
            <FeatureListItem>Press</FeatureListItem>
            <FeatureListItem>Mission</FeatureListItem>
            <FeatureListItem>Strategy</FeatureListItem>
            <FeatureListItem>About</FeatureListItem>
          </FeatureList>
        </div>
        <div>
          <label>Info</label>
          <FeatureList>
            <FeatureListItem>Support</FeatureListItem>
            <FeatureListItem>Custome Service</FeatureListItem>
            <FeatureListItem>Get started</FeatureListItem>
          </FeatureList>
        </div>
        <div>
          <label>Follow us</label>
          <FeatureListSocial>
            <FeatureListItem>
              <Image
                src="/assets/facebook.svg"
                alt="facebook icon logo red"
                width={24}
                height={24}
              />
            </FeatureListItem>
            <FeatureListItem>
              <Image
                src="/assets/google.svg"
                alt="Google icon logo red"
                width={24}
                height={24}
              />
            </FeatureListItem>
            <FeatureListItem>
              <Image
                src="/assets/twitter.svg"
                alt="Twitter icon logo red"
                width={24}
                height={24}
              />
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
