import React from "react";
import styled from "styled-components";
import photo1 from "../assets/picture1.svg";
import photo2 from "../assets/picture2.svg";
import photo3 from "../assets/picture3.svg";
import photo4 from "../assets/picture4.svg";
import mobilephoto from "../assets/heromobile.svg";

const HeroSectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    max-width: 100%; 
    margin: 0 auto;
    margin-top: 250px;
    padding: 0 20px;
    @media (max-width: 768px){
        max-width: 340px;
        margin-top: 200px;
    }
`;
const HeroHeader = styled.h2`
    color: #2B3A39;
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    font-size: 40px;
    font-style: medium;
    font-weight: 400;
    line-height: 40px;
    padding-bottom: 30px;
    @media (max-width: 768px) {
        font-size: 24px;
        padding-bottom: 10px;
        line-height: 20px;
    }
`;
const BackgroundHero = styled.div`
    align-items: center; // Центрування по горизонталі
    justify-content: center; // Центрування по вертикалі 
    width: 100%;
    height: 714px;
    background: #8CAABE;
    @media (max-width: 768px){
        height: 224px;
    }
    
`;
const HeroText = styled.p`
    display: flex;
    justify-content: center;
    width: 585px;
    color: #2B3A39;
    text-align: center;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-family: Buenard;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 40px;
    position: absolute;
    margin-left:  15px;
    @media (max-width: 768px){
        display: none;
    }
`;
const HeroText2 = styled(HeroText)`
    top: 924px;
    right: 195px;
    width: 305px;
    @media (max-width: 768px){
        display: none;
    }
`;
const PhotoContainer = styled.div`
    justify-content: center;
    position: absolute;
    margin: 55px auto; 
    @media (max-width: 768px){
        margin: 0 auto;
    }
`;
const Photo1 = styled.img`
    position: absolute;
    top: 290px;
    left: 532px;
    @media (max-width: 768px){
        display: none;
    }
`;
const Photo2 = styled.img`
    position: absolute;
    top: 118px;
    left: 50px;
    @media (max-width: 768px){
        display: none;
    }   
`;
const Photo3 = styled.img`
    position: absolute;
    top: 178px;
    left: 814px;
    @media (max-width: 768px){
        display: none;
    }
    
`;
const Photo4 = styled.img`
    position: absolute;
    top: 64px;
    left: 514px;
    @media (max-width: 768px){
        display: none;
    }
`;
const MobilePhoto = styled.img`
    width: 296px;
    padding: 20px;
    @media (min-width: 768px){
        display: none;
    }
`;
const Line = styled.line`
    display: block;  
    width: 100%;
    height: 1px;
    background: #A6A4A4;
    margin: 40px auto;
    @media (max-width: 768px){
        width: 100%
    }
`;
const HeroSection = () => {
 return(
    <>
        <HeroSectionContainer>
            <HeroHeader>Знаходь рецепти своїх улюблених страв</HeroHeader>
            <BackgroundHero>
                <HeroText>Не знаєш що приготувати? Шукай рецепти з продуктів які вже є у твоєму холодильнику!</HeroText>
                <PhotoContainer>
                    <Photo1 src={photo1} alt="Photo1"/>
                    <MobilePhoto src={mobilephoto} alt="Photo"/>
                    <Photo2 src={photo2} alt="Photo2"/>
                    <Photo3 src={photo3} alt="Phpto3"/>
                    <Photo4 src={photo4} alt="Photo4"/>
                </PhotoContainer>
                <HeroText2>Використовуй пошук за інгредієнтами</HeroText2>
            </BackgroundHero>
            <Line/>
        </HeroSectionContainer>
    </>
 );
}
export default HeroSection; 