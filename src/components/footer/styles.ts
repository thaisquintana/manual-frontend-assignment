'use client'

import styled from 'styled-components'

export const FooterContent = styled.footer`
  width: 100%;
  height: auto;
  background-color: #e8efe9;
  font-family: TT Norms Regular;
  font-weight: 400;

  @media (min-width: 768px) {
    height: 440px;
    display: flex;
    flex-direction: column;
    justify-content: end;
    margin-top: 40px;
  }
`

export const FooterFeatures = styled.div`
  margin: 0 auto;
  width: 100%;
  height: auto;

  @media (min-width: 768px) {
    max-width: 1440px;
    width: 680px;
    height: 251px;
    display: flex;
    flex-direction: row;
    gap: 100px;
  }

  @media (min-width: 1200px) {
    width: 1164px;
    gap: 0;
  }
`

export const FooterLogo = styled.div`
  width: 100%;
  text-align: center;
  padding: 40px 0;

  @media (min-width: 768px) {
    width: 25%;
    padding: 0;
    text-align: left;
  }

  @media (min-width: 1200px) {
    width: 50%;
  }
`

export const FooterFeaturesList = styled.section`
  width: 100%;
  text-align: center;

  label {
    font-family: TT Norms Bold;
    font-size: 10px;
    font-weight: 700;
    line-height: 15px;
    letter-spacing: 0.15px;
    text-transform: uppercase;
    color: #0b3b3c;
  }

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    text-align: left;
  }
`

export const FeatureList = styled.ul`
  list-style: none;
  padding: 10px 0 40px;

  @media (min-width: 768px) {
    padding: 20px 0 0 0;
  }
`

export const FeatureListSocial = styled(FeatureList)`
  display: flex;
  gap: 20px;
  justify-content: center;

  li {
    a {
      &:hover {
        filter: saturate(0.5);
      }
    }
  }

  @media (min-width: 768px) {
    justify-content: initial;
  }
`

export const FeatureListItem = styled.li`
  font-family: TT Norms Regular;
  font-size: 16px;
  font-weight: 400;
  line-height: 40px;
  letter-spacing: 0.3px;
  text-align: center;
  color: #0b3b3c;

  a {
    text-decoration: none;
    color: #0b3b3c;
    &:hover {
      filter: contrast(0.5);
    }
  }

  @media (min-width: 768px) {
    text-align: left;
  }
`

export const FooterWaterMark = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  hr {
    border: 1px solid #bdcdc5;
    margin: 0 auto;
    width: 80%;
  }

  p {
    margin: 20px 0;
    color: #6d8a83;
    font-size: 16px;
    line-height: 30px;
  }

  @media (min-width: 768px) {
    max-width: 1440px;

    hr {
      width: 680px;
    }
  }

  @media (min-width: 1200px) {
    hr {
      width: 1164px;
    }
  }
`
