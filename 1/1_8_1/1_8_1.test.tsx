import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('Time-based className', () => {
  it('should set className based on time without side effects', () => {
    render(<App />);
    

    const timeElement = screen.getByRole('heading', { level: 1 });
    expect(timeElement).toBeInTheDocument();
    const hasClassName = timeElement.className === 'night' || timeElement.className === 'day';
    expect(hasClassName).toBe(true);


    expect(timeElement.textContent).toBeTruthy();

    expect(timeElement).toHaveAttribute('class');
    

    const className = timeElement.className;
    expect(['night', 'day']).toContain(className);
  });
  
});
