import { render, screen, act, cleanup } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Timer from './App';

describe('Timer', () => {
  it('увеличивает счётчик каждую секунду и очищает интервал при размонтировании', () => {
    vi.useFakeTimers();
    const consoleSpy = vi.spyOn(console, 'log');

    const { unmount } = render(<Timer />);

    expect(screen.getByText(/Counter: 0/)).toBeTruthy();

    act(() => {
      vi.advanceTimersByTime(1000);
    });
    expect(screen.getByText(/Counter: 1/)).toBeTruthy();

    act(() => {
      vi.advanceTimersByTime(2000);
    });
    expect(screen.getByText(/Counter: 3/)).toBeTruthy();

    unmount();

    expect(consoleSpy).toHaveBeenCalledWith('❌ Clearing an interval');

    vi.useRealTimers();
    consoleSpy.mockRestore();
    cleanup();
  });
});
