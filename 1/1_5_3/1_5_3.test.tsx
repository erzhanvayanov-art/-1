import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';
import { render } from '@testing-library/react';
import App from './App';

describe('Profile uses Card component', () => {
  it('extracts Card and passes JSX via children', () => {
    render(<App />);
    const filePath = path.resolve(__dirname, './App.tsx');
    const source = fs.readFileSync(filePath, 'utf-8');

    expect(source).toMatch(/function\s+Card|const\s+Card\s*=/);
    expect(source.match(/<Card>/g)?.length).toBe(2);
    expect(source.match(/className="card"/g)?.length).toBe(1);
  });
});
