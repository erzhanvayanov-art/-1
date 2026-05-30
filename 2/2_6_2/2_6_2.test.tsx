import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Canvas from './App';


beforeAll(() => {

  Element.prototype.setPointerCapture = vi.fn()

  Element.prototype.releasePointerCapture = vi.fn()
}) 

describe('Canvas component', () => {
  afterEach(() => {
    cleanup();
  });

  beforeEach(() => {
    render(<Canvas />);
  });

  it('Box moves and changes color without affecting Background', async () => {
    const user = userEvent.setup();

    const background = screen.getByTestId('background');
    const box = screen.getByText('Drag me!');
    const colorSelect = screen.getByRole('combobox');

    expect(background).toHaveStyle('transform: translate(0px, 0px)');

    await user.pointer({ target: box, keys: '[MouseLeft>]', coords: { clientX: 100, clientY: 100 } });
    await user.pointer({ coords: { clientX: 300, clientY: 200 } });
    await user.pointer({ keys: '[/MouseLeft]' });

    await user.selectOptions(colorSelect, 'lightpink');

    expect(background).toHaveStyle('transform: translate(0px, 0px)');
  });


});