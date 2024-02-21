'use client'

import styled from 'styled-components'

export const Card = styled.div`
  font-weight: 400;
  background-color: #fff;

  h3 {
    font-family: TT Norms Bold;
    font-size: 18px;
    letter-spacing: 0.3px;
    color: #0b3b3c;
    font-weight: 700;
    text-align: center;
  }
`

export const CardListOptions = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  margin-top: 80px;
`
export const CardListOptionsAnswers = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;

  label {
    font-family: TT Norms Regular;
    font-size: 16px;
    font-weight: 400;
    padding-left: 10px;
    color: #0b3b3c;
  }

  input[type='radio']#option-answer {
    accent-color: #6d8a83;
  }
`

export const CardListOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`
