import React from "react";
import styled from "styled-components";
import 'primeicons/primeicons.css';

const FilterContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  width: 100%; 
  padding: 10px; 
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 10px;

  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
    padding: 0;
  }
`;
const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  background-color: #f8f8f8;
  border: 1px solid #e0e0e0;
  width: 270px;
   @media (max-width: 768px) {
    width: 70%;
  }
`;
const Title = styled.h3`
  font-size: 18px;
  color: #2B3A39;
  font-weight: 500;
  text-align: left;
  margin-top: 5px;
`;
const InputContainer = styled.div`
  position: relative;
  margin-bottom: 16px;
`;
const SearchIcon = styled.i`
  position: absolute;
  left: 15px;
  top: 38%;
  transform: translateY(-50%);
  color: #ccc;
  font-size: 18px;
`;
const Input = styled.input`
  padding: 8px 8px 8px 36px;
  margin-bottom: 5px;
  width: 216px;
  border: 1px solid #ccc;
  font-size: 16px;
  &:focus {
    outline: none;
    border-color: inherit; 
  }
`;
const Label = styled.label`
  font-size: 16px;
  color: #2b3a39;
  margin-bottom: 8px;
  text-align: left;
`;
const Select = styled.select`
  padding: 8px;
  margin-bottom: 16px;
  font-size: 16px;
  width: 236px;
  border-color: #ccc;
  &:focus {
    outline: none;
    border-color: #000;
  }
`;
const Option = styled.option`
  background-color: #f8f8f8;
  color: #2b3a39;
  font-size: 16px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
  &:hover {
    background-color: #e0e0e0;
  }
`;
const FilterSection = () => {
  return (
    <FilterContainerWrapper>
    <FilterContainer>
      <Title>Пошук за інгредієнтами</Title>
      <Label>Показати рецепти з:</Label>
      <InputContainer>
        <SearchIcon className="pi pi-search" />
        <Input type="text" placeholder="Введіть інгредієнти" />
      </InputContainer>
      <Label>Показати рецепти без:</Label>
      <InputContainer>
        <SearchIcon className="pi pi-search" />
        <Input type="text" placeholder="Введіть інгредієнти" />
      </InputContainer>
      <Title>Фільтри</Title>
      <Select>
        <Option>Тип страви</Option>
        <Option>Сніданок</Option>
        <Option>Обід</Option>
        <Option>Вечеря</Option>
      </Select>
      <Select>
        <Option>Складність</Option>
        <Option>Легко</Option>
        <Option>Середньо</Option>
        <Option>Складно</Option>
      </Select>
      <Select>
        <Option>Час приготування</Option>
        <Option>Менше 30 хв</Option>
        <Option>30-60 хв</Option>
        <Option>Більше 60 хв</Option>
      </Select>
      <Select>
        <Option>Дієтичні опції</Option>
        <Option>Веганські</Option>
        <Option>Вегетаріанські</Option>
        <Option>Безглютенові</Option>
      </Select>
      <Select>
        <Option>Калорійність</Option>
        <Option>Низька</Option>
        <Option>Середня</Option>
        <Option>Висока</Option>
      </Select>
    </FilterContainer>
    </FilterContainerWrapper>
  );
};

export default FilterSection;
