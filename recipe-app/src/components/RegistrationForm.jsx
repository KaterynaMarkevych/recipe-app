import React, {useState} from "react";
import styled from "styled-components";
import 'primeicons/primeicons.css';

const Registrationform = styled.div`
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
  z-index: 10;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
  width: 300px;
  height: 424px;
  }
`;
const BackIcon = styled.i`
  position: absolute;
  top: 34px;
  left: 44px;
  font-size: 24px;
  color: #A6A4A4;
  cursor: pointer;
  @media (max-width: 768px) {
  top: 38px;
  left: 27px;
  }
`;
const CloseIcon = styled.i`
  position: fixed;
  top: 38px;
  right: 50px;
  font-size: 24px;
  color: #A6A4A4;
  cursor: pointer;
  @media (max-width: 768px) {
  top: 38px;
  right: 27px;
  }
`;
const RegistrationHeader = styled.h2`
  color: #2B3A39;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 44px;
  @media (max-width: 768px) {
  font-size: 24px;
  }
`;
const RegistrationInputContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 14px;
`;
const RegisrationIcon = styled.i`
  position: absolute;
  left: 23px;
  font-size: 18px;
  color: #A6A4A4;
`;
const RegistrationInput = styled.input`
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
    @media (max-width: 768px) {
    font-size: 20px;
    width: 235px;
    }
`;
const CreateAcountButton = styled.button`
  width: 246px;
  height: 54px;
  border-radius: 14px;
  border: 1px solid #000;
  background: #B9D7EA;
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  text-align: center;
  font-weight: 400;
  line-height: 20px;
  margin-top: 28px;
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
    width: 240px;
    height: 46px;
    font-size: 20px;
    margin-top: 20px;
    }
`;
const RegistrationForm = ({show, onClose}) => {
    return(
        <>
        <Registrationform show={show}>
          <BackIcon className="pi pi-arrow-left"onClick={onClose} /> 
          <CloseIcon className="pi pi-times" onClick={onClose}/>
          <RegistrationHeader>Реєстрація</RegistrationHeader>
          <RegistrationInputContainer>
            <RegisrationIcon className="pi pi-user"/>
            <RegistrationInput type="text" placeholder="Ім'я"/>
          </RegistrationInputContainer>
          <RegistrationInputContainer>
            <RegisrationIcon className="pi pi-envelope"/>
            <RegistrationInput type="text" placeholder="Email"/>
          </RegistrationInputContainer>
          <RegistrationInputContainer>
            <RegisrationIcon className="pi pi-lock"/>
            <RegistrationInput type="password" placeholder="Пароль"/>
          </RegistrationInputContainer>
          <RegistrationInputContainer>
            <RegisrationIcon className="pi pi-lock"/>
            <RegistrationInput type="password" placeholder="Підтвердіть пароль"/>
          </RegistrationInputContainer>
          <CreateAcountButton>Створити акаунт</CreateAcountButton>
        </Registrationform>
        </>
    );
}

export default RegistrationForm;