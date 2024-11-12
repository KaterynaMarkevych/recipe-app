// src/components/RecipeCard.jsx
import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 230px;
  height: 280px;
  border: 1px solid #A6A4A4;
  background: #F7FBFC;
  padding: 16px;
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  &:hover {
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
`;
const Image =styled.img`
    width: 200px;
    height: 130px;
`;
const Title = styled.h2`
    color: #000;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-align: left; 
    width: 100%;  
    margin-left: 20px;  
`;
const Ingredients = styled.p`
    display: flex;
    width: 200px;
    height: 34.821px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    color: #000;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: left;  
    margin-left: 20px; 
`;
const Stars = styled.div`
  color: #2B3A39;
  font-size: 16px;
  text-align: left;  
  margin-left: 20px;
`;

const RecipeCard = ({ recipe }) => {
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
          stars.push(i < rating ? "★" : "☆");
        }
        return stars.join(" ");
      };
    return (
    <>
        <Card>
            <Image src={recipe.image} alt={recipe.title}/>
            <Title> {recipe.name}</Title>
            <Ingredients>{recipe.ingredients.join(", ")}</Ingredients>
            <Stars>{renderStars(recipe.rating)}</Stars>
        </Card>
    </>
    );
  };

export default RecipeCard;