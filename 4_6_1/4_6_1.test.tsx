import { render, screen, act } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Timer from './App';

describe('Timer component', () => {
  it('увеличивает count на текущее значение increment', () => {
    vi.useFakeTimers();
    render(<Timer />);


    expect(screen.getByText(/Counter:/).textContent).toContain('0');

    act(() => {
      vi.advanceTimersByTime(1000);
    });
    expect(screen.getByText(/Counter:/).textContent).toContain('1');

    act(() => {
      screen.getByText('+').click();
    });

    expect(screen.getByText('2')).toBeTruthy();


    act(() => {
      vi.advanceTimersByTime(1000);
    });
    expect(screen.getByText(/Counter:/).textContent).toContain('3');

    vi.useRealTimers();
  });
});
