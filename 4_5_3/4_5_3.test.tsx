import { describe, it, expect } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

describe('Stale value bug fix', () => {
  it('dot moves only when checkbox is checked', () => {
    const { getByLabelText, container } = render(<App />);
    const checkbox = getByLabelText(/The dot is allowed to move/i) as HTMLInputElement;
    const dot = container.querySelector<HTMLDivElement>('div[style*="pink"]')!;


    fireEvent.pointerMove(window, { clientX: 100, clientY: 150 });

    expect(dot.style.transform).toBe('translate(100px, 150px)');

    fireEvent.click(checkbox);
    expect(checkbox.checked).toBe(false);

    fireEvent.pointerMove(window, { clientX: 200, clientY: 250 });

    expect(dot.style.transform).toBe('translate(100px, 150px)');

    fireEvent.click(checkbox);
    expect(checkbox.checked).toBe(true);

    fireEvent.pointerMove(window, { clientX: 300, clientY: 350 });


    expect(dot.style.transform).toBe('translate(300px, 350px)');
  });
});
