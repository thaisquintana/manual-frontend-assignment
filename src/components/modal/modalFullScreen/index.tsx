import { ModalBody, ModalContainer, ModalFooter, ModalHeader } from './styles'
import { ModalProps } from './types'

export const ModalFullScreen = ({
  showFooter,
  showHeader,
  exitButton = true,
  cancelButton
}: ModalProps) => (
  <ModalContainer>
    {showHeader && (
      <ModalHeader>
        {exitButton && <button onClick={cancelButton}>X</button>}
      </ModalHeader>
    )}
    <ModalBody>
      <p>oi</p>
    </ModalBody>
    {showFooter && (
      <ModalFooter>
        <p>final</p>
      </ModalFooter>
    )}
  </ModalContainer>
)
