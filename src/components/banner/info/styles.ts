'use client'

import styled from 'styled-components'

export const InfoBannerSection = styled.section`
  background-color: #fff;

  @media (min-width: 992px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  @media (min-width: 1441px) {
    max-width: 1440px;
    margin: 0 auto;
  }
`

export const InfoBannerContent = styled.div`
  text-align: center;
  font-family: TT Norms Regular;

  h2 {
    letter-spacing: 0.03px;
    color: #0b3b3c;
    margin-top: 120px;
    margin-bottom: 54px;
  }

  @media (min-width: 768px) {
    h2 {
      margin-top: 60px;
      margin-bottom: 20px;
      font-size: 40px;
      font-weight: 400;
      line-height: 60px;
    }
  }

  @media (min-width: 1441px) {
    padding-top: 80px;
    max-width: 1440px;
    margin: 0 auto;
  }

  @media (min-width: 1920px) {
    h2 {
      margin-top: 0;
      margin-bottom: 40px;
    }
  }
`

export const InfoBannerContentDetails = styled.div<{ direction: string }>`
  width: 100%;
  padding: 0 16px;

  @media (min-width: 768px) {
    position: relative;
    display: flex;
    justify-content: center;
    padding: 0 40px;
  }

  @media (min-width: 992px) {
    justify-content: ${(props) => (props.direction === 'left' ? 'right' : 'space-between')};
    align-items: center;
    width: 100%;
    padding: 0;
  }
`

export const InfoBannerCover = styled.div<{ direction: string }>`
  order: ${(props) => (props.direction === 'left' ? 1 : 2)};

  @media (min-width: 768px) {
    display: flex;
    position: relative;
    z-index: 1;
    align-items: center;
  }
`
export const InfoBannerCoverImage = styled.div<{ direction: string }>`
  img {
    padding: 0 16px;
    width: 70%;
    height: 100%;
  }

  @media (min-width: 540px) {
   img {
    width: 50%;
   }
  }

  @media (min-width: 768px) {
    order: ${(props) => (props.direction === 'left' ? 1 : 2)};
    img {
      padding: 0;
      width: 100%;
    }
  }
`
export const InfoBannerCoverText = styled.div<{ positionNumberSection: number, positionRight: number, direction: string }>`
  display: none;

  @media (min-width: 992px) {
    display: block;
    position: relative;
    left: -100px;
    z-index: 0;
    p {
      text-align: left;
      font-family: TT Norms Regular;
      font-size: 450px;
      color: #f3f7f4;
      font-weight: 600;
      letter-spacing: 0.3px;
    }
    z-index: -1;
    left: ${(props) => props.positionNumberSection === 0 ? 'inherit' : `${props.positionNumberSection}px`};
    order: ${(props) => props.direction === 'left' ? 2 : 1};
  }

  @media (min-width: 1024px) {
    right: ${(props) => props.positionRight === 0 ? 'inherit' : `${props.positionRight}px`};
    left: ${(props) => props.positionNumberSection === 0 ? 'inherit' : `${props.positionNumberSection}px`};

  }
`
export const InfoBannerDescription = styled.div<{ positionLeft: number, positionRight: number, positionBottom: number, direction: string }>`
  font-family: TT Norms;
  text-align: left;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 22px 22px 60px;
  order: ${(props) => (props.direction === 'left' ? 2 : 1)};
  span {
    font-size: 10px;
    font-weight: 700;
    line-height: 15px;
    letter-spacing: 0.15em;
    color: #6d8a83;
    text-transform: uppercase;
  }
  @media (min-width: 992px) {
    position: absolute;
    z-index: 2;
    padding: 0 16px;
  }

  @media (min-width: 1440px) and (max-width: 1920px) {
    bottom: ${(props) => props.positionBottom === 0 ? 'inherit' : `${props.positionBottom}px`};
  }
`
export const InfoBannerDescriptionSmall = styled.div<{ widthText: number }>`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  label {
    font-size: 28px;
    line-height: 40px;
    letter-spacing: -0.03px;
    color: #0b3b3c;
  }
  p {
    font-size: 18px;
    line-height: 30px;
    color: #0b3b3c;
    letter-spacing: -0.2px;
  }

  @media (min-width: 768px) {
    width: 89%;
  }
  @media (min-width: 992px) {
    width: ${(props) => props.widthText}px;
  }
`
