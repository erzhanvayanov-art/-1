import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';
import { render} from '@testing-library/react';
import App from './App';
describe('Drink refactor: use if instead of multiple ternaries', () => {
  it('should use variables and an if/else structure', () => {
    render(<App />);
    const filePath = path.resolve(__dirname, './App.tsx');
    const source = fs.readFileSync(filePath, 'utf-8');

    const ternaryCount = (source.match(/\?/g) || []).length;
    expect(ternaryCount).toBeLessThan(3);

    expect(source).toMatch(/if\s*\(\s*name\s*===\s*['"]tea['"]\s*\)/);
  });
});
