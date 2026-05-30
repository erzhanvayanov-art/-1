import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Chat from './App';

describe('Chat — send / undo behavior', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.spyOn(window, 'alert').mockImplementation(() => {});
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
    vi.restoreAllMocks();
  });


  it('does NOT show alert if cancelled with Undo', () => {
    render(<Chat />);

    const input = screen.getByRole('textbox');
    const sendButton = screen.getByRole('button', { name: /send|отправ/i });

    fireEvent.change(input, { target: { value: 'Hello' } });
    fireEvent.click(sendButton);

    const undoButton = screen.getByRole('button', { name: /undo|отмен/i });
    fireEvent.click(undoButton);

    vi.advanceTimersByTime(3000);

    expect(window.alert).not.toHaveBeenCalled();
  });

});
