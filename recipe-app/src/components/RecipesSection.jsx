import React, { useState, useEffect } from "react";
import styled from "styled-components";
import mockRecipes from "../data/mockRecipes";
import RecipeCard from "./RecipeCard";

const GridWrapper = styled.div`
  overflow: hidden;
  max-height: ${(props) => (props.isCollapsed ? "0px" : "2000px")};
  transition: max-height 0.50s ease;
`;
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
  const [isCollapsed, setIsCollapsed] = useState(false);

  const recipesPerLoad = 3;

  // Завантажуємо початкові рецепти
  useEffect(() => {
    const initialRecipes = mockRecipes.slice(0, recipesPerLoad);
    setRecipes(initialRecipes);
  }, []);

  // Завантаження додаткових рецептів при зміні loadCount
  useEffect(() => {
    if (loadCount > 0) {
      const newRecipes = mockRecipes.slice(
        loadCount * recipesPerLoad,
        (loadCount + 1) * recipesPerLoad
      );
      setRecipes((prevRecipes) => [...prevRecipes, ...newRecipes]);
    }
  }, [loadCount]);

  const handleLoadMore = () => {
    if (recipes.length < mockRecipes.length) {
      setLoadCount((prevCount) => prevCount + 1);
      setIsCollapsed(false); // Розгорнути блок, якщо він був згорнутий
    }
  };

  const handleCollapse = () => {
    setIsCollapsed(true);
    setTimeout(() => {
      setRecipes(mockRecipes.slice(0, recipesPerLoad)); // Залишити лише початкові рецепти після анімації
      setLoadCount(0);
      setIsCollapsed(false);
    }, 100); // Затримка для завершення анімації
  };

  const handleShowAll = () => {
    // Перехід на сторінку з усіма рецептами
    window.location.href = "/popular-recipes";
  };

  return (
    <>
      <PopularRecipes>Найпопулярніші рецепти:</PopularRecipes>
      <GridWrapper isCollapsed={isCollapsed}>
      <Grid>
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </Grid>
      </GridWrapper>
      <LoadMoreWrapper>
        {loadCount < 3 && recipes.length < mockRecipes.length ? (
          <LoadMore onClick={handleLoadMore}>Показати ще рецепти</LoadMore>
        ) : (
          <LoadMore onClick={handleShowAll}>Показати більше</LoadMore>
        )}
        {loadCount > 0 && (
          <LoadMore onClick={handleCollapse}>
            Згорнути все
          </LoadMore>
        )}
      </LoadMoreWrapper>
    </>
  );
};

export default RecipesSection;
