import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import List from './App';
import { people } from './data';

describe('List component', () => {
  it('renders chemists and everyone else correctly', () => {
    render(<List />);

    expect(screen.getByText('Scientists')).toBeInTheDocument();
    expect(screen.getByText('Chemists')).toBeInTheDocument();
    expect(screen.getByText('Everyone Else')).toBeInTheDocument();

    const chemists = people.filter(p => p.profession === 'chemist');
    chemists.forEach((chemist) => {
      const chemistItem = screen.getByText(
        new RegExp(`${chemist.name}:`, 'i')
      );
      expect(chemistItem).toBeInTheDocument();
      expect(screen.getByAltText(chemist.name)).toHaveAttribute(
        'src',
        expect.stringContaining(chemist.imageId)
      );
    });

    const everyoneElse = people.filter(p => p.profession !== 'chemist');
    everyoneElse.forEach((person) => {
      const personItem = screen.getByText(
        new RegExp(`${person.name}:`, 'i')
      );
      expect(personItem).toBeInTheDocument();
      expect(screen.getByAltText(person.name)).toHaveAttribute(
        'src',
        expect.stringContaining(person.imageId)
      );
    });
  });
});
