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

export const CardListOptions = styled.ul<{ templateColumns: number }>`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  margin-top: 50px;
  text-align: left;
  padding: 0 16px;

  @media (min-width: 992px) {
    padding: 0;
    margin-top: 80px;
    text-align: center;
    grid-template-columns: ${(props) =>
      props.templateColumns > 2 ? '1fr 1fr 1fr' : '1fr 1fr'};
  }
`

export const CardListOptionsAnswers = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  gap: 10px;

  label {
    font-family: TT Norms Regular;
    font-size: 16px;
    font-weight: 400;
    padding-left: 10px;
    color: #0b3b3c;
  }

  input {
    cursor: pointer;
    &[type='radio']#option-answer {
      accent-color: #0a886a;
    }
  }

  img {
    width: 80%;
  }

  @media (min-width: 992px) {
    justify-content: center;

    img {
      width: 70%;
    }
  }
`

export const CardListOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`

export const CardQuestionButtons = styled.div`
  display: flex;
  justify-content: end;
  height: 50px;
  margin: 60px 0 60px 10px;
  gap: 20px;

  button {
    width: 100%;
  }

  @media (min-width: 992px) {
    button {
      width: 30%;
    }
  }
`

export const CardResult = styled.div`
  width: 100%;
  text-align: left;

  p {
    margin: 40px 0;
    letter-spacing: 0.3px;
    line-height: 30px;
    font-family: TT Norms Regular;
    color: #0b3b3c;
    font-weight: 400;
  }

  a {
    color: #0a886a;
  }

  @media (min-width: 1200px) {
    button {
      float: right;
    }
  }
`
