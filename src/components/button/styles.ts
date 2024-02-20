'use client'

import styled from 'styled-components'

export const SquareButton = styled.button<{ color: string }>`
  width: 100%;
  padding: 15px 30px;
  background-color: ${(props) => props.color};
  border: none;
  color: #fff;
  font-family: 'TT Norms Regular';
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }

  &:active {
    filter: saturate(180%);
  }

  @media (min-width: 768px) {
    width: 50%;
  }

  @media (min-width: 1440px) {
    padding: 15px 29px;
  }
`
