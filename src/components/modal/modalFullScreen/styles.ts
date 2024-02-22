'use client'

import styled from 'styled-components'

export const ModalContainer = styled.div`
  background-color: #fff;
  position: fixed;
  width: 100%;
  z-index: 3;
  height: 100%;
  overflow: auto;
  @media (min-width: 992px) {
    height: 100vw;
    overflow: hidden;
  }
`

export const ModalHeader = styled.div`
  display: flex;
  justify-content: right;
  width: 100%;
  padding: 16px;

  @media (min-width: 992px) {
    margin: 60px auto 40px;
    width: 50%;
  }
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
  width: 100%;
  padding: 0 16px;

  @media (min-width: 992px) {
    width: 50%;
  }
`

export const ModalFooter = styled.div``
