import { ReactElement } from 'react'

export type ModalProps = {
  showFooter?: boolean
  showHeader?: boolean
  cancelButton: () => void
  exitButton?: boolean
  children: ReactElement
}
