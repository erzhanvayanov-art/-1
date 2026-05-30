import { describe, it, expect } from 'vitest';
import { render} from '@testing-library/react';
import App from './App';

describe('custom component', () => {
  it('should render a custom component without errors', () => {
    render(<App />);
    const container = document.body;
    expect(container).toBeInTheDocument();
    const hasContent = container.textContent && container.textContent.trim().length > 0;
    expect(hasContent).toBe(true);
    const rootElement = container.querySelector('*');
    expect(rootElement).toBeTruthy();
  });
});
