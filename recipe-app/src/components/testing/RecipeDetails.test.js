import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import RecipeDetails from '../RecipeDetails';
import mockRecipes from '../../data/mockRecipes';
import '@testing-library/jest-dom'; // Додано імпорт

jest.mock('../Header', () => () => <div>Header</div>);
jest.mock('../Footer', () => () => <div>Footer</div>);
jest.mock('../RecipeDetailComponents/HeroSection', () => ({ recipe }) => (
  <div data-testid="hero-section">{recipe?.title}</div>
));
jest.mock('../RecipeDetailComponents/InfoContainer', () => ({ ingredients, nutrition }) => (
  <div data-testid="info-container">
    Ingredients: {ingredients?.join(', ')} | Nutrition: {nutrition?.calories} calories
  </div>
));
jest.mock('../RecipeDetailComponents/Instructions', () => ({ instructions }) => (
  <div data-testid="instructions">Instructions: {instructions}</div>
));
jest.mock('../RecipeDetailComponents/PhotoSection', () => () => <div>PhotoSection</div>);
jest.mock('../RecipeDetailComponents/CommentsSection', () => () => <div>CommentsSection</div>);
jest.mock('../RecipeDetailComponents/HeroSection', () => ({ recipe }) => (
  <div data-testid="hero-section">{recipe ? recipe.title : 'No recipe'}</div>
));

describe('RecipeDetails', () => {
  it('shows loading state when recipe is not found', async () => {
    render(
      <MemoryRouter initialEntries={['/recipe/999']}>
        <Routes>
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </MemoryRouter>
    );
  
    expect(screen.getByText('Завантаження...')).toBeInTheDocument();
  }); 

  it('renders recipe details correctly when recipe is found', async () => {
    render(
      <MemoryRouter initialEntries={['/recipe/1']}>
        <Routes>
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByTestId('hero-section')).toHaveTextContent(mockRecipes[0].title);
    });

    expect(screen.getByTestId('info-container')).toHaveTextContent(
      `Ingredients: ${mockRecipes[0].ingredients.join(', ')}`
    );
    expect(screen.getByTestId('info-container')).toHaveTextContent(
      `Nutrition: ${mockRecipes[0].nutrition.calories} calories`
    );
    expect(screen.getByTestId('instructions')).toHaveTextContent(
      `Instructions: ${mockRecipes[0].instructions}`
    );
    expect(screen.getByText('PhotoSection')).toBeInTheDocument();
    expect(screen.getByText('CommentsSection')).toBeInTheDocument();
  });

  it('does not render details when recipe is not found', async () => {
    render(
      <MemoryRouter initialEntries={['/recipe/999']}>
        <Routes>
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText('Завантаження...')).toBeInTheDocument();
    });
  });
});
