import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import RecipeCard from './RecipeCard';
import mockRecipes from '../../data/mockRecipes'; // Імпорт даних
import 'jest-styled-components';

// Використовуємо перший рецепт з mockRecipes
const mockRecipe = mockRecipes[0];

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

const mockNavigate = jest.requireMock('react-router-dom').useNavigate;

describe('RecipeCard Component', () => {
  test('displays recipe information correctly', () => {
    render(
      <MemoryRouter>
        <RecipeCard recipe={mockRecipe} />
      </MemoryRouter>
    );

    // Перевірка назви рецепта
    expect(screen.getByText(mockRecipe.name)).toBeInTheDocument();
    // Перевірка інгредієнтів
    const formattedIngredients = mockRecipe.ingredients
      .slice(0, 6)
      .map(ingredient =>
        ingredient.replace(/^\d*\s*(шт\.?|г|кг|л|мл|ст\.л.|ч\.л.|додати|паст[аи]|см\.|капсула|таблетка|упаковка|щіпка|банка|пучок|-|зубчик[аи])?\s*/i, "").trim()
      )
      .join(", ");
    expect(screen.getByText(new RegExp(formattedIngredients, 'i'))).toBeInTheDocument();
    // Перевірка зірочок рейтингу
    const stars = '★ ★ ★ ★ ☆';
    expect(screen.getByText(stars)).toBeInTheDocument();
  });

  test('navigates to recipe page on click', () => {
    render(
      <MemoryRouter>
        <RecipeCard recipe={mockRecipe} />
      </MemoryRouter>
    );

    const card = screen.getByRole('img', { name: mockRecipe.name }).parentElement;
    userEvent.click(card);

    expect(mockNavigate).toHaveBeenCalledWith(`/recipe/${mockRecipe.id}`);
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
