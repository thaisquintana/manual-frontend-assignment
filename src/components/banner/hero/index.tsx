import { Button } from '@/components/button'
import { Content } from './styles'

export const HeroBanner = () => {
  const handleClick = () => {
    console.log('teste')
  }

  return (
    <Content data-testid="hero-content">
      <h1>Be good to yourself</h1>
      <p>
        We’re working around the clock to bring you a holistic approach to your
        wellness. From top to bottom, inside and out.
      </p>
      <Button color="#7E0707" onClick={handleClick} text="Take the quiz" />
    </Content>
  )
}
