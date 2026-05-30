import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

describe('Fix a connection switch', () => {
  it('reconnects when encryption checkbox is toggled', () => {
    const logSpy = vi.spyOn(console, 'log').mockImplementation(() => {});

    const { getByLabelText } = render(<App />);

    expect(logSpy).toHaveBeenCalledWith(
      '✅ Connecting to "general... (unencrypted)'
    );

    logSpy.mockClear();


    const checkbox = getByLabelText(/enable encryption/i);
    fireEvent.click(checkbox);

    expect(logSpy).toHaveBeenCalledWith(
      '❌ Disconnected from "general" room (unencrypted)'
    );
    expect(logSpy).toHaveBeenCalledWith(
      '✅ 🔐 Connecting to "general... (encrypted)'
    );

    logSpy.mockRestore();
  });
});
