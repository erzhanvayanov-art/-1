import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('render components', () => {
  it('should render Profile and Gallery components separately', () => {
    render(<App />);
    const galleryHeading = screen.getByText('Amazing scientists');
    expect(galleryHeading).toBeInTheDocument();
    const images = screen.getAllByRole('img');
    expect(images.length).toBeGreaterThanOrEqual(4);
    const allImages = screen.getAllByAltText('Alan L. Hart');
    expect(allImages.length).toBeGreaterThanOrEqual(1);
  });
});
