import React, { useState} from 'react';
import styled from "styled-components";
import 'primeicons/primeicons.css';
import logo from "../assets/logo.svg";

const HeaderContainer = styled.header`
    display: flex;
    text-align: center;
    justify-content: space-between;
    padding: 30px;
    position:fixed;
    top:0;
    right:0;
    left:0;
    background: #8CAABE;
    height: 148px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    z-index: 3;
`;
const Logo = styled.img`
  width: 123.311px;
  height: 82.905px;
  position: fixed;
  top: 54px;
  left: 74px;
  @media (max-width: 768px) {
    position: relative;
    top: -20px;
    left: -10px;
  }
`;
const SearchField = styled.input`
  width: 700px;
  height: 40px;
  border-radius: 30px;
  border: 1px solid #000;
  background: #F7FBFC;
  position:fixed;
  top:30px;
  left:368px;
  padding-left: 30px; 
   &::placeholder {
    color: #000;
    font-family: 'Montserrat', sans-serif;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  } 
    &:focus {
    outline: none;
    border-color: #000;
    color: #000; 
  }
    @media (max-width: 768px) {
    width: 270px;
    margin-top: 90px;
    left: 13px;
  }
`;
const SearchIcon = styled.i`
  position: absolute;
  top: 42px;
  left: 1040px; 
  color: #000;
  font-size: 18px; 
  @media (max-width: 768px) {
  left: 268px;
  top: 130px;
  }
`;
const Navigation = styled.nav`
display: none;
  @media (min-width: 768px) {
    position: fixed;
    left: 268px;
    top: 114px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 768px) {
    display: ${props => (props.showMenu ? 'flex' : 'none')};
    flex-direction: column;
    align-items: left;
    background: #F7FBFC;
    width: 100%;
    position: absolute;
    top: 120px;
    right: 0.1%;
    padding-top: 50px;
    z-index: 3;
    
  }
`;
const List = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start; 
    padding-left: 50px; 
  }
`;
const ListIteam = styled.li`
  margin: 0 52px;
  @media (max-width: 768px) {
    margin: 10px 0;
  }
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
const LogInButton = styled.button`
  width: 108px;
  height: 46px;
  border-radius: 15px;
  border: 1px solid #000;
  background: #D6E6F2;
  position: fixed;
  top: 30px;
  left: 1200px;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  &:hover {
    background: #B9D7EA;
    border: 1px solid #000;
  }
  &:focus {
    outline: none;
  }
  &:active {
    border: none; 
  }
    @media (max-width: 768px) {
    top: 30px;
    left: 250px;
  }
`;
const AddRecipeButton = styled.button`
  width: 156px;
  height: 46px;
  border-radius: 15px;
  border: 1px solid #000;
  background: #D6E6F2;
  position: fixed;
  top: 30px;
  left: 1342px;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  &:hover {
    background: #B9D7EA;
    border: 1px solid #000;
  }
  &:focus {
    outline: none;
  }
  &:active {
    border: none; 
  }
    @media (max-width: 768px){
    display: none;
    }
`;
const BurgerMenu = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 132px;
    right: 20px;
    font-size: 24px;
    cursor: pointer;
    color: #000;
  }
`;
const CloseIcon = styled.i`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 24px;
  color: #000;
  cursor: pointer;
  @media (min-width: 768px) {
    display: none;
  }
`;
const Overlay = styled.div`
  display: ${props => (props.show ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
  z-index: 2;
`;
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
    return (
      <>
        <HeaderContainer>
        <Logo src={logo} alt="EasyIngrecipes" onClick={() => window.location.href = '/home'} />
        <SearchField placeholder="Пошук рецепту" />
        <SearchIcon className="pi pi-search" />
        <BurgerMenu onClick={() => setMenuOpen(!menuOpen)} className="pi pi-bars" />

          <Navigation showMenu={menuOpen}>
          <CloseIcon onClick={() => setMenuOpen(false)} className="pi pi-times" />
            <List>
              <ListIteam>
                <Link href="/national_cuisine">Національна кухня</Link>
              </ListIteam>
              <ListIteam>
                <Link href="/cook_type">Тип кухні</Link>
              </ListIteam>
              <ListIteam>
                <Link href="/recipes_list">Список рецептів</Link>
              </ListIteam>
              <ListIteam>
                <Link href="/profile">Профіль</Link>
              </ListIteam>
              <ListIteam>
                <Link href="/about">Про нас</Link>
              </ListIteam>
            </List>
          </Navigation>

          <LogInButton>Увійти</LogInButton>
          <AddRecipeButton>Додати рецепт</AddRecipeButton>
        </HeaderContainer>
        <Overlay show={menuOpen} onClick={() => setMenuOpen(false)} />
      </>
    )
  }
  
  export default Header