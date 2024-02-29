import { render, screen } from '@testing-library/react'
import ExpandableText from '../../src/components/ExpandableText'

describe('ExpandableText', () => {
  it('should render the full text if less then 255 charackters', () => {
    const text = 'short text'
    render(<ExpandableText text={text} />)
    expect(screen.getByText(text)).toBeInTheDocument()
  })

  it('should truncate text if longer then 255 charackters', () => {
    const text = 'a'.repeat(256)
    render(<ExpandableText text={text} />)
    const truncatedText = `${text.slice(0, 255)}...`
    expect(screen.getByText(truncatedText)).toBeInTheDocument()
    const button = screen.getByRole('button')
    expect(button).toHaveTextContent(/more/i)
  })
})
