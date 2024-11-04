import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { FaSearch } from 'react-icons/fa'; 
import 'primeicons/primeicons.css';
import logo from "../assets/logo.png";

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
    @media (max-width: 1110px){
    position: relative; 
  }
`;
const Logo = styled.img`
  width: 123px;
  height: 82px;
  position: fixed;
  top: 54px;
  left: 74px;
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
`;
const SearchIcon = styled.i`
  position: absolute;
  top: 42px;
  left: 1040px; 
  color: #000;
  font-size: 18px; 
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
`;
const List = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
`;
const ListIteam = styled.li`
  margin: 0 52px;
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
`;

const Header = () => {
    return (
      <>
        <HeaderContainer>
        <Logo src={logo} alt="EasyIngrecipes" onClick={() => window.location.href = '/home'} />
        <SearchField placeholder="Пошук за назвою рецепта або інгредієтами"></SearchField>
        <SearchIcon className="pi pi-search" />
        <Navigation>
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
      </>
    )
  }
  
  export default Header