import { render, screen } from '@testing-library/react'
import { HeroBanner } from '.'

describe('<HeroBanner />', () => {
  it('should render correctly', () => {
    const { container } = render(<HeroBanner />)

    expect(
      screen.getByRole('heading', { name: /Be good to yourself/i })
    ).toBeInTheDocument()
    expect(
      screen.getByText(
        'We’re working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside and out.'
      )
    ).toBeInTheDocument()
    expect(container.firstChild).toHaveStyle({ 'background-color': '#a5b79f' })
    expect(screen.getByTestId('hero-content')).toHaveStyle({
      'background-image': 'url("assets/image-herobanner.webp")'
    })
  })
})
