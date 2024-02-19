import { render, screen, waitFor } from '@testing-library/react'
import { HeroBanner } from '.'
import userEvent from '@testing-library/user-event'

describe('<HeroBanner />', () => {
  it('should render correctly', async () => {
    const encodedUrl = encodeURIComponent('/assets/image-herobanner.webp')
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
      background:
        'conic-gradient(from 0.5turn at 50% 30%, #a5b7a1, 237deg, #9fb69c,#a7bea4, 289deg, #b4c8b1)'
    })
    await waitFor(() => {
      expect(screen.getByRole('img')).toHaveAttribute(
        'src',
        `/_next/image?url=${encodedUrl}&w=3840&q=75`
      )
    })

    const button = screen.getByText(/Take the quiz/i)
    userEvent.click(button)
  })
})
