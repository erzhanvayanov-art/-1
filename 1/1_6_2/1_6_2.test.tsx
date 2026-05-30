import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('Show important only', () => {
  it('should show importance only for items with importance > 0', () => {
    
    render(<App />);
    
    const heading = screen.getByText("Sally Ride's Packing List");
    expect(heading).toBeInTheDocument();
        const spaceSuit = screen.getByText(/Space suit/);
    expect(spaceSuit).toBeInTheDocument();
    expect(spaceSuit.textContent).toContain('Importance: 9');
    
    const helmet = screen.getByText(/Helmet with a golden leaf/);
    expect(helmet).toBeInTheDocument();
    expect(helmet.textContent).not.toContain('Importance: 0');
    expect(helmet.textContent).not.toContain('Importance');
    
    const photo = screen.getByText(/Photo of Tam/);
    expect(photo).toBeInTheDocument();
    expect(photo.textContent).toContain('Importance: 6');
    
    const importanceElements = document.querySelectorAll('i');
    expect(importanceElements.length).toBe(2);
    
    importanceElements.forEach(elem => {
      expect(elem.textContent).toMatch(/Importance: \d+/);
    });
  });
});
