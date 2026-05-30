import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Canvas from './App';

vi.mock('./Box', () => {
  const original = vi.importActual('./Box');
  return {
    ...original,
    default: function MockBox({
      children,
      color,
      position,
      onMove,
    }: {
      children: React.ReactNode;
      color: string;
      position: { x: number; y: number };
      onMove: (dx: number, dy: number) => void;
    }) {
      return (
        <div
          data-testid="box"
          style={{
            width: 100,
            height: 100,
            backgroundColor: color,
            position: 'absolute',
            transform: `translate(${position.x}px, ${position.y}px)`,
          }}
          onClick={() => onMove(30, 40)}
        >
          {children}
        </div>
      );
    },
  };
});

describe('Canvas component + Immer ', () => {
  beforeEach(() => {
  });

  it('Box moves and changes color without affecting Background + Immer', async () => {
    const user = userEvent.setup();

    render(<Canvas />);

    const background = screen.getByTestId('background');
    const box = screen.getByTestId('box');

    expect(background).toHaveStyle({
      transform: 'translate(0px, 0px)',
    });

    expect(box).toHaveStyle({
      transform: 'translate(0px, 0px)',
    });

    await user.click(box);

    expect(box).toHaveStyle({
      transform: 'translate(30px, 40px)',
    });

    expect(background).toHaveStyle({
      transform: 'translate(0px, 0px)',
    });
    const select = screen.getByRole('combobox');
    await user.selectOptions(select, 'lightpink');

    expect(background).toHaveStyle({
      transform: 'translate(0px, 0px)',
    });

    expect(box).toHaveStyle({
      transform: 'translate(30px, 40px)',
    });

    await user.click(box);

    expect(box).toHaveStyle({
      transform: 'translate(60px, 80px)',
    });

    expect(background).toHaveStyle({
      transform: 'translate(0px, 0px)',
    });
  });
})