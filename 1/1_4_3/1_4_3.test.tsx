import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import TodoList from './App';

describe('TodoList image src', () => {
  it('renders computed image src', () => {
    const { container } = render(<TodoList />);
    const img = container.querySelector('img') as HTMLImageElement;
    expect(img).toBeTruthy();
    expect(img.src).toContain('/7vQD0fPs.jpg');
  });
});
