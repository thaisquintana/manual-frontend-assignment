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
    height: auto;
    width: 100%;
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

  @media (min-width: 1200px) {
    height: 100%;
    max-height: 750px;
  }
`

export const HeroBannerHolder = styled.div`
  display: flex;
  flex-direction: column-reverse;

  @media (min-width: 768px) {
    flex-direction: initial;
  }

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
    height: 100%;
    object-fit: cover;
    object-position: right center;
  }
`

export const HeroBannerContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: auto;
  gap: 20px;
  padding: 120px 40px 0;
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

  @media (min-width: 768px) {
    position: absolute;
    left: 40px;
    top: 100px;
    padding: 0;
    width: 46%;

    h1 {
      font-size: 50px;
      line-height: 45px;
      br {
        display: block;
      }
    }
    p {
      line-height: normal;
      margin-top: 10px;
    }
    button {
      margin-top: 10px;
    }
  }

  @media (min-width: 992px) {
    top: 120px;
    gap: 10px;

    h1 {
      font-size: 90px;
      line-height: 90px;
    }
    p {
      line-height: 30px;
      margin-top: 30px;
    }

    button {
      margin-top: 30px;
    }
  }

  @media (min-width: 1920px) {
    left: 239px;
  }
`
