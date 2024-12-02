import React from "react";
import styled from "styled-components";
import 'primeicons/primeicons.css';

const Wrapper = styled.div`
display: flex;
    justify-content: center; 
    align-items: flex-start; 
    gap: 20px;
    width: 1220px;
    padding: 0;
    @media (max-width: 768px){
        width: 300px;
        flex-direction: column;
        align-items: center; 

    }
`;
const DescriptionContainer= styled.div`
  flex: 1;
  width: 610px;
  text-align: left;
  @media (max-width: 768px){
  width: 300px;
  }
`;
const PhotoContainer = styled.div`
    text-align: left;
    flex: 1;
    width: 600px;
    height: 300px;
    border: 2px dashed #000;
    display: flex;
    justify-content: center; 
    align-items: center; 
    position: relative;

    /* Стиль для горизонтальної і вертикальної лінії */
    &::before,
    &::after {
        content: "";
        position: absolute;
        border-color: #000;
    }

    /* Горизонтальна лінія */
    &::before {
        width: 100%;
        height: 0;
        top: 50%;
        left: 0;
        border-top: 2px dashed #000;
    }

    /* Вертикальна лінія */
    &::after {
        height: 100%;
        width: 0;
        left: 50%;
        top: 0;
        border-left: 2px dashed #000;
    }
        @media (max-width: 768px){
        display: none;
        }
`;
const PhotoContainerMobile = styled.div`
    text-align: left;
    width: 300px;
    height: 200px !important;
    border: 2px dashed #000;
    display: flex;
    justify-content: center; 
    align-items: center; 
    position: relative;

    /* Стиль для горизонтальної і вертикальної лінії */
    &::before,
    &::after {
        content: "";
        position: absolute;
        border-color: #000;
    }

    /* Горизонтальна лінія */
    &::before {
        width: 100%;
        height: 0;
        top: 50%;
        left: 0;
        border-top: 2px dashed #000;
    }

    /* Вертикальна лінія */
    &::after {
        height: 100%;
        width: 0;
        left: 50%;
        top: 0;
        border-left: 2px dashed #000;
    }
        @media (min-width: 768px){
        display: none;
        }
`;
const Title = styled.h2`
    color: #2B3A39;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 40px;
    @media (max-width: 768px){
    font-size: 24px;
    line-height: 20px;
    } 
`;
const Description = styled.p`
    width: 432px;
    color: #000;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 40px; 
    @media (max-width: 768px){
    font-size: 18px;
    line-height: 20px;
    width: 300px;
    }
`;
const Icon = styled.i`
    font-size: 32px;
    color: #2B3A39;
    position: relative;
    z-index: 1; 
    background-color: #fff;
    padding: 8px; 
    @media (max-width: 768px){
    font-size: 24px;
    line-height: 20px;
    }
`;
const Line = styled.line`
    display: block;  
    width: 1305px;
    height: 0.5px;
    background:  #ccc;
    margin: 40px 0 20px 0;
    @media (max-width: 768px){
    width: 330px;
    margin: 30px 0 10px 0;
    }
`;
const PhotoSection = () => {
    return(
        <>
        <Wrapper>
            <DescriptionContainer>
                <Title>Додайте фото</Title>
                <Description>Якщо ви вже проготували страву за цим рецептом, можете поділитися</Description>
            </DescriptionContainer>
            <PhotoContainer>
                <Icon className="pi pi-camera" />
            </PhotoContainer>
            <PhotoContainerMobile>
                <Icon className="pi pi-camera" />
            </PhotoContainerMobile>
        </Wrapper>
        <Line/>
        </>
    );
};
export default PhotoSection;