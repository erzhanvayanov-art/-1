import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';
import { render} from '@testing-library/react';
import App from './App';

describe('Extract image URL into person object', () => {
  it('uses imageUrl from person', () => {
    render(<App />);
    const filePath = path.resolve(__dirname, './App.tsx');
    const source = fs.readFileSync(filePath, 'utf-8');

    expect(source).toMatch(/imageUrl\s*:/);
    expect(source).toMatch(/src=\{person\.imageUrl\}/);
    expect(source).not.toMatch(/src="GregorioYZara\.jpg"/);
  });
});
