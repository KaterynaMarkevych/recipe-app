import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import RecipeCard from '../RecipeCard';
import mockRecipes from '../../data/mockRecipes';
import 'jest-styled-components';
import '@testing-library/jest-dom';

const mockRecipe = mockRecipes[0];

describe('RecipeCard Component', () => {
  test('displays recipe information correctly', () => {
    render(
      <MemoryRouter>
        <RecipeCard recipe={mockRecipe} />
      </MemoryRouter>
    );
  
    // Тест рейтингу через data-testid
    expect(screen.getByTestId('recipe-rating').textContent.trim()).toBe('★ ★ ★ ★ ★');
  });

  test('formats ingredients correctly', () => {
    render(
      <MemoryRouter>
        <RecipeCard recipe={mockRecipe} />
      </MemoryRouter>
    );

    const formattedIngredients = mockRecipe.ingredients
      .slice(0, 6)
      .map(ingredient =>
        ingredient.replace(/^\d*\s*(шт\.?|г|кг|л|мл|ст\.л.|ч\.л.|додати|паст[аи]|см\.|капсула|таблетка|упаковка|щіпка|банка|пучок|-|зубчик[аи])?\s*/i, "").trim()
      )
      .join(", ");
    expect(screen.getByText(new RegExp(formattedIngredients, 'i'))).toBeInTheDocument();
  });

  test('applies hover effect', () => {
    const { container } = render(
      <MemoryRouter>
        <RecipeCard recipe={mockRecipe} />
      </MemoryRouter>
    );
    const card = container.firstChild;

    expect(card).toHaveStyleRule('box-shadow', '0px 4px 4px 0px rgba(0, 0, 0, 0.25)', {
      modifier: ':hover',
    });
  });
});
