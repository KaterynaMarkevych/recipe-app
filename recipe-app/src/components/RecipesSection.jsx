import React, { useState, useEffect } from "react";
import styled from "styled-components";
import mockRecipes from "../data/mockRecipes";
import RecipeCard from "./RecipeCard";

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  width: 890px;
  margin-left: 25px;
`;
const PopularRecipes = styled.h2`
  display: flex;
  width: 337px;
  height: 34px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: #2B3A39;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 40px;
  margin: 10px 0px 40px 0;
`;
const LoadMoreWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  margin-top: 10px;
`;
const LoadMore = styled.button`
  color: #2B3A39;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  border: none;
  background: none;
  margin-top: 40px;
  &:hover {
    border: none;
    color: #535D45;
  }
  &:focus {
    outline: none;
  }
  &:active {
    border: none;
    color: #535D45;
  }
`;

const RecipesSection = () => {
  const [recipes, setRecipes] = useState([]);
  const [loadCount, setLoadCount] = useState(0);

  const recipesPerLoad = 3;

  // Використовуємо useEffect для завантаження рецептів
  useEffect(() => {
    const loadRecipes = () => {
      const newRecipes = mockRecipes.slice(
        0, // Починаємо з 0
        recipesPerLoad // Завантажуємо перші 3 рецепти
      );
      setRecipes(newRecipes); // Завантажуємо перші рецепти при старті
    };
    
    loadRecipes(); // Завантажуємо рецепти при першому рендері
  }, []);

  useEffect(() => {
    const loadMoreRecipes = () => {
      const newRecipes = mockRecipes.slice(
        (loadCount + 1) * recipesPerLoad, // Додаємо нові рецепти після перших 3
        (loadCount + 2) * recipesPerLoad
      );
      setRecipes((prevRecipes) => [...prevRecipes, ...newRecipes]); // Додаємо нові рецепти до попередніх
    };

    if (loadCount > 0) {
      loadMoreRecipes();
    }
  }, [loadCount]);

  const handleLoadMore = () => {
    setLoadCount((prevCount) => prevCount + 1); // Збільшуємо loadCount при натисканні
  };

  return (
    <>
      <PopularRecipes>Найпопулярніші рецепти:</PopularRecipes>
      <Grid>
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </Grid>
      {recipes.length < mockRecipes.length && ( // Перевіряємо, чи є ще рецепти для завантаження
        <LoadMoreWrapper>
          <LoadMore onClick={handleLoadMore}>Показати ще рецепти</LoadMore>
        </LoadMoreWrapper>
      )}
    </>
  );
};

export default RecipesSection;
