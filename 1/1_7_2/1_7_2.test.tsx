import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';
import { recipes } from './data';

describe('Render nested recipe lists', () => {
  it('should render nested lists of recipes with ingredients', () => {
    render(<App />);
    
    const heading = screen.getByText('Recipes');
    expect(heading).toBeInTheDocument();
    
    recipes.forEach(recipe => {
      const recipeName = screen.getByText(recipe.name);
      expect(recipeName).toBeInTheDocument();
      expect(recipeName.tagName).toBe('H2');
      
      recipe.ingredients.forEach(ingredient => {
        const ingredientElement = screen.getByText(ingredient);
        expect(ingredientElement).toBeInTheDocument();
        expect(ingredientElement.tagName).toBe('LI');
      });
    });
    
    const allLists = document.querySelectorAll('ul');
    expect(allLists.length).toBe(recipes.length);
    
    recipes.forEach((recipe) => {
      const recipeContainer = screen.getByText(recipe.name).closest('div');
      expect(recipeContainer).toBeInTheDocument();
      
      const ingredientsList = recipeContainer?.querySelector('ul');
      expect(ingredientsList).toBeInTheDocument();
      expect(ingredientsList?.children.length).toBe(recipe.ingredients.length);
    });
  });
});
