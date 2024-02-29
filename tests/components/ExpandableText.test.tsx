import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ExpandableText from '../../src/components/ExpandableText'

describe('ExpandableText', () => {
  const limit = 255
  const longText = 'a'.repeat(limit + 1)
  const truncatedText = longText.substring(0, limit) + '...'

  it('should render the full text if less then 255 charackters', () => {
    const text = 'short text'
    render(<ExpandableText text={text} />)
    expect(screen.getByText(text)).toBeInTheDocument()
  })

  it('should truncate text if longer then 255 charackters', () => {
    render(<ExpandableText text={longText} />)
    expect(screen.getByText(truncatedText)).toBeInTheDocument()
    const button = screen.getByRole('button')
    expect(button).toHaveTextContent(/more/i)
  })

  it('should expand text when show more button is clicked', async () => {
    render(<ExpandableText text={longText} />)
    const button = screen.getByRole('button')
    const user = userEvent.setup()
    await user.click(button)

    expect(screen.getByText(longText)).toBeInTheDocument()
    expect(button).toHaveTextContent(/less/i)
  })
})
