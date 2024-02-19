'use client'

import styled from 'styled-components'

export const SquareButton = styled.button<{ color: string }>`
  width: 100%;
  height: 45px;
  padding: 15px, 30px, 15px, 30px;
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
    width: 156px;
  }
`
