
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Profile from './App';

describe('Profile', () => {
  it('renders the image with correct src and alt', () => {
    render(<Profile />);

    const img = screen.getByAltText('Katsuko Saruhashi');

    expect(img).toHaveAttribute('src', 'KatsukoSaruhashi.jpg');
    expect(img).toHaveAttribute('alt', 'Katsuko Saruhashi');
  });
});