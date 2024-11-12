import React from "react";
import styled from "styled-components";
import RecipesSection from "./RecipesSection";
import FilterSection from "./FilterSection"; 

const RecipeContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1340px;
  margin: 0 auto;
`;

const RecipesWrapper = styled.div`
  flex: 2;
`;

const FilterWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
const Line = styled.line`
    display: block;  
    width: 1240px;
    height: 0.5px;
    background: #A6A4A4;
    margin: 40px 0 20px 0;
    @media (max-width: 768px){
        width: 338px;
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
