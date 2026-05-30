import { describe, it, expect, vi } from 'vitest';
import { render, act } from '@testing-library/react';
import Canvas from './App';

let currentPos = { x: 0, y: 0 };

vi.mock('./usePointerPosition.ts', () => ({
  usePointerPosition: () => currentPos,
}));

describe('Canvas staggered movement', () => {
  it('dots follow pointer with delays (useDelayedValue works)', () => {
    vi.useFakeTimers();

    const { container, rerender } = render(<Canvas />);

    const getTransforms = () =>
      Array.from(container.querySelectorAll('div'))
        .map(d => d.style.transform);

    const start = getTransforms();
    expect(new Set(start).size).toBe(1);


    currentPos = { x: 100, y: 100 };
    rerender(<Canvas />);

    const afterMove = getTransforms();

    expect(afterMove[0]).toContain('100px');
    expect(afterMove[1]).not.toContain('100px');

    act(() => {
      vi.advanceTimersByTime(100);
    });

    const after100 = getTransforms();
    expect(after100[1]).toContain('100px');

    act(() => {
      vi.advanceTimersByTime(200);
    });

    const after300 = getTransforms();
    expect(after300[2]).toContain('100px');

    vi.useRealTimers();
  });
});
