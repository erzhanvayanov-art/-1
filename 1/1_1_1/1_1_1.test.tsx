import {it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('function App', () => {
  it('function App', () => {
    expect(App).toBeDefined();
    expect(typeof App).toBe('function');
    render(<App />);

    const img = screen.getByAltText('Aklilu Lemma') as HTMLImageElement;

    expect(img).toBeInTheDocument();
    expect(img.src).toContain('AkliluLemma.jpg');
  });
});