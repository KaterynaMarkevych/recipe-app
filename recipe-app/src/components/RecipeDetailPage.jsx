// src/components/RecipeDetailPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const DetailContainer = styled.div`
  padding: 40px 20px;
  max-width: 800px;
  margin: 0 auto;
  
  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 24px;
  }
  
  h1 {
    font-size: 32px;
    color: #2B3A39;
    margin-bottom: 16px;
  }
  
  .ingredients {
    margin-bottom: 16px;
    
    h3 {
      font-size: 24px;
      color: #2B3A39;
      margin-bottom: 8px;
    }
    
    ul {
      list-style-type: disc;
      padding-left: 20px;
      
      li {
        margin-bottom: 4px;
      }
    }
  }
  
  .rating {
    font-size: 20px;
    font-weight: bold;
    color: #2B3A39;
  }
`;

const RecipeDetailPage = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch(`/api/recipes/${id}`);
        const data = await response.json();
        setRecipe(data);
      } catch (error) {
        console.error('Error fetching recipe:', error);
      }
    };

    fetchRecipe();
  }, [id]);

  if (!recipe) {
    return <DetailContainer>Завантаження...</DetailContainer>;
  }

  return (
    <DetailContainer>
      <h1>{recipe.name}</h1>
      <img src={recipe.image} alt={recipe.name} />
      <div className="ingredients">
        <h3>Інгредієнти:</h3>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
      <div className="rating">Рейтинг: {recipe.rating}</div>
      <p>{recipe.description}</p>
    </DetailContainer>
  );
};

export default RecipeDetailPage;
