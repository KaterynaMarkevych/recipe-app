import React, { useState, useEffect} from 'react';
import styled from "styled-components";
import 'primeicons/primeicons.css';
import logo from "../assets/logo.svg";
import MobileLogInForm from './MobileLogInForm';
import RegistrationForm from './RegistrationForm';
import { useNavigate } from 'react-router-dom';

const HeaderWrapper = styled.div`
  display: flex;
  text-align: center;
`;
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
    height: ${props => (props.scrolled ? "74px" : "148px")};
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    z-index: 3;
     @media (max-width: 768px) {
     width: 100%;
     height: 160px;
     }
`;
const Logo = styled.img`
  width: 124px;
  height: 84px;
  position: fixed;
  left: 74px;
  top: ${props => (props.scrolled ? "24px" : "54px")};
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
  padding: 0px 40px 0px 30px;  
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
  left: 320px;
  top: 130px;
  }
`;
const Navigation = styled.nav`
    display: flex; 
    position: fixed;
    left: 268px;
    top: 114px;
    display: flex;
    align-items: center;
    justify-content: center;
  @media (max-width: 768px) {
    display: ${props => (props.showMenu ? 'flex' : 'none')};
    flex-direction: column;
    align-items: left;
    background: #F7FBFC;
    width: 100%;
    position: fixed;
    top: 120px;
    left: 0px;
    padding-top: 50px;
    z-index: 3;
  }
`;
const List = styled.ul`
  list-style-type: none;
  padding: 0;
  display: ${props => (props.scrolled ? "none" : "flex")};
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    z-index: 9;
  }
`;
const ListIteam = styled.li`
  margin: 0 52px;
  @media (max-width: 768px) {
    margin: 10px 0;
    align-items: left;
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
  position: absolute;
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
    left: 330px;
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
    right: 100px;
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
  z-index: 1;
`;
const LoginForm = styled.div`
  display: ${props => (props.show ? 'flex' : 'none')};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 690px;
  height: 458px;
  padding: 20px;
  background: #D6E6F2;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  z-index: 8;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
  display: none;
  }
`;
const LogInFormHeader = styled.h2`
  color: #2B3A39;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 44px;
`;
const LogInInput = styled.input`
  width: 344px;
  height: 46px;
  flex-shrink: 0;
  border: 1px solid #A6A4A4;
  background: #F7FBFC;
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  font-weight: 400;
  line-height: 20px;
  align-items: left;
  padding-left: 60px; 
  &:focus {
    outline: none;
    border-color: #A6A4A4;
  }
`;
const LogInIcon = styled.i`
  position: absolute;
  left: 23px;
  font-size: 18px;
  color: #A6A4A4;
`;
const LogInFormButton = styled.button`
  width: 154px;
  height: 54px;
  border-radius: 14px;
  border: 1px solid #000;
  background: #B9D7EA;
  font-size: 24px;
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
const ForgetPasswordButton = styled.button`
  position: fixed;
  top: 345px;
  align-items: center;
  border: none;
  background: none;
  cursor: pointer;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: 20px;
   &:hover {
    border: none;
  }
  &:focus {
    outline: none;
  }
  &:active {
    border: none; 
  }
`;
const RegistrationButton = styled.button`
  position: fixed;
  top: 400px;
  align-items: center;
  border: none;
  background: none;
  cursor: pointer;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: 20px;
  text-color: #2B3A39;
  &:hover {
    border: none;
  }
  &:focus {
    outline: none;
  }
  &:active {
    border: none; 
  }
`;
const LogInInputContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 34px;
`;
const BackIcon = styled.i`
  position: absolute;
  top: 34px;
  left: 44px;
  font-size: 24px;
  color: #A6A4A4;
  cursor: pointer;
`;
const CloseFormIcon = styled.i`
  position: fixed;
  top: 38px;
  right: 50px;
  font-size: 24px;
  color: #A6A4A4;
  cursor: pointer;
`;
const OverlayForForm = styled(Overlay)``;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false); 
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // встановлюємо значення true, якщо скрол більше 50px
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
    }, []);
    
    const navigate = useNavigate();
    const handleAddRecipe = () => {  
      navigate('/add-recipe'); // Перехід на сторінку додавання рецепта
    };
    return (
      <>
      <HeaderWrapper>
        <HeaderContainer scrolled={scrolled}>
        <Logo src={logo} alt="EasyIngrecipes" onClick={() => window.location.href = '/'}  scrolled={scrolled}/>
        <SearchField placeholder='"борошно, яйця" або "шарлотка"' />
        <SearchIcon className="pi pi-search" />
        <BurgerMenu onClick={() => setMenuOpen(!menuOpen)} className="pi pi-bars" />

          <Navigation showMenu={menuOpen} scrolled={scrolled}>
          <CloseIcon onClick={() => setMenuOpen(false)} className="pi pi-times" />
            <List scrolled={scrolled}>
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
                <Link  href="/#about-us">Про нас</Link>
              </ListIteam>
            </List>
          </Navigation>

          <LogInButton onClick={()=>setShowLoginForm(true)}>Увійти</LogInButton>
          <AddRecipeButton onClick={handleAddRecipe}>Додати рецепт</AddRecipeButton>
        </HeaderContainer>
        
        {showLoginForm && (
          isMobile ? (
            <MobileLogInForm show={showLoginForm} onClose={() => setShowLoginForm(false)} />
          ) : (
            <LoginForm show={showLoginForm}>
              <BackIcon className='pi pi-arrow-left' onClick={() => setShowLoginForm(false)}></BackIcon>
              <CloseFormIcon className='pi pi-times' onClick={() => setShowLoginForm(false)}></CloseFormIcon>
              <LogInFormHeader>Увійти</LogInFormHeader>
              <LogInInputContainer>
                <LogInIcon className="pi pi-envelope" />
                <LogInInput type="text" placeholder="Email" />
              </LogInInputContainer>
              <LogInInputContainer>
                <LogInIcon className="pi pi-lock" />
                <LogInInput type="password" placeholder="Пароль" />
              </LogInInputContainer>
              <LogInFormButton>Увійти</LogInFormButton>
              <ForgetPasswordButton>Забули пароль?</ForgetPasswordButton>
              <RegistrationButton onClick={() => setShowRegistrationForm(true)}>Зареєструватися</RegistrationButton>
            </LoginForm>
          )
        )}
        <RegistrationForm show={showRegistrationForm} onClose={() => setShowRegistrationForm(false)} />

        <Overlay show={menuOpen} onClick={() => setMenuOpen(false)} />
        <OverlayForForm show={showLoginForm || showRegistrationForm} onClick={() => {setShowLoginForm(false);setShowRegistrationForm(false);}} />
      </HeaderWrapper>
    </>
    );
  }
  
  export default Header