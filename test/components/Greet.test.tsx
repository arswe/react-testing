import '@testing-library/jest-dom/vitest'
import { render, screen } from '@testing-library/react'
import React from 'react'
import { describe, expect, it } from 'vitest'
import Greet from '../../src/components/shared/Greet'

describe('Greet', () => {
  it('should render a greeting', () => {
    render(<Greet name='World' />)
    const heading = screen.getByRole('heading')
    expect(heading).toBeInTheDocument()
  })
})
