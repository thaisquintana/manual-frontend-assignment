'use client'

import styled from 'styled-components'

export const FooterContent = styled.footer`
  width: 100%;
  height: 440px;
  background-color: #e8efe9;
  display: flex;
  flex-direction: column;
  font-family: TT Norms Regular;
  font-weight: 400;
  justify-content: end;
`

export const FooterFeatures = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  width: 1164px;
  height: 251px;
  display: flex;
  flex-direction: row;
`

export const FooterLogo = styled.div`
  width: 50%;
`

export const FooterFeaturesList = styled.section`
  width: 771px;
  display: flex;
  justify-content: space-between;
  height: 215px;
  align-items: baseline;
  gap: 25px;

  label {
    font-family: TT Norms Bold;
    font-size: 10px;
    font-weight: 700;
    line-height: 15px;
    letter-spacing: 0.15px;
    text-align: left;
    text-transform: uppercase;
    color: #0b3b3c;
  }
`

export const FeatureList = styled.ul`
  list-style: none;
  padding-left: 0;
  padding-top: 20px;
`

export const FeatureListSocial = styled(FeatureList)`
  display: flex;
  gap: 20px;
`

export const FeatureListItem = styled.li`
  font-family: TT Norms Regular;
  font-size: 16px;
  font-weight: 400;
  line-height: 40px;
  letter-spacing: 0.3px;
  text-align: left;
  color: #0b3b3c;
`

export const FooterWaterMark = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  hr {
    border: 1px solid #bdcdc5;
    width: 1164px;
    margin: 0 auto;
  }

  p {
    margin: 20px 0;
    color: #6d8a83;
    font-size: 18px;
    line-height: 30px;
  }
`
