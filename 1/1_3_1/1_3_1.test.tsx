import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import Bio from './App';

describe('Bio component', () => {
  it('renders valid JSX structure', () => {
    const { container} = render(<Bio />);
    expect(container.querySelectorAll('div').length).toBeGreaterThan(0);
    const intro = container.querySelector('.intro');
    expect(intro).toBeTruthy();
    expect(intro?.querySelector('h1')?.textContent).toBe(
      'Welcome to my website!'
    );
    const summary = container.querySelector('.summary');
    expect(summary).toBeTruthy();
    const brs = summary?.querySelectorAll('br');
    expect(brs?.length).toBe(2);
    const bold = summary?.querySelector('b');
    const italic = bold?.querySelector('i');
    expect(bold).toBeTruthy();
    expect(italic).toBeTruthy();
    expect(bold?.textContent).toContain('pictures');
  });
});
