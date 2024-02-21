'use client'

import styled from 'styled-components'

export const ModalContainer = styled.div`
  background-color: #fff;
  position: absolute;
  width: 100%;
  z-index: 3;
  height: 133vw;
`

export const ModalHeader = styled.div`
  display: flex;
  justify-content: right;
  margin: 60px auto 40px;
  width: 50%;
`

export const ModalButton = styled.button`
  border: none;
  background-color: transparent;
  border-radius: 8px;
  cursor: pointer;
  padding: 10px;
`

export const ModalBody = styled.div`
  margin: 0 auto;
  width: 50%;
`

export const ModalFooter = styled.div``
