import React, {useState} from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import recipes from "../../data/mockRecipes";
import {RecipeWrapper, RecipesTitle, Icon, TiteContainer, TitleSpan,
    RecipeContainer, Grid, Card, RecipeCardTitle, ImageCard,
    DescriptionCard, LoadMoreWrapper, LoadMore,
} from "./Recipes";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    margin: 240px 0 40px 0;
`;
const Container = styled.div`
    display: flex;
    flex-direction: start;    
    padding: 20px;
    align-items: left; 
`;
const UserDescriptionContainer = styled(Container)`
    flex-direction: column;
    text-align: left;
    justify-content: center;
`;
const ProfileSection = styled.div`
    width: 1200px;
    padding: 20px;    
    background-color: #8CAABE; 
    display: flex;  
    justify-content: space-between; 
`;
const UserPhoto = styled.img`
    width: 228px;
    height: 245px;
    border-radius: 50%;
    margin-bottom: 10px;
    align-items: left;
`;
const UserName = styled.h2`
    color: #000;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    margin: 0;
`;
const UserDescription = styled.p`
    margin: 10px 0;
    color: #2B3A39;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px;
    width: 334px;
`;
const StatsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start; 
    text-align: left;
    margin-top: 50px;
`;
const Stats = styled(StatsContainer)`
    flex-direction: row;
    margin-top: 20px;
`;
const PublishStat = styled(Stats)`
    margin-top: 20px;
`;
const StatItem = styled(UserDescription)`
  color: #000;
  margin-left: 0;
`;
const FollowingStatItem = styled(UserDescription)`
  color: #000;
  margin-left: -120px;
`;
const Span = styled.span`
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 40px;
`;
const Line = styled.line`
    display: block;  
    width: 100%;
    height: 1px;
    background: #A6A4A4;
    margin: 80px 0 40px 0;
    @media (max-width: 768px){
        width: 338px;
    }
`;

const UserPage = () => {
    const { userId } = useParams();
    const navigate = useNavigate(); 

    const user = recipes
        .flatMap((recipe) => recipe.user) 
        .find((u) => u.id === Number(userId)); 

    const userRecipes = recipes.filter((recipe) => recipe.user[0].id === Number(userId));
    const [visibleRecipes, setVisibleRecipes] = useState(4); // Початкова кількість видимих рецептів
    const [isExpanded, setIsExpanded] = useState(false); // Стан кнопки LoadMore

    const handleToggleRecipes = () => {
        if (isExpanded) {
          setVisibleRecipes(4); // Повернути до початкових 4 рецептів
        } else {
          setVisibleRecipes(userRecipes.length); // Показати всі рецепти
        }
        setIsExpanded(!isExpanded); // Перемкнути стан кнопки
    };
    // Функція для переходу на сторінку деталей рецепта
    const handleRecipeClick = (recipeId) => {
        navigate(`/recipes/${recipeId}`); // Змінюємо URL
    };

    if (!user) {
        return (
        <>
            <Header />
                <Container>
                <h2>Користувача не знайдено</h2>
                </Container>
                <Footer />
            </>
            );
        }

    return (
        <>
        <Header />
            <Wrapper>
             <ProfileSection>
                <Container>
                    <UserPhoto src={user.profilePhoto} alt={user.name} />
                    <UserDescriptionContainer>
                        <UserName>{user.name}</UserName>
                        <UserDescription>{user.bio || "Опис відсутній"}</UserDescription>
                    </UserDescriptionContainer>
                </Container>
                
                <StatsContainer>
                    <Stats>
                        <StatItem>
                            <Span>{user.followers || 0}</Span> підписників
                        </StatItem>
                        <FollowingStatItem>
                            <Span>{user.following || 0}</Span> підписки
                        </FollowingStatItem>
                    </Stats>
                    <PublishStat>
                        <StatItem>
                            <Span>{recipes.filter((recipe) => recipe.user[0].id === Number(userId)).length}</Span> опублікованих рецептів
                        </StatItem>
                    </PublishStat>  
                </StatsContainer>
                </ProfileSection>

                <Line/>
                <RecipeWrapper>
                    <TiteContainer>
                        <Icon className="pi pi-book"/>
                        <RecipesTitle>Рецепти
                            <TitleSpan>({recipes.filter((recipe) => recipe.user[0].id === Number(userId)).length})</TitleSpan>
                        </RecipesTitle>
                    </TiteContainer>
                    
                <RecipeContainer>
                    <Grid>
                    {userRecipes.slice(0, visibleRecipes).map((recipe) => (
                        <Card key={recipe.id} onClick={() => handleRecipeClick(recipe.id)}>
                        <ImageCard src={recipe.image} alt={recipe.name} />
                        <RecipeCardTitle>{recipe.name}</RecipeCardTitle>
                        <DescriptionCard>{recipe.description}</DescriptionCard>
                        </Card>
                    ))}
                    </Grid>
                </RecipeContainer> 
                {userRecipes.length > 4 && (
                    <LoadMoreWrapper>
                        <LoadMore onClick={handleToggleRecipes}>
                            {isExpanded ? "Згорнути рецепти" : "Показати ще рецепти"}
                        </LoadMore>
                    </LoadMoreWrapper>
                )}
                </RecipeWrapper> 
            </Wrapper>
      <Footer />
    </>
  );
};

export default UserPage;
