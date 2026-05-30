import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import TaskApp from './App'

describe('TaskApp — Immer version', () => {
  it('works with useImmer: add/edit/delete', () => {
    render(<TaskApp />)

    const input = screen.getByPlaceholderText('Add todo')
    fireEvent.change(input, { target: { value: 'Test Immer' } })
    fireEvent.click(screen.getByRole('button', { name: /add/i }))

    expect(screen.getByText('Test Immer')).toBeInTheDocument()

    const editBtn = screen.getAllByRole('button', { name: /edit/i })[0]
    fireEvent.click(editBtn)

    fireEvent.change(screen.getByDisplayValue('Buy milk'), {
      target: { value: 'Buy oat milk' },
    })
    fireEvent.click(screen.getByRole('button', { name: /save/i }))

    expect(screen.getByText('Buy oat milk')).toBeInTheDocument()

    fireEvent.click(screen.getAllByRole('button', { name: /delete/i })[1])

    expect(screen.queryByText('Eat tacos')).not.toBeInTheDocument()
    expect(screen.getAllByRole('checkbox')).toHaveLength(3)
  })
})