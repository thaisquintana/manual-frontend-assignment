import { render, screen } from '@testing-library/react'
import { HeroBanner } from '.'
import userEvent from '@testing-library/user-event'

describe('<HeroBanner />', () => {
  it('should render correctly', () => {
    render(<HeroBanner />)
    expect(
      screen.getByRole('heading', { name: /Be good to yourself/i })
    ).toBeInTheDocument()
    expect(
      screen.getByText(
        'We’re working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside and out.'
      )
    ).toBeInTheDocument()
    expect(screen.getByTestId('hero-content')).toHaveStyle({
      'background-color': '#a5b79f'
    })
    expect(screen.getByTestId('hero-content')).toHaveStyle({
      'background-image': 'url("assets/image-herobanner.webp")'
    })
    const button = screen.getByText(/Take the quiz/i)
    userEvent.click(button)
  })
})
