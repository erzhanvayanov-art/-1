import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ImageSizeContext } from './Context';
import { PlaceImage } from './App';
import { places } from './data';

describe('PlaceImage uses Context instead of props', () => {
  const place = places[0];

  it('uses default value from context when no Provider', () => {
    render(<PlaceImage place={place} />);

    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('width', '101'); 
  });

  it('uses value from Provider', () => {
    render(
      <ImageSizeContext.Provider value={150}>
        <PlaceImage place={place} />
      </ImageSizeContext.Provider>
    );

    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('width', '150');
  });

  it('ignores imageSize prop if passed (no prop drilling)', () => {
    render(
      <ImageSizeContext.Provider value={120}>
        {/* @ts-expect-error intentional wrong prop */}
        <PlaceImage place={place} imageSize={999} />
      </ImageSizeContext.Provider>
    );

    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('width', '120');
  });
});
