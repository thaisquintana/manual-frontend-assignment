'use client'

import styled from 'styled-components'

export const HeroBannerBackDrop = styled.div`
  width: 100%;
  height: 615px;
  background-color: #9eb599;

  @media (min-width: 320px) {
    height: 580px;
  }

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 750px;
    align-items: baseline;
    background: conic-gradient(
      from 0.5turn at 50% 30%,
      #a5b7a1,
      237deg,
      #9fb69c,
      #a7bea4,
      289deg,
      #b4c8b1
    );
  }
`

export const HeroBannerHolder = styled.div`
  display: flex;
  flex-direction: column-reverse;

  @media (min-width: 1920px) {
    display: flex;
    justify-content: center;
    max-width: 1440px;
    margin: 0 auto;
    width: 100%;
  }
`

export const HeroBannerImage = styled.div`
  img {
    width: 100%;
    height: auto;
  }

  @media (min-width: 768px) {
    order: 2;
  }
`

export const HeroBannerContent = styled.div`
  width: 100%;
  // height: auto;
  padding: 120px 40px;
  font-family: 'TT Norms Regular';
  color: #0b3b3c;

  h1 {
    font-size: 40px;
    line-height: 40px;
    br {
      display: none;
    }
  }

  p {
    font-size: 18px;
    line-height: 30px;
    margin-top: 30px;
    letter-spacing: 0.2px;
  }

  button {
    margin-top: 40px;
  }

  // @media (min-width: 320px) {
  //   background-image: url('assets/image-herobanner.webp');
  //   background-size: cover;
  //   background-position: center bottom;
  //   background-repeat: no-repeat;
  // }

  @media (min-width: 450px) {
    // background-size: calc(100% / 2);

    h1 {
      font-size: 50px;
      line-height: 50px;
    }
  }

  @media (min-width: 768px) {
    // padding: 103px 0 0 40px;
    // background-size: contain;
    // background-position: right bottom;
    order: 1;
    position: absolute;
    left: 98px;
    top: 56px;

    h1 {
      font-size: 60px;
      line-height: 50px;
      br {
        display: block;
      }
    }
    p {
      font-size: 18px;
      line-height: normal;
      width: 46%;
    }
    button {
      margin-bottom: 32px;
    }
  }

  @media (min-width: 992px) and (max-width: 1440px) {
    // background-image: url('assets/image-herobanner.webp');
    // background-size: contain;
    // background-position: right;
    // padding: 189px 0 0 138px;
    // height: 750px;
    h1 {
      font-size: 90px;
      line-height: 90px;
    }
    p {
      width: 37%;
      line-height: 30px;
    }

    button {
      margin-top: 30px;
      margin-bottom: 0;
    }
  }

  @media (min-width: 1920px) {
    padding-top: 189px;
    padding-left: 40px;
    max-width: 1440px;
    margin: 0 auto;
    height: 750px;
    left: 240px;
    h1 {
      width: 23%;
      line-height: 60px;
    }
    p {
      width: 36%;
      line-height: 30px;
    }
  }
`
