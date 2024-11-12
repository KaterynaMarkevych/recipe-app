// src/components/FilteredRecipesPage.jsx
import React, { useEffect, useState } from 'react';
import RecipeCard from './RecipeCard';
import styled from 'styled-components';

const FilteredSection = styled.section`
  padding: 40px 20px;
  
  h2 {
    text-align: center;
    margin-bottom: 24px;
    font-size: 28px;
    color: #2B3A39;
  }
  
  .recipes-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 16px;
  }
`;

const FilteredRecipesPage = () => {
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  useEffect(() => {
    const fetchFilteredRecipes = async () => {
      try {
        const response = await fetch(`/api/recipes?sort=rating&order=desc`);
        const data = await response.json();
        setFilteredRecipes(data);
      } catch (error) {
        console.error('Error fetching filtered recipes:', error);
      }
    };

    fetchFilteredRecipes();
  }, []);

  return (
    <FilteredSection>
      <h2>Рецепти за рейтингом</h2>
      <div className="recipes-grid">
        {filteredRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </FilteredSection>
  );
};

export default FilteredRecipesPage;
