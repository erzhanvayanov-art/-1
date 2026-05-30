import { describe, it, expect } from 'vitest';
import { render} from '@testing-library/react';
import fs from 'fs';
import path from 'path';
import App from './App';

describe('Gallery extract component', () => {
  
  it('uses Profile component instead of duplicated markup', () => {
    render(<App />);
    const filePath = path.resolve(__dirname, './App.tsx');
    const source = fs.readFileSync(filePath, 'utf-8');

    expect(source).toMatch(/function\s+Profile|const\s+Profile\s*=/);
    expect(source.match(/<Profile\b/g)?.length).toBe(2);
    expect(source.match(/className="profile"/g)?.length).toBe(1);
  });
});
