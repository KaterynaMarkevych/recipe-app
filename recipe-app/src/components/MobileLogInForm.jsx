import React, {useState} from 'react';
import styled from 'styled-components';
import 'primeicons/primeicons.css';
import RegistrationForm from './RegistrationForm';

const MobileLoginForm = styled.div`
  display: ${props => (props.show ? 'flex' : 'none')};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 424px;
  padding: 20px;
  background: #D6E6F2;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  z-index: 8;
  flex-direction: column;
  align-items: center;
  
`;
const BackIcon = styled.i`
  position: fixed;
  top: 38px;
  left: 27px;
  font-size: 24px;
  color: #A6A4A4;
  cursor: pointer;
`;
const CloseIcon = styled.i`
    position: fixed;
    top: 38px;
    right: 27px;
    font-size: 24px;
    color: #A6A4A4;
    cursor: pointer;
`;
const LogInFormHeader = styled.h2`
  color: #2B3A39;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 44px;
`;
const LogInInput = styled.input`
  width: 240px;
  height: 46px;
  flex-shrink: 0;
  border: 1px solid #A6A4A4;
  background: #F7FBFC;
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
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
  width: 117px;
  height: 44px;
  border-radius: 14px;
  border: 1px solid #000;
  background: #B9D7EA;
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  text-align: center;
  font-weight: 400;
  line-height: 20px;
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
  top: 325px;
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
  top: 380px;
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
 
const MobileLogInForm = ({ show, onClose }) => {
    const [showRegistrationForm, setShowRegistrationForm] = useState(false); 
    return (
        <>
            <MobileLoginForm show={show}>
                <BackIcon className="pi pi-arrow-left" onClick={onClose} />
                <CloseIcon className="pi pi-times" onClick={onClose} />
                <LogInFormHeader>Увійти</LogInFormHeader>
                <LogInInputContainer>
                    <LogInIcon className='pi pi-envelope'></LogInIcon>
                    <LogInInput type="text" placeholder='Email'></LogInInput>
                </LogInInputContainer>
                <LogInInputContainer>
                    <LogInIcon className="pi pi-lock" ></LogInIcon>
                    <LogInInput type="password" placeholder='Пароль'></LogInInput>
                </LogInInputContainer>
                <LogInFormButton>Увійти</LogInFormButton>
                <ForgetPasswordButton>Забули пароль?</ForgetPasswordButton>
                <RegistrationButton onClick={() => setShowRegistrationForm(true)}>Зареєструватися</RegistrationButton>
            </MobileLoginForm>
            {showRegistrationForm && (
                <RegistrationForm show={showRegistrationForm} onClose={() => setShowRegistrationForm(false)} />
            )}
        </>
    );
}
export default MobileLogInForm;