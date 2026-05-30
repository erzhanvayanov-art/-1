import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import PackingList from './App';

describe('PackingList icons', () => {
  it('shows ✔ for packed items and X for unpacked items', () => {
    const { getByText } = render(<PackingList />);

    expect(getByText('Space suit ✔')).toBeTruthy();
    expect(getByText('Helmet with a golden leaf ✔')).toBeTruthy();
    expect(getByText('Photo of Tam X')).toBeTruthy();
  });
});
