import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen, fireEvent, within } from '@testing-library/react'
import ShoppingCart from './App'

describe('ShoppingCart → increase item quantity', () => {
  beforeEach(() => {
    render(<ShoppingCart />)
  })

  it('correctly handles quantity increase for all items', () => {
    const items = screen.getAllByRole('listitem')
    const buttons = screen.getAllByRole('button', { name: '+' })

    expect(within(items[0]).getByText('1')).toBeInTheDocument()
    expect(within(items[1]).getByText('5')).toBeInTheDocument()
    expect(within(items[2]).getByText('2')).toBeInTheDocument()

    fireEvent.click(buttons[0])
    fireEvent.click(buttons[0])
    fireEvent.click(buttons[1])
    fireEvent.click(buttons[1])
    fireEvent.click(buttons[1])
    fireEvent.click(buttons[2])

    expect(within(items[0]).getByText('3')).toBeInTheDocument()
    expect(within(items[1]).getByText('8')).toBeInTheDocument()
    expect(within(items[2]).getByText('3')).toBeInTheDocument()
  })
})