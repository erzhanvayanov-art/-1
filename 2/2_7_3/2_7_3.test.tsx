import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import TaskApp from './App'

vi.mock('./App', async () => {
  const actual = await vi.importActual<typeof import('./App')>('./App')
  return {
    ...actual,
  }
})

describe('TaskApp immutable updates', () => {
  it('uses immutable updates for add/change/delete', () => {
    render(<TaskApp />)

    const addInput = screen.getByPlaceholderText('Add todo')
    const addBtn = screen.getByRole('button', { name: /add/i })

    fireEvent.change(addInput, { target: { value: 'Test immutable' } })
    fireEvent.click(addBtn)

    expect(screen.getByText('Test immutable')).toBeInTheDocument()
    const firstEditBtn = screen.getAllByRole('button', { name: /edit/i })[0]
    fireEvent.click(firstEditBtn)

    const editInput = screen.getByDisplayValue('Buy milk')
    fireEvent.change(editInput, { target: { value: 'Buy oat milk' } })
    fireEvent.click(screen.getByRole('button', { name: /save/i }))

    expect(screen.getByText('Buy oat milk')).toBeInTheDocument()
    expect(screen.queryByText('Buy milk')).not.toBeInTheDocument()


    const deleteBtns = screen.getAllByRole('button', { name: /delete/i })
    fireEvent.click(deleteBtns[0])

    expect(screen.queryByText('Buy oat milk')).not.toBeInTheDocument()

    expect(screen.getAllByRole('checkbox')).toHaveLength(3)
  })
})