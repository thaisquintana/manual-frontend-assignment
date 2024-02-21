import {
  ModalBody,
  ModalContainer,
  ModalFooter,
  ModalHeader,
  ModalButton
} from './styles'
import { ModalProps } from './types'
import Image from 'next/image'

export const ModalFullScreen = ({
  showFooter,
  showHeader,
  children,
  exitButton = true,
  cancelButton
}: ModalProps) => (
  <ModalContainer>
    {showHeader && (
      <ModalHeader>
        {exitButton && (
          <ModalButton onClick={cancelButton}>
            <Image
              src="/assets/close-icon.svg"
              alt="close-icon"
              width={24}
              height={24}
            />
          </ModalButton>
        )}
      </ModalHeader>
    )}
    <ModalBody>{children}</ModalBody>
    {showFooter && (
      <ModalFooter>
        <p>final</p>
      </ModalFooter>
    )}
  </ModalContainer>
)
