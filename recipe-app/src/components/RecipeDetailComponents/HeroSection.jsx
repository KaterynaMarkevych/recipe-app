import React, { useState } from 'react';
import styled from 'styled-components';
import 'primeicons/primeicons.css';
import userphoto from '../../assets/Ellipse.svg';
import ShoppingListModal from './ShoppingListModal';
import { useNavigate } from "react-router-dom";

const HeroContainer = styled.div`
    display: flex;    
    flex-direction: column;
    justify-content: center; 
    align-items: center; 
    width:1310px;
    margin-top: 200px;
    @media (max-width: 768px){
    max-width: 380px;
    }
`;
const Title = styled.h1`
    color: #2B3A39;
    font-size: 40px;
    font-style: normal;
    font-weight: 500;
    line-height: 40px; 
    text-align: left; 
    margin: 0;
    @media (max-width: 768px){
    font-size: 24px;
    }
`;
const RatingWrapper = styled.div`
    display: flex; 
    flex-direction: column;
    align-items: left; 
    width: 100%;
    margin-left: 65px;
`;
const RatingContainer = styled.div`
    display: flex;
    flex-direction: start:
    text-align: left;
`;
const Stars = styled.div`
    color: #2B3A39;
    font-size: 24px;
    text-align: left;
    margin-right: 10px;
    align-items: left; 
    @media (max-width: 768px){
    font-size: 20px;
    } 
`;
const Rating = styled.p`
    color: #000;
    font-size: 24px;
    font-weight: 400;
    line-height: 40px; 
    margin: 0;
    @media (max-width: 768px){
    font-size: 20px;
    } 
`;
const RatingButton = styled.button`
    color: #2B3A39;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    cursor: pointer;
    border: none;
    background: none;
    text-align: left;  
    padding: 0;
    margin-bottom: 40px;
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
const RecipeInfo = styled.div`
    display: flex;
    justify-content: space-between; 
    align-items: flex-start;
    width: 1220px;
    background-color: #8CAABE;
    padding: 42px;
        @media (max-width: 768px){
        flex-direction: column; 
        width: 280px;
        padding: 20px;
    }
`;
const Image = styled.img`      
    width: 668px; 
    height: auto;
    margin-left: -80px;
    @media (max-width: 768px){
        width: 253px;
        margin-left: 0px;
    }
`;
const ImageWrapper = styled.div`
    width: 100%;  
    max-width: 1000px; 
    height: auto;
`;
const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const DescriptionContainer = styled.div`
    display: flex;  
    flex-direction: column;
    text-align: left;
    padding-bottom: 30px;
    padding-left: 30px;
    @media (max-width: 768px){
        padding-left: 20px;
        max-width: 280px;
    }
`;  
const Description = styled.p`
    color: #2B3A39;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px;
    margin: 0;
    @media (max-width: 768px){
        font-size: 20px;
        max-width: 280px;
    }
`;
const DescriptionSpan = styled.span`
    color: #000;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px;
    @media (max-width: 768px){
        font-size: 20px;
    }
`;
const Line = styled.line`
    display: block;  
    width: 448px;
    height: 0.5px;
    background:  #2B3A39;
    margin: 40px 0 20px 0;
    @media (max-width: 768px){
        width: 280px;
        margin: 10px 0 10px 0;
    }
`;
const ButtonsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0;
`;
const SaveRecipeButton = styled.button`
    color: #2B3A39;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    cursor: pointer;
    border: none;
    background: none;
    margin-left: 0 auto;
    text-align: left;
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
        font-size: 18px;
    }
`;
const ShareRecipeButton = styled(SaveRecipeButton)``;
const ShopingListButton = styled(SaveRecipeButton)``;
const PrintButton = styled(SaveRecipeButton)``;
const Icon = styled.i`
    font-size: 24px;
    cursor: pointer;
    padding: 10px;
    @media (max-width: 768px){
        font-size: 20px;
    }
`;
const UserContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 20px;
    width: auto;
    padding: 40px; 
    height: 120px;
    cursor: pointer;
    @media (max-width: 768px){
        padding: 20px; 
        height: 20px;
    }
