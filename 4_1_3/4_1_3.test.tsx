import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Dashboard from './App';

describe('Dashboard — debounced buttons are independent', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.spyOn(window, 'alert').mockImplementation(() => {});
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  it('buttons debounce independently and do not cancel each other', () => {
    render(<Dashboard />);

    const launchBtn = screen.getByRole('button', { name: /launch the spaceship/i });
    const soupBtn = screen.getByRole('button', { name: /boil the soup/i });
    const lullabyBtn = screen.getByRole('button', { name: /sing a lullaby/i });

    fireEvent.click(launchBtn);
    fireEvent.click(soupBtn);


    fireEvent.click(lullabyBtn);
    fireEvent.click(lullabyBtn);
    fireEvent.click(lullabyBtn);

    vi.advanceTimersByTime(1000);

    expect(window.alert).toHaveBeenCalledTimes(3);

    const calls = (window.alert as unknown as vi.Mock).mock.calls.flat();

    expect(calls).toContain('Spaceship launched!');
    expect(calls).toContain('Soup boiled!');
    expect(calls).toContain('Lullaby sung!');
  });
});
