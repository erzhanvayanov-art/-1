import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, beforeEach } from 'vitest'
import ShoppingCart from './App'

describe('ShoppingCart', () => {
  beforeEach(() => {
    render(<ShoppingCart />)
  })

  const expectCount = (count: number) => {
    expect(
      screen.getByText(
        (content, element) => element?.tagName === 'B' && content === String(count)
      )
    ).toBeInTheDocument()
  }


  it('decrements quantity when clicking -', () => {
    const cheeseMinus = screen.getAllByText('–')[1]

    fireEvent.click(cheeseMinus)
    fireEvent.click(cheeseMinus)

    expectCount(3)
  })

  it('removes item when quantity reaches 0 via - button', () => {
    const baklavaMinus = screen.getAllByText('–')[0]

    fireEvent.click(baklavaMinus)

    expect(screen.queryByText(/Baklava/i)).not.toBeInTheDocument()
    expect(
      screen.queryByText(
        (content, element) => element?.tagName === 'B' && content === '0'
      )
    ).not.toBeInTheDocument()
  })

  it('does not show items with zero quantity after multiple - clicks', () => {
    const spaghettiMinus = screen.getAllByText('–')[2]

    fireEvent.click(spaghettiMinus)
    fireEvent.click(spaghettiMinus)

    expect(screen.queryByText(/Spaghetti/i)).not.toBeInTheDocument()
  })
})
