import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('render components', () => {
  it('should render Gallery with Profile components using proper capitalization', () => {
    render(<App />);
    const heading = screen.getByText('Amazing scientists');
    expect(heading).toBeInTheDocument();
    const images = screen.getAllByAltText('Alan L. Hart');
    expect(images.length).toBe(3);
    images.forEach(image => {
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute('src');
    });
  });
});
