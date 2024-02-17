import { SquareButton } from './styles'
import { ButtonProps } from './types'
export const Button = ({ color, onClick, text }: ButtonProps) => {
  return (
    <SquareButton onClick={onClick} color={color}>
      {text}
    </SquareButton>
  )
}
