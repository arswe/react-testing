import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TermsAndConditions from '../../src/components/TermsAndConditions'

describe('TermsAndConditions', () => {
  const renderComponent = () => {
    render(<TermsAndConditions />)

    return {
      heading: screen.getByRole('heading'),
      checkbox: screen.getByRole('checkbox'),
      button: screen.getByRole('button'),
    }
  }

  it('should render with currect text adn initial state', () => {
    const { heading, checkbox, button } = renderComponent()

    expect(heading).toHaveTextContent('Terms & Conditions')
    expect(checkbox).not.toBeChecked()
    expect(button).toBeDisabled()
  })

  
})
