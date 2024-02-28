import { render, screen } from '@testing-library/react'
import Greet from '../../src/components/shared/Greet'

describe('Greet', () => {
  it('should render  helo with the name when name is provided ', () => {
    render(<Greet name='World' />)
    const heading = screen.getByRole('heading')
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent(/hello world/i)
  })

  it('should render login button when name is not provided', () => {
    render(<Greet />)
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent(/hello world/i)
  })
})
