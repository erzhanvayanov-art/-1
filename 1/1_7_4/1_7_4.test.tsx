import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('1_7_4', () => {
  it('should render poem lines with hr separators between them', () => {
    render(<App />);

    const line1 = screen.getByText('I write, erase, rewrite');
    const line2 = screen.getByText('Erase again, and then');
    const line3 = screen.getByText('A poppy blooms.');
    
    expect(line1).toBeInTheDocument();
    expect(line2).toBeInTheDocument();
    expect(line3).toBeInTheDocument();
    
    expect(line1.tagName).toBe('P');
    expect(line2.tagName).toBe('P');
    expect(line3.tagName).toBe('P');
    
    const separators = document.querySelectorAll('hr');
    expect(separators.length).toBe(2);
    const article = document.querySelector('article');
    expect(article).toBeInTheDocument();
    
    const firstChild = article?.firstElementChild;
    const lastChild = article?.lastElementChild;
    expect(firstChild?.tagName).toBe('P');
    expect(lastChild?.tagName).toBe('P');
  });
});
