import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import TodoList from './App';

describe('TodoList heading', () => {
  it('renders correct name in heading', () => {
    const { getByRole } = render(<TodoList />);

    const heading = getByRole('heading', { level: 1 });
    expect(heading.textContent).toBe("Gregorio Y. Zara's Todos");
  });
});
