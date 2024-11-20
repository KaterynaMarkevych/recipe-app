import React, { useState } from "react";
import styled from "styled-components";
import Header from "../Header";
import Footer from "../Footer";
import 'primeicons/primeicons.css';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 1200px;
    margin: 0 auto;
    margin: 140px 0 40px 0;
`;
const Container = styled(Wrapper)`
    background: #D6E6F2;
`;
const Title = styled.h2`
    color: #000;
    font-size: 40px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; 
    padding: 40px;
`;
const PhotoContainer = styled.div`
    width: 904px;
    height: 532px;
    background: #fff;
    border: 2px dashed #000;
    display: flex;
    justify-content: center; 
    align-items: center; 
    position: relative;
    flex-direction: column;

    /* Стиль для горизонтальної і вертикальної лінії */
    &::before,
    &::after {
        content: "";
        position: absolute;
        border-color: #000;
    }

    /* Горизонтальна лінія */
    &::before {
        width: 100%;
        height: 0;
        top: 50%;
        left: 0;
        border-top: 2px dashed #000;
    }

    /* Вертикальна лінія */
    &::after {
        height: 100%;
        width: 0;
        left: 50%;
        top: 0;
        border-left: 2px dashed #000;
    }
`;
const Icon = styled.i`
    font-size: 48px;
    color: #2B3A39;
    position: relative;
    z-index: 1; 
    background-color: #fff;
    padding: 10px; 
    top: 25px;
    margin-bottom: 10px;
`;
const Span = styled.span`
    color: #000;
    font-size: 28px;
    font-style: normal;
    font-weight: 500;
    line-height: 40px;
    z-index: 1; 
    margin-top: 10px;
`;
const NameInput = styled.input`
    padding: 8px 8px 8px 8px;  
    margin-top: 80px;
    width: 904px;
    height: 48px;
    border: 1px solid #A6A4A4;
    font-size: 28px;
    &:focus {
        outline: none;
        border-color: inherit; 
    }
`;
const DescriptionInput = styled(NameInput)`
    margin-top: 40px;
`;
const IngredientsContainer = styled.div`
    display: flex;
    justify-content: flex-start; 
    align-items: center;
    text-align: left; 
    flex-direction: column;
    width: 100%;
    max-width: 906px;
    padding-left: 20px;
`;
const IngredientsTitle = styled(Title)`
    font-size: 36px;
    text-align: left;
    width: 100%;
    padding-left: 18px;
`;
const IngredientsInputContainer = styled.div`
    display: flex;
    justify-content: center; 
    align-items: center;
    padding: 20px;
    
`;
const IngredientsInput = styled(NameInput)`
    width: 769px;
    margin: 0;
`;
const DeleteIcon = styled.i`
    font-size: 24px;
    width: 80px;
    height: auto;
    margin-left: 40px;
`;
const AddIngridentButton = styled.button`
    color: #2B3A39;
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    cursor: pointer;
    border: none;
    background: none;
    margin-rigth: auto;
    text-align: left;
    &:hover {
        border: none;
        color: #535D45;
    }
    &:focus {
        outline: none;
    }
    &:active {
        border: none;
        color: #535D45;
    }
`;
const AddIcon = styled.i`
    font-size: 28px;
    color: #2B3A39;
    padding: 5px;
`;
const InstructionsContainer = styled.div`
    display: flex;
    justify-content: center; 
    align-items: center;
    text-align: left; 
    flex-direction: column;
    width: 100%;
    max-width: 906px;
    margin-top: 40px;
`;
const InstructionsTitle = styled(Title)`
    font-size: 36px;
    text-align: left;
    width: 100%;
    padding-left: 30px;
`;
const InstructionInputContainer = styled.div`
    display: flex;
    justify-content: center; 
    align-items: center;
    width: 100%;
    max-width: 906px;
    padding: 20px;
`;
const InstructionInput = styled(NameInput)`
    width: 769px;
    margin: 0;
`;
const DeleteInstructionIcon = styled.i`
    font-size: 24px;
    width: 80px;
    height: auto;
    margin-left: 40px;
`;
const AddInstructionButton = styled.button`
    color: #2B3A39;
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    cursor: pointer;
    border: none;
    background: none;
    margin-rigth: auto;
    text-align: left;
    &:hover {
        border: none;
        color: #535D45;
    }
    &:focus {
        outline: none;
    }
    &:active {
        border: none;
        color: #535D45;
    }
`;
const AddInstructionIcon = styled.i`
    font-size: 28px;
    color: #2B3A39;
    padding: 5px;
`;
const Step = styled.span`
    color: #000;
    text-align: center;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 40px;
    padding: 10px;
`;
const NutritionContainer = styled.div`
    display: flex;
    justify-content: center; 
    align-items: center;
    text-align: left; 
    flex-direction: column;
    width: 100%;
    max-width: 906px;
    margin-top: 40px;
`;
const NutritionTitle = styled(Title)`
    font-size: 36px;
    text-align: left;
    width: 100%;
    padding-left: 30px;
`;
const NutritionInput = styled(NameInput)`
    margin-top: 0px;
    margin-bottom: 40px;
`;
const FilterContainer = styled.div`
    display: flex;
    justify-content: center; 
    align-items: center;
    text-align: left; 
    flex-direction: column;
    width: 100%;
    max-width: 906px;
    margin: 40px 0 80px 0;
`;
const FilterInputContainer = styled.div`
    display: flex;
    justify-content: center; 
    align-items: center;
    width: 100%;
    max-width: 906px;
    padding: 10px;
`;
const FilterTitle = styled(Title)`
    font-size: 36px;
    text-align: left;
    width: 100%;
    padding: 0px;
    margin: 0;
