import { render, screen } from '@testing-library/react'
import UserAccount from '../../src/components/accounts/UserAccount'
import { User } from '../../src/entities/entities'

describe('UserAccount', () => {
  it('renders the user profile name', () => {
    const user: User = { id: 1, name: 'arswe' }
    render(<UserAccount user={user} />)

    expect(screen.getByText(user.name)).toBeInTheDocument()
  })
})
