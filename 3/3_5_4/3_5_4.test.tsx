import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useReducer } from './MyReact'

vi.stubGlobal('alert', vi.fn())

function Counter() {
  const [count, dispatch] = useReducer(
    (state: number, action: { type: 'increment' | 'decrement' }) => {
      switch (action.type) {
        case 'increment':
          return state + 1
        case 'decrement':
          return state - 1
        default:
          return state
      }
    },
    0
  )

  return (
    <div>
      <span data-testid="count">{count}</span>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  )
}

describe('Custom useReducer implementation', () => {
  it('works correctly with simple counter example', async () => {
    const user = userEvent.setup()
    render(<Counter />)

    const count = screen.getByTestId('count')
    const incrementBtn = screen.getByRole('button', { name: '+' })
    const decrementBtn = screen.getByRole('button', { name: '-' })

    expect(count).toHaveTextContent('0')

    await user.click(incrementBtn)
    expect(count).toHaveTextContent('1')

    await user.click(incrementBtn)
    await user.click(incrementBtn)
    expect(count).toHaveTextContent('3')

    await user.click(decrementBtn)
    expect(count).toHaveTextContent('2')
  })


})