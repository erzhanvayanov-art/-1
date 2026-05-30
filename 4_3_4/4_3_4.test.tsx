import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Page from './App';

vi.mock('./api', () => ({
  fetchBio: vi.fn(async (person: string) => {
    const delay = person === 'Bob' ? 3000 : 300;
    await new Promise((r) => setTimeout(r, delay));
    return `This is ${person}’s bio.`;
  }),
}));

describe('Page — race condition fix on fast selection', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('race condition: Bob bio should not appear when quickly switching to Taylor', async () => {
    const user = userEvent.setup({ delay: null });

    render(<Page />);

    await waitFor(() => expect(screen.getByText(/Alice’s bio/)).toBeInTheDocument());

    const select = screen.getByRole('combobox');

    await user.selectOptions(select, 'Bob');
    await waitFor(() => expect(screen.getByText('Loading...')).toBeInTheDocument());

    await user.selectOptions(select, 'Taylor');

    await waitFor(() => {
      expect(screen.getByText(/Taylor’s bio/)).toBeInTheDocument();
    }, { timeout: 1200 });

    await new Promise((r) => setTimeout(r, 3500));

    expect(screen.queryByText(/Bob’s bio/)).not.toBeInTheDocument();
    expect(screen.getByText(/Taylor’s bio/)).toBeInTheDocument();
  });
});