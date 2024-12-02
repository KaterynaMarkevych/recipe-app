import React, {useState} from "react";
import styled from "styled-components";

const AboutUsContainer = styled.div`
    display: flex;
    width: 100%;
    max-width: 1340px;
    margin: 0 auto;
    flex-direction: column;
    justify-content: left;
    padding: 20px;
    @media (max-width: 768px){
        max-width: 300px;
    }
`;
const Title = styled.h2`
    color: #2B3A39;
    font-size: 24px;
    font-weight: 500;
    line-height: 40px;
    text-align: left;
    @media (max-width: 768px){
        font-size: 20px;
        margin: 0;
    }
`;
const Text = styled.p`
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 40px;
    text-align: left;
    @media (max-width: 768px) {
    display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  }
`;
const ButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;
const ToggleButton = styled.button`
  color: #2B3A39;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  border: none;
  background: none;
  margin-bottom: 20px;
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
    @media (min-width: 768px){
    display: none;
    }
`;
const AboutUs = () => {
    const [visibleParagraphs, setVisibleParagraphs] = useState(1);

    const paragraphs = [
        "EasyIngrecipes – ваш надійний помічник у приготуванні смачних страв! Не знаєте, що приготувати на вечерю, обід чи святковий стіл?",
        "EasyIngrecipes допоможе кожній господині знайти ідеальний рецепт для будь-якої події. У нас є рішення для кожного: вегетаріанці, вегани, любителі м'яса – всі знайдуть смачні та корисні варіанти.",
        "Якщо ви не хочете витрачати багато часу на приготування або не впевнені у своїх кулінарних навичках, у нас є опція вибору складності та часу приготування страв. Просто введіть інгредієнти, які є у вашому холодильнику, і наш сайт запропонує рецепти, що підійдуть саме вам.",
        "Наша місія – зробити кулінарію доступною, легкою та захоплюючою для кожного, незалежно від вашого рівня майстерності або наявних інгредієнтів.",
    ];

    const handleShowMore = () => {
        setVisibleParagraphs((prev) => Math.min(prev + 1, paragraphs.length));
    };

    const handleCollapse = () => {
        setVisibleParagraphs(1);
    };
    return (
        < >
        <AboutUsContainer id="about-us">
        <Title>Про нас</Title>
        {paragraphs.map((text, index) => (
          <Text
            key={index}
            isVisible={index < visibleParagraphs || window.innerWidth > 768}
          >
            {text}
          </Text>
        ))}
        </AboutUsContainer>
        <ButtonsContainer>
        {visibleParagraphs < paragraphs.length && (
          <ToggleButton onClick={handleShowMore}>Показати більше</ToggleButton>
        )}
        {visibleParagraphs > 1 && (
          <ToggleButton onClick={handleCollapse}>Згорнути</ToggleButton>
        )}
        </ButtonsContainer>
        </>
    );    
}
export default AboutUs;