import React from "react";
import styled from "styled-components";
import 'primeicons/primeicons.css';

const FooterWrapper = styled.div`
  display: flex;
  text-align: center;
    @media (max-width: 768px) {
    display: none; 
    }
`;
const FooterContainer = styled.div`
    display: flex;
    text-align: center;
    justify-content: space-around;
    background: #8CAABE;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
    width: 100%;
    padding: 20px;
    position:absolute;
    right:0;
`;
const NavigationPart1 = styled.nav`
    display: flex;
    flex-direction: column;
    text- align: left;
    justify-content: center;
`;
const NavigationPart2 = styled.nav`
    display: flex;
    flex-direction: column;
    text- align: left;
    justify-content: center;
`;
const Info = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const List = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
`;
const ListIteam = styled.li`
  margin: 10px 0px;
`;
const Link = styled.a`
  color: #000;
  font-family: 'Montserrat', sans-serif;
  font-size: 15px;
  font-style: normal;
  text-decoration: none;
  &:hover {
    color: #000; 
  }
  &:visited, &:active {
    color: #000; 
  }
`;
const IconContainer = styled.div`
    display: flex;
    text-align: center;
    justify-content: space-between;
`;
const InstaIcon = styled.i`
    font-size: 24px;
    cursor: pointer;
    padding: 10px;
`;
const FaceBoockIcon = styled.i`
    font-size: 24px;
    cursor: pointer;
    padding: 10px;
`;
const CopyRight = styled.span`
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    line-height: 40px;
    margin-top: 68px;
`;
const Developer = styled.span`
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    line-height: 40px;
    margin-top: 68px;
`;
const FooterMobile = () =>{
    return(
        <>
        <FooterWrapper>
        <FooterContainer>
            <CopyRight>@ EasyIngrecipes 2024</CopyRight>
            <Info>
            <List>
                <ListIteam>
                    <Link href="/privacy">Політика конфіденційності</Link>
                </ListIteam>
                <ListIteam>
                    <Link href="/terms">Умови використання</Link>
                </ListIteam>
            </List>
            <IconContainer>
             <InstaIcon className="pi pi-instagram"/>
             <FaceBoockIcon className="pi pi-facebook"/>   
            </IconContainer>
          </Info>
          <NavigationPart1>
            <List>
              <ListIteam>
                <Link href="/national_cuisine">Національна кухня</Link>
              </ListIteam>
              <ListIteam>
                <Link href="/cook_type">Тип кухні</Link>
              </ListIteam>
            </List>
          </NavigationPart1>
          <NavigationPart2>
            <List>
                <ListIteam>
                <Link href="/recipes_list">Список рецептів</Link>
              </ListIteam>
              <ListIteam>
                <Link href="/profile">Профіль</Link>
              </ListIteam>
              <ListIteam>
                <Link href="/#about-us">Про нас</Link>
              </ListIteam>
            </List>
          </NavigationPart2>
          <Developer>Дизайн і розробка klift</Developer>
        </FooterContainer>
        </FooterWrapper>
        </>
    );
};
export default FooterMobile;