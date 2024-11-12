import React from "react";
import styled from "styled-components";
import 'primeicons/primeicons.css';

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  background-color: #f8f8f8;
  border: 1px solid #e0e0e0;
  width: 270px;
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

const FilterSection = () => {
  return (
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
        <option>Тип страви</option>
        <option>Сніданок</option>
        <option>Обід</option>
        <option>Вечеря</option>
      </Select>
      <Select>
        <option>Складність</option>
        <option>Легко</option>
        <option>Середньо</option>
        <option>Складно</option>
      </Select>
      <Select>
        <option>Час приготування</option>
        <option>Менше 30 хв</option>
        <option>30-60 хв</option>
        <option>Більше 60 хв</option>
      </Select>
      <Select>
        <option>Дієтичні опції</option>
        <option>Веганські</option>
        <option>Вегетаріанські</option>
        <option>Безглютенові</option>
      </Select>
      <Select>
        <option>Калорійність</option>
        <option>Низька</option>
        <option>Середня</option>
        <option>Висока</option>
      </Select>
    </FilterContainer>
  );
};

export default FilterSection;
