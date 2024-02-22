import { SquareButton } from './styles'
import { ButtonProps } from './types'
export const Button = ({
  color,
  onClick,
  text,
  showButton = true
}: ButtonProps) => {
  return (
    <SquareButton onClick={onClick} color={color} showButton={showButton}>
      {text}
    </SquareButton>
  )
}
