import { describe, it, expect } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import App, { Person } from './App';

describe('ndependent profiles', () => {
  it('renders multiple profiles independently', () => {
    const { getByText, getAllByRole } = render(<App />);

    const firstPerson: Person = {
      name: 'Subrahmanyan Chandrasekhar',
      imageId: 'lrWQx8l',
    };
    const secondPerson: Person = {
      name: 'Creola Katherine Johnson',
      imageId: 'MK3eW3A',
    };

    expect(getByText(firstPerson.name)).toBeTruthy();
    expect(getByText(secondPerson.name)).toBeTruthy();

    const buttons = getAllByRole('button');
    expect(buttons.length).toBe(2);

    fireEvent.click(buttons[0]);
    expect(() => getByText(firstPerson.name)).toThrow(); 
    expect(getByText(secondPerson.name)).toBeTruthy();


    fireEvent.click(buttons[0]);
    expect(getByText(firstPerson.name)).toBeTruthy();
  });
});