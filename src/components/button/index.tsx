import { ButtonDanger } from "./styles"

export const Button = () => {
  const handleClick = () => {
    console.log('teste')
  }

  return (
<ButtonDanger onClick={handleClick}>
    Take the quiz
  </ButtonDanger>
)
}


