import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import CatFriends from './App';

describe('CatFriends — scrolls to active image on Next', () => {
  beforeEach(() => {
    Element.prototype.scrollIntoView = vi.fn();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('calls scrollIntoView on the next active image when clicking Next', () => {
    render(<CatFriends />);

    const nextButton = screen.getByRole('button', { name: /next/i });

    const firstImg = screen.getByAltText('Cat #0');
    const secondImg = screen.getByAltText('Cat #1');

    fireEvent.click(nextButton);

    expect(Element.prototype.scrollIntoView).toHaveBeenCalledTimes(1);

    const mock = Element.prototype.scrollIntoView as unknown as vi.Mock;
    expect(mock.mock.instances[0]).toBe(secondImg);

    
    expect(secondImg.className).toContain('active');
    expect(firstImg.className).not.toContain('active');
  });
});
