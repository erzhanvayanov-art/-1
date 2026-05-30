import { describe, it, vi, expect } from 'vitest';
import { render } from '@testing-library/react';
import * as util from './util';
import Profile from './App';

describe('Avatar thumbnail size', () => {
  it('passes correct thumbnail size based on prop', () => {
    const getImageUrlMock = vi.spyOn(util, 'getImageUrl');

    render(<Profile />);

    expect(getImageUrlMock).toHaveBeenCalledWith(
      { name: 'Gregorio Y. Zara', imageId: '7vQD0fP' },
      's'
    );

    expect(getImageUrlMock).toHaveBeenCalledWith(
      { name: 'Gregorio Y. Zara', imageId: '7vQD0fP' },
      'b'
    );

    getImageUrlMock.mockRestore();
  });
});