`;
const Select = styled.select`
    padding: 8px;
    margin-top: 5px;
    margin-bottom: 10px;
    font-size: 28px;
    color: #000;
    width: 810px;
    height: 68px;
    border-color: #A6A4A4;
    appearance: none; /* Приховує стандартну стрілку браузера */
    background-color: white;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%232B3A39'%3E%3Cpath d='M5.5 7.5l4.5 4.5 4.5-4.5H5.5z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 15px center;
    background-size: 20px 20px;
    
    &:focus {
        outline: none;
        border-color: #000;
    }

    option:disabled {
    color: #A6A4A4; 
  }  
`;
const FilterInput = styled(NameInput)`
    width: 800px;
    margin: 0;
`;
const ButtonContainer = styled.div` 
    display: flex;
    justify-content: center; 
    align-items: center;
    width: 100%;
    max-width: 906px;
    padding: 40px;
    gap: 50px;
`;
const PublishButton = styled.button`
    width: 366px;

border-radius: 55px;
border: 1px solid #A6A4A4;
background: #B9D7EA;
color: #2B3A39;
text-align: center;
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: 40px; 
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
const SaveButton = styled(PublishButton)``;
const DeleteButton = styled(PublishButton)``;
const AddRecipePage = () => {
    const [ingredients, setIngredients] = useState([
        { id: 1, placeholder: "200г борошно" },
        {id: 2, placeholder: "2шт яйце"}
    ]);
    const [instructions, setInstructions] = useState([
        { id: 1, placeholder: "Насипте борошто в миску" },
        { id: 2, placeholder: "Змішати борошно з яйцем" }
    ]);

    const addIngredient = () => {
        setIngredients([...ingredients, { id: Date.now(), placeholder: "Введіть інгредієнт" }]);
    };

    const deleteIngredient = (id) => {
        setIngredients(ingredients.filter((ingredient) => ingredient.id !== id));
    };

    const addInstruction = () => {
        setInstructions([...instructions,{ id: Date.now(), placeholder: "Введіть опис кроку"}]);
    };

    const deleteInstruction = (id) => {
        setInstructions(instructions.filter((instruction) => instruction.id !== id));
    };
    return(
    <>
    <Header/>
    <Wrapper>
        <Container>
        <Title>Створити рецепт</Title>
        <PhotoContainer>
            <Icon className="pi pi-camera" />
            <Span>Завантажте фото </Span>
        </PhotoContainer>

        <NameInput placeholder="Назва"/>
        <DescriptionInput placeholder="Додайте короткий опис"/>

        <IngredientsContainer>
          <IngredientsTitle>Інгредієнти</IngredientsTitle>
          {ingredients.map((ingredient) => (
            <IngredientsInputContainer key={ingredient.id}>
              <IngredientsInput placeholder={ingredient.placeholder} />
              <DeleteIcon
                className="pi pi-trash"
                onClick={() => deleteIngredient(ingredient.id)}
              />
            </IngredientsInputContainer>
          ))}
          <AddIngridentButton onClick={addIngredient}>
            <AddIcon className="pi pi-plus" />
            Додати інгредієнт
          </AddIngridentButton>
        </IngredientsContainer>

        <InstructionsContainer>
                <InstructionsTitle>Покрокова інструкція з приготування</InstructionsTitle>
                {instructions.map((instruction, index) => (
                    <InstructionInputContainer key={instruction.id}>
                        <Step>{index + 1}. </Step>
                        <InstructionInput placeholder={instruction.placeholder} />
                        <DeleteInstructionIcon
                            className="pi pi-trash"
                            onClick={() => deleteInstruction(instruction.id)}
                        />
                    </InstructionInputContainer>
                ))}
                <AddInstructionButton onClick={addInstruction}>
                    <AddInstructionIcon className="pi pi-plus" />
                    Додати крок
                </AddInstructionButton>
            </InstructionsContainer>

        <NutritionContainer>
            <NutritionTitle>Нутріціологічна інформація</NutritionTitle>
            <NutritionInput placeholder="Калорії: 234"/>
            <NutritionInput placeholder="Білки: 12"/>
            <NutritionInput placeholder="Жири: 32"/>
            <NutritionInput placeholder="Вуглеводи: 45"/>
        </NutritionContainer>

        <FilterContainer>
            <FilterInputContainer>
                <FilterTitle>Тип страви</FilterTitle>
                <Select>
                    <option disabled selected hidden>Виберіть опцію</option>
                    <option>Сніданок</option>
                    <option>Обід</option>
                    <option>Вечеря</option>
                </Select>
            </FilterInputContainer>
            <FilterInputContainer>
                <FilterTitle>Час приготування</FilterTitle>
                <FilterInput placeholder="1 година"/>
            </FilterInputContainer>
            <FilterInputContainer>
                <FilterTitle>Складність</FilterTitle>
                <Select>
                    <option disabled selected hidden>Виберіть опцію</option>
                    <option>Легко</option>
                    <option>Середньо</option>
                    <option>Складно</option>
                </Select>
            </FilterInputContainer>
            <FilterInputContainer>
                <FilterTitle>Дієтичні опції</FilterTitle>
                <Select>
                    <option disabled selected hidden>Виберіть опцію</option>
                    <option>Веганство</option>
                    <option>Вегетаріанство</option>
                    <option>Безглютенова</option>
                </Select>
            </FilterInputContainer>
        </FilterContainer>
        </Container>

        <ButtonContainer>
            <PublishButton>Опублікувати</PublishButton>
            <SaveButton>Зберегти для себе</SaveButton>
            <DeleteButton>Видалити</DeleteButton>
        </ButtonContainer>

    </Wrapper>
    <Footer/>
    </>
    );
};
export default AddRecipePage;