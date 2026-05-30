import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import RequestTracker from './App';

describe('RequestTracker', () => {
  it('should increment pending and completed counters correctly', async () => {
    const user = userEvent.setup();

    render(<RequestTracker />);

    expect(screen.getByText('Отложенные: 0')).toBeInTheDocument();
    expect(screen.getByText('Выполненные: 0')).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /купить/i }));

    expect(screen.getByText('Отложенные: 1')).toBeInTheDocument();
    expect(screen.getByText('Выполненные: 0')).toBeInTheDocument();

    await waitFor(
      () => {
        expect(screen.getByText('Отложенные: 0')).toBeInTheDocument();
        expect(screen.getByText('Выполненные: 1')).toBeInTheDocument();
      },
      { timeout: 3500 }
    );

    await user.click(screen.getByRole('button', { name: /Купить/i }));

    expect(screen.getByText('Отложенные: 1')).toBeInTheDocument();
    expect(screen.getByText('Выполненные: 1')).toBeInTheDocument();

    await waitFor(
      () => {
        expect(screen.getByText('Отложенные: 0')).toBeInTheDocument();
        expect(screen.getByText('Выполненные: 2')).toBeInTheDocument();
      },
      { timeout: 3500 }
    );
  }, 8000);
});