import React from "react";
import styled from "styled-components";
import 'primeicons/primeicons.css';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start; 
    width: 1220px;
    @media (max-width: 768px){
    width: 330px;
    }
`;
const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;
const Title = styled.h2`
    color: #2B3A39;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 40px; 
    @media (max-width: 768px){
    font-size: 24px;
    line-height: 20px;
    }
`;
const Input = styled.input`
    padding: 8px 60px 8px 8px;  
    margin-bottom: 5px;
    width: 412px;
    height: 36px;
    border: 1px solid #ccc;
    font-size: 18px;
    &:focus {
        outline: none;
        border-color: inherit; 
    }
    @media (max-width: 768px){
    width: 240px;
    padding: 8px 60px 8px 8px;
    }    
`;
const Icon = styled.i`
    font-size: 24px;
    color: #A6A4A4;
    position: absolute;
    left: 580px;
    cursor: pointer;
    @media (max-width: 768px){
    left: 315px;
    font-size: 20px;
    } 
`;
const Span = styled.span`
    color: #000;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; 
    cursor: pointer;
    margin-bottom: 40px;
    @media (max-width: 768px){
    margin-bottom: 20px;
    } 
`;
const SpanIcon = styled.i`
    font-size: 18px;
    color: #A6A4A4;
    cursor: pointer;
    padding: 10px;
`;
const CommentsSection = () => {
    return(
        <>
        <Wrapper>
            <Title>Коментарі</Title>
            <InputContainer>
                <Input placeholder="Додати коментар"></Input>  
                <Icon className="pi pi-send"/>
            </InputContainer>
            <Span>
            2 коментарі 
            <SpanIcon className="pi pi-arrow-right"/>
            </Span>
        </Wrapper>
        </>
    );
};
export default CommentsSection;