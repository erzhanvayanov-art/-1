import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Messenger from './App'


vi.stubGlobal('alert', vi.fn())

describe('Messenger — preserving drafts when switching contacts', () => {
  it('preserves separate drafts for different contacts and restores them', async () => {
    const user = userEvent.setup()
    render(<Messenger />)


    await user.click(screen.getByRole('button', { name: /Taylor/ }))
    const textarea = screen.getByPlaceholderText(/Chat to Taylor/)


    expect(textarea).toHaveValue('Hello')


    await user.type(textarea, 'Hi, how are you?')
    expect(textarea).toHaveValue('HelloHi, how are you?')


    await user.click(screen.getByRole('button', { name: /Alice/ }))
    const aliceTextarea = screen.getByPlaceholderText(/Chat to Alice/)
    await user.type(aliceTextarea, 'Tomorrow at 3?')
    expect(aliceTextarea).toHaveValue('Tomorrow at 3?')


    await user.click(screen.getByRole('button', { name: /Taylor/ }))
    expect(screen.getByPlaceholderText(/Chat to Taylor/)).toHaveValue('HelloHi, how are you?')

  })

})