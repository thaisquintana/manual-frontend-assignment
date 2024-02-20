'use client'

import styled from 'styled-components'

export const HeaderContent = styled.div`
  position: absolute;
  top: 30px;
  left: 40px;

  @media (min-width: 1200px) {
    left: 138px;
  }

  @media (min-width: 1920px) {
    left: 280px;
    max-width: 1440px;
    margin: 0 auto;
  }
`
