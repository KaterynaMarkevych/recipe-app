// src/components/RecipeDetailPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import mockRecipes from '../data/mockRecipes';
import HeroSection from './RecipeDetailComponents/HeroSection';
import InfoContainer from './RecipeDetailComponents/InfoContainer';
import Instructions from './RecipeDetailComponents/Instructions';
import PhotoSection from './RecipeDetailComponents/PhotoSection';
import CommentsSection from './RecipeDetailComponents/CommentsSection';

const DetailContainer = styled.div`
  width: 100%;
  max-width: 1220px;
  margin: 0 auto;
  display: flex; /* Включаємо Flexbox */
  flex-direction: column; /* Якщо елементи мають бути в стовпчик, можна змінити на row для рядка */
  justify-content: center; /* Центрування по вертикалі */
  align-items: center;
`;

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = () => {
      const foundRecipe = mockRecipes.find((recipe) => recipe.id === id);
      setRecipe(foundRecipe);
    };
  
    if (id) {
      fetchRecipe();
    }
  }, [id]);

  if (!recipe) {
    return <DetailContainer>Завантаження...</DetailContainer>;
  }

  return (
    <>
    <Header/>
    <DetailContainer>
      <HeroSection recipe={recipe} />
      <InfoContainer ingredients={recipe.ingredients} nutrition={recipe.nutrition}/>
      <Instructions instructions={recipe.instructions}/>
      <PhotoSection/>
      <CommentsSection/>
    </DetailContainer>
    <Footer/>
    </>
   ); 
};

export default RecipeDetails;
