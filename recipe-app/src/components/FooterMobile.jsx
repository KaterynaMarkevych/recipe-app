import React from "react";
import styled from "styled-components";
import 'primeicons/primeicons.css';

const FooterWrapper = styled.div`
    display: flex;
    text-align: center;
    width: 100%;
    @media (min-width: 768px) {
    display: none; 
    }
`;
const FooterContainer = styled.div`
    display: flex;    
    flex-direction: column;
    align-items: center;
    text-align: center;
    background: #8CAABE;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
    width: 420px;
    padding: 20px;
    position: absolute;
    right:0;
    left:0;
`;
const NavigationPart1 = styled.nav`
    display: flex;
    flex-direction: column;
    text-align: left;
    justify-content: left;
    margin-bottom: 0;
`;
const NavigationPart2 = styled(NavigationPart1)``;
const NavigationContainer = styled.div`
  display: flex; /* Розташування навігацій в один рядок */
  justify-content: center; /* Вирівнювання вмісту по лівому краю */
  gap: 50px;
  width: 100%;
  margin-top: 10px; /* Відступ зверху */
`;
const Container = styled(NavigationContainer)`
    margin: 0;
`;
const Info = styled(NavigationPart1)`
  align-items: center;
  text-align: left;
  align-items: flex-start;
  margin-bottom: 0;
`;
const List = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  text-align: left;
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
    justify-content: center;
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
`;
const Developer = styled.span`
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    line-height: 40px;
`;
const Footer = () =>{
    return(
        <>
        <FooterWrapper>
        <FooterContainer>

            <IconContainer>
                <InstaIcon className="pi pi-instagram" />
                <FaceBoockIcon className="pi pi-facebook" />
            </IconContainer>

            <NavigationContainer>
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
        </NavigationContainer>

        <Info>
            <List>
                <ListIteam>
                <Link href="/privacy">Політика конфіденційності</Link>
                </ListIteam>
                <ListIteam>
                <Link href="/terms">Умови використання</Link>
                </ListIteam>
            </List>
        </Info>

        <Container>
            <CopyRight>@ EasyIngrecipes 2024</CopyRight>
            <Developer>Дизайн і розробка klift</Developer>
        </Container>
        
        </FooterContainer>
        </FooterWrapper>
        </>
    );
};
export default Footer;