`;
const UserPhoto = styled.img`
    width: 100px; 
    height: 100px;
    border-radius: 50%;
    @media (max-width: 768px){
        width: 50px; 
        height: 50px;
    }
`;
const UserName = styled.p`
    color: #000;
    font-size: 24px;
    font-weight: 400;
    line-height: 1.2; 
    margin-left: 10px; 
    @media (max-width: 768px){
    font-size: 20px;
    }
`;
const Wrapper = styled.div`
    display: flex; 
    flex-direction: column; 
    margin-left: 20px;
    @media (max-width: 768px){
    margin-left: 0px;
    margin-top: 20px;
    }
`;
const HeroSection = ({ recipe }) => {
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
          stars.push(i < rating ? "★" : "☆");
        }
        return stars.join(" ");
      };
    // Функція для відображення кухні та дієтичних варіантів
    const renderCuisineType = (cuisineType) => {
        // Отримуємо назву кухні
        const cuisineName = Object.keys(cuisineType.cuisine).find(
            (key) => cuisineType.cuisine[key]
        );
        
        // Отримуємо дієтичні обмеження, які є true
        const dietOptions = Object.entries(cuisineType.diet)
            .filter(([, value]) => value)
            .map(([key]) => key)
            .join(', ');

        // Форматування для відображення
        return `${cuisineName ? cuisineName : 'Невідома'}${dietOptions ? ` кухня , ${dietOptions}` : ''}`;
    };
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    
    const navigate = useNavigate();

    const handleUserClick = () => {
        if (recipe.user && recipe.user[0] && recipe.user[0].id) {
            navigate(`/user/${recipe.user[0].id}`);
        }
    };  
    return (
    <>
    <HeroContainer>
        <RatingWrapper>
           <Title>{recipe.name}</Title>
      <RatingContainer>
        <Stars>{renderStars(recipe.rating)}</Stars>
        <Rating>оцінили 34</Rating>
      </RatingContainer>
      <RatingButton>Оцінити рецепт</RatingButton> 
        </RatingWrapper>
      <RecipeInfo>
            <ImageWrapper>
                <Image src={recipe.image} alt={recipe.name} />
                <UserContainer onClick={handleUserClick}>
                    <UserPhoto src={recipe.user[0]?.profilePhoto} alt={`${recipe.user[0]?.name}'s profile`} />
                    <UserName>{recipe.user[0]?.name}</UserName>
                </UserContainer>
            </ImageWrapper>
            <Wrapper>
                <DescriptionWrapper>
                    <DescriptionContainer>
                        <Description>Час приготування</Description>
                        <DescriptionSpan>{recipe.time}</DescriptionSpan>
                    </DescriptionContainer>
                    <DescriptionContainer>
                        <Description>Кількість порцій</Description>
                        <DescriptionSpan>{recipe.portions}</DescriptionSpan>
                    </DescriptionContainer>
                    <DescriptionContainer>
                        <Description>Тип страви</Description>
                        <DescriptionSpan>{renderCuisineType(recipe.cuisine_type)}</DescriptionSpan>
                    </DescriptionContainer>
                </DescriptionWrapper>
                <Line />
                <ButtonsWrapper>
                    <SaveRecipeButton>
                        <Icon className='pi pi-plus'/>
                        Додати рецепт
                    </SaveRecipeButton>
                    <ShareRecipeButton>
                        <Icon className='pi pi-share-alt'/>
                        Поділитися рецептом
                    </ShareRecipeButton>
                    <ShopingListButton onClick={handleOpenModal}>
                        <Icon className='pi pi-list'/>
                        Список покупок
                    </ShopingListButton>

                    {isModalOpen && (
                        <ShoppingListModal 
                            ingredients={recipe.ingredients} 
                            onClose={handleCloseModal} 
                        />
                    )}
                    <PrintButton>
                        <Icon className='pi pi-print'/>
                        Надрукувати
                    </PrintButton>
                </ButtonsWrapper>
            </Wrapper>
            
        </RecipeInfo>     
    </HeroContainer>
    </>
    
  );
};

export default HeroSection; 