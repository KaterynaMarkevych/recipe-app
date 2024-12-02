import React, {useState} from 'react';
import styled from 'styled-components';
import ShoppingListModal from './ShoppingListModal';

const Wrapper = styled.div`
    display: flex;
    justify-content: center; 
    align-items: flex-start; 
    gap: 20px;
    width: 1220px;
    padding: 0;
    @media (max-width: 768px){
        width: 300px;
        flex-direction: column;
        align-items: center;
        gap: 0px;
    }
`;
const Container = styled.div`
  flex: 1;
  width: 610px;
  text-align: left;
  @media (max-width: 768px){
        width: 300px;
    }
`;
const IngredientsContainer = styled.div`
    text-align: left;
    flex: 1;
    width: 600px;
    @media (max-width: 768px){
        width: 300px;
    }
`;
const Line = styled.line`
    display: block;  
    width: 1305px;
    height: 0.5px;
    background:  #ccc;
    margin-top: 40px;
    @media (max-width: 768px){
        width: 330px;
        margin-top: 40px;
    }
`;
const Title = styled.h3`
    color: #000;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 30px;
    @media (max-width: 768px){
        font-size: 24px;
    }
`;
const IngridientList = styled.ul`
    list-style-type: none;
    padding: 0;
    text-align: left; 
`;
const IngridientListItem = styled.li`
    color: #2B3A39;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 35px;
    margin-bottom: 5px;
    @media (max-width: 768px){
        font-size: 20px;
    }
`;
const Quantity = styled.span`
    font-weight: 500;
    color: #243231
`;
const ListTitle = styled.h4`
    color: #000;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 40px;
    @media (max-width: 768px){
        font-size: 20px;
    }
`;
const Info = styled.p`
    color: #2B3A39;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    @media (max-width: 768px){
        font-size: 20px;
    }
`;
const ShopingListButton = styled.button`
    width: 240px;
    height: 55px;
    border-radius: 25px;
    border: 1px solid #000;
    background: #D6E6F2;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    margin-bottom: 40px;
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
        font-size: 18px;
        width: 220px;
        height: 50px;
        }
`;
const NutritionContainer = styled.div`
    width: 550px;
    height: 287px;
    border-radius: 35px;
    border: 1px solid #000;
    background: #D6E6F2;
    padding: 10px;
    @media (max-width: 768px){
        font-size: 18px;
        width: 330px;
        height: 214px;
        padding: 5px;
    }
`;
const NutritionTitle = styled.h4`
    color: #2B3A39;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 40px;
    margin-left: 20px;
    @media (max-width: 768px){
    font-size: 20px;
    line-height: 20px;
    }
`;
const Span = styled.span`
    font-weight: 400;
`;
const NutritionList = styled.ul`
    list-style-type: none;
    text-align: center;
    display: flex; 
    justify-content: flex-start; 
    padding: 0;
    @media (max-width: 768px) {
    flex-wrap: wrap; 
    justify-content: center;
    }
`;
const NutritionListItem = styled.li`
    margin: 22px;
    display: inline-block;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 40px;
    @media (max-width: 768px){
    font-size: 20px;
    line-height: 20px;
    margin: 20px;
    }
`;
const formatIngredients = (ingredients) => {
    return ingredients.map((ingredient, index) => {
        // Відокремлюємо кількість, одиницю вимірювання і сам інгредієнт
        const matches = ingredient.match(/(\d+(\.\d+)?\s*(шт\.?|г|кг|л|мл|ст\.л|ч\.л|додати|паст[аи]|см\.|капсула|таблетка|упаковка|щіпка|банка|пучок|-|зубчик[аи])?)\s*(.*)/i);
        if (matches) {
            // Повертаємо відформатований інгредієнт
            return (
                <IngridientListItem key={index}>
                    <Quantity>{matches[1]}</Quantity> {matches[4]}
                </IngridientListItem>
            );
        }
        // Якщо інгредієнт не містить кількості або одиниці вимірювання, повертаємо просто текст
        return <IngridientListItem key={index}>{ingredient}</IngridientListItem>;
    });
};
const InfoContainer = ({ ingredients, nutrition }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    return (
        <>
        <Line/>
        <Wrapper>
            <IngredientsContainer>
                <Title>Інгредієнти:</Title>
                <IngridientList>
                    {formatIngredients(ingredients)}
                </IngridientList>
            </IngredientsContainer>

            {nutrition && (
                <Container>
                    <ListTitle>Створити список покупок</ListTitle>
                    <Info>Складідть власний список для походу в магазин чи онлайн замовлення</Info>
                    <ShopingListButton onClick={handleOpenModal}>Сформувати список</ShopingListButton>
                    {isModalOpen && (
                        <ShoppingListModal 
                            ingredients={ingredients} 
                            onClose={handleCloseModal} 
                        />
                    )}
                    <NutritionContainer>
                       <NutritionTitle>Харчова цінність <Span>(на порцію)</Span>:</NutritionTitle>
                        <NutritionList>
                        <NutritionListItem>Калорії {nutrition.calories} ккал</NutritionListItem>
                        <NutritionListItem>Білки {nutrition.protein} г</NutritionListItem>
                        <NutritionListItem>Жири {nutrition.fats} г</NutritionListItem>
                        <NutritionListItem>Вуглеводи {nutrition.carbs} г</NutritionListItem>
                        </NutritionList> 
                    </NutritionContainer>
                    
                </Container>
            )}
        </Wrapper>
        <Line/>
        </>
    );

};
export default InfoContainer;