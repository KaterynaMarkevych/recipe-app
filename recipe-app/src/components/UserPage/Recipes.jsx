import React from "react";
import styled from "styled-components";
import "primeicons/primeicons.css";

export const RecipeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align:left;
    width: 100%;
`;
export const TiteContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
    width: 100%;
    @media (max-width: 768px){
        justify-content: center;
    }
`;
export const RecipesTitle = styled.h2`
    color: #2B3A39;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 40px;
    text-align: left;
    @media (max-width: 768px){
        font-size: 24px;
    }
`;
export const Icon = styled.i`
    font-size: 28px;
    color: #A6A4A4;
    margin: 0;
    @media (max-width: 768px){
        font-size: 20px;
        margin: 10px;
    }
`;
export const TitleSpan = styled.span`
    color: #535D45;
    font-weight: 400;
    font-size: 28px;
    @media (max-width: 768px){
        font-size: 20px;
    }
`;
export const RecipeContainer = styled.div`
    display: flex;
    width: 100%;
    max-width: 1220px;
    margin: 0 auto;
`;
export const Grid = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 32px;
    width: 100%;
    max-width: 12240px;
    margin-left: 25px;
    @media (max-width: 768px){
        justify-content: center;
    }
`;
export const Card = styled.div`
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
export const RecipeCardTitle = styled.h3`
    color: #000;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    margin-left: 15px;
    line-height: 20px;
`;
export const ImageCard =styled.img`
    width: 200px;
    height: 130px;
    margin-left: 15px;
`;
export const DescriptionCard = styled.p`
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
    text-align: left;  
    margin-left: 15px; 
`;
export const LoadMoreWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100%;
    @media (max-width: 768px){
            justify-content: center;
        }
`;
export const LoadMore = styled.button`
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
        @media (max-width: 768px){
            font-size: 20px;
        }
    `;
