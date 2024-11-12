import React from "react";
import styled from "styled-components";

const AboutUsContainer = styled.div`
    display: flex;
    width: 100%;
    max-width: 1340px;
    margin: 0 auto;
    flex-direction: column;
    justify-content: left;
    padding: 20px;
`;
const Title = styled.h2`
    color: #2B3A39;
    font-size: 24px;
    font-weight: 500;
    line-height: 40px;
    text-align: left;
`;
const Text = styled.p`
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 40px;
    text-align: left;
`;

const AboutUs = () => {
    return (
        <>
        <AboutUsContainer>
            <Title>Про нас</Title>
            <Text>EasyIngrecipes – ваш надійний помічник у приготуванні смачних страв!Не знаєте, що приготувати на вечерю, обід чи святковий стіл? </Text>
            <Text>EasyIngrecipes допоможе кожній господині знайти ідеальний рецепт для будь-якої події. У нас є рішення для кожного: вегетаріанці, вегани, любителі м'яса – всі знайдуть смачні та корисні варіанти.</Text>
            <Text>Якщо ви не хочете витрачати багато часу на приготування або не впевнені у своїх кулінарних навичках, у нас є опція вибору складності та часу приготування страв. Просто введіть інгредієнти, які є у вашому холодильнику, і наш сайт запропонує рецепти, що підійдуть саме вам.</Text>
            <Text>Наша місія – зробити кулінарію доступною, легкою та захоплюючою для кожного, незалежно від вашого рівня майстерності або наявних інгредієнтів.</Text>
        </AboutUsContainer>
        </>
    );    
}
export default AboutUs;