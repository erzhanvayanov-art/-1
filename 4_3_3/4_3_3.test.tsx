import { describe, it, expect, vi } from 'vitest';
import { render, screen, act } from '@testing-library/react';
import Counter from './Counter';

describe('Counter interval behavior', () => {
  it('increments the counter once per second and clears the interval on unmount', () => {
    vi.useFakeTimers();

    const { unmount } = render(<Counter />);

    expect(screen.getByText('0')).toBeInTheDocument();

    act(() => {
      vi.advanceTimersByTime(1000);
    });
    expect(screen.getByText('1')).toBeInTheDocument();

    act(() => {
      vi.advanceTimersByTime(1000);
    });
    expect(screen.getByText('2')).toBeInTheDocument();

    const activeTimersBeforeUnmount = vi.getTimerCount();

    unmount();

    expect(vi.getTimerCount()).toBeLessThan(activeTimersBeforeUnmount);

    act(() => {
      vi.advanceTimersByTime(5000); 
    });

    expect(screen.queryByText(/3|4|5|6|7/)).not.toBeInTheDocument();
    expect(vi.getTimerCount()).toBe(0);

    vi.useRealTimers();
  });
});