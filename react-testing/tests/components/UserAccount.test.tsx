import { render, screen } from '@testing-library/react'
import UserAccount from '../../src/components/accounts/UserAccount'
import { User } from '../../src/entities/entities'

describe('UserAccount', () => {
  it('renders the user profile name', () => {

    const user: User = { id: 1, name: 'arswe' }
  
    render(<UserAccount user={user} />)

    expect(screen.getByText(user.name)).toBeInTheDocument()
  })

  it('renders the edit button if is admin', () => {
    const user: User = { id: 1, name: 'arswe', isAdmin: true }
    render(<UserAccount user={user} />)

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent(/edit/i)
  })

  it('not renders the edit button if  user is not admin', () => {

    const user: User = { id: 1, name: 'arswe' }
    render(<UserAccount user={user} />)
    
    const button = screen.queryByRole('button')
    expect(button).not.toBeInTheDocument()
  })
})
