'use client'

import styled from 'styled-components'

export const SquareButton = styled.button<{ color: string }>`
  width: 156px;
  height: 45px;
  padding: 15px, 30px, 15px, 30px;
  background-color: ${(props) => props.color};
  margin-top: 20px;
  border: none;
  color: #fff;
  font-family: 'TT Norms Regular';
  font-weight: 700;
  text-transform: uppercase;
`
