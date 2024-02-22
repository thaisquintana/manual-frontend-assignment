'use client'

import styled from 'styled-components'

export const SquareButton = styled.button<{
  color: string
  showButton: boolean
}>`
  width: 100%;
  padding: 15px 30px;
  display: ${(props) => (props.showButton === true ? 'block' : 'none')};
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

  @media (min-width: 1200px) {
    width: 156px;
    height: 45px;
    padding: 0;
  }
`
