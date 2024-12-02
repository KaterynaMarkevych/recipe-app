import React from "react";
import styled from "styled-components";
import RecipesSection from "./RecipesSection";
import FilterSection from "./FilterSection"; 

const RecipeContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1340px;
  margin: 0 auto;
  @media (max-width: 768px) {
    flex-direction: column; 
    align-items: center; 
    width: 100%;
  }
`;

const RecipesWrapper = styled.div`
  flex: 2;
  align-items: center; 
  width: 100%; 
  @media (max-width: 768px) {
    order: 2; /* Встановлення порядку після FilterWrapper */
  }
`;

const FilterWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center; 
  width: 100%; 
  @media (max-width: 768px) {
    order: 1; /* Встановлення порядку перед RecipesWrapper */
  }

`;
const Line = styled.line`
    display: block;  
    width: 1240px;
    height: 0.5px;
    background: #A6A4A4;
    margin: 40px 0 20px 0;
    @media (max-width: 768px){
        width: 380px;
        margin: 20px 0 20px 0;
    }
`;
const RecipeContainerComponent = () => {
  return (
    <>
    <RecipeContainer>
      <RecipesWrapper>
        <RecipesSection />
      </RecipesWrapper>
      <FilterWrapper>
        <FilterSection />
      </FilterWrapper>
    </RecipeContainer>
    <Line/>
    </>
  );
};

export default RecipeContainerComponent;
