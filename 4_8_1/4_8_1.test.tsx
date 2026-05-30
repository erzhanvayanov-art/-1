import { render, screen, act } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { useCounter } from './useCounter';

function TestComponent() {
  const count = useCounter();
  return <div>Count: {count}</div>;
}

describe('useCounter hook', () => {
  it('increments the counter every second', () => {
    vi.useFakeTimers();

    render(<TestComponent />);

    expect(screen.getByText(/Count: 0/)).toBeTruthy();

    act(() => {
      vi.advanceTimersByTime(1000);
    });
    expect(screen.getByText(/Count: 1/)).toBeTruthy();

    act(() => {
      vi.advanceTimersByTime(2000);
    });
    expect(screen.getByText(/Count: 3/)).toBeTruthy();

    vi.useRealTimers();
  });
});
