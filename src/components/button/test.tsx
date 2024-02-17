import { fireEvent, render, screen } from '@testing-library/react'
import { Button } from '.'

describe('<Button />', () => {
  const handleClick = jest.fn()

  it('should render correctly', () => {
    render(
      <Button text="Take the quiz" color="#7E0707" onClick={handleClick} />
    )

    expect(
      screen.getByRole('button', { name: /Take the quiz/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('button')).toHaveStyle({
      'background-color': '#7E0707'
    })
  })

  it('should trigger handleClick when user clicks on button', async () => {
    render(
      <Button text="Take the quiz" color="#7E0707" onClick={handleClick} />
    )
    const button = screen.getByRole('button', { name: /Take the quiz/i })
    fireEvent.click(button)
    expect(handleClick).toHaveBeenCalled()
  })
})
