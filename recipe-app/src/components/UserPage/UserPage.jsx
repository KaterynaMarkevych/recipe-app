import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import mockRecipes from "../../data/mockRecipes";

const UserPage = () => {
    
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
            <Container>
                <ProfileSection>
                    <UserPhoto src={user.profilePhoto} alt={user.name} />
                    <UserName>{user.name}</UserName>
                    <UserDescription>{user.bio || "Опис відсутній"}</UserDescription>
                    <Stats>
                        <StatItem>
                            <strong>{user.recipesCount || 0}</strong> Рецептів
                        </StatItem>
                        <StatItem>
                            <strong>{user.followers || 0}</strong> Підписників
                        </StatItem>
                        <StatItem>
                            <strong>{user.following || 0}</strong> Підписок
                        </StatItem>
                    </Stats>
                </ProfileSection>
            </Container>
            <Footer />
        </>
    );
};

export default UserPage;

// Styles
const Container = styled.div`
    max-width: 800px;
    margin: 20px auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ProfileSection = styled.div`
    text-align: center;
`;

const UserPhoto = styled.img`
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin-bottom: 10px;
`;

const UserName = styled.h2`
    margin: 0;
    font-size: 24px;
    font-weight: bold;
`;

const UserDescription = styled.p`
    margin: 10px 0;
    color: #666;
`;

const Stats = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
`;

const StatItem = styled.div`
    text-align: center;

    strong {
        font-size: 18px;
        display: block;
        color: #333;
    }
`;
