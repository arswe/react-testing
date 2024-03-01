import { render, screen } from '@testing-library/react'
import UserList from '../../src/components/accounts/UserList'
import { User } from '../../src/entities/entities'

describe('UserList', () => {
  it('renders no users when the user array is empty', () => {
    
    render(<UserList users={[]} />)
    expect(screen.getByText(/no users available/i)).toBeInTheDocument()
  })

  it('renders a list of users', () => {
    const users: User[] = [
      { id: 1, name: 'arswe' },
      { id: 2, name: 'john' },
    ]
    render(<UserList users={users} />)

    users.forEach((user) => {
      const link = screen.getByRole('link', { name: user.name })
      expect(link).toBeInTheDocument()
      expect(link).toHaveAttribute('href', `/users/${user.id}`)
    })
  })
})
