import { render } from '@testing-library/react'
import { HeroBanner } from '.'

describe('<HeroBanner />', () => {
  it('should render the colors correctly', () => {
    // renderiza o component
    const { container } = render(<HeroBanner />)

    // verifica se o background-color está correto
    expect(container.firstChild).toHaveStyle({ 'background-color': '#acc3a9' })
  })
})
