import { render } from '@testing-library/react'
import ExpandableText from '../../src/components/ExpandableText'

describe('ExpandableText', () => {
  it('should render the full text if less then 255 charackters', () => {
    // Arrange
    render(<ExpandableText text='short text' />)
    // Act
    // Assert
  })

  it('should expand the text when the button is clicked', () => {
    // Arrange
    // Act
    // Assert
  })
})
