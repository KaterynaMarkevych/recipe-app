import React, {useState} from 'react';
import styled from 'styled-components';
import 'primeicons/primeicons.css';
import { jsPDF } from 'jspdf';

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-y: auto;
`;

const ModalContent = styled.div`
    background-color: #F7FBFC;
    padding: 20px;
    width: 700px;
    max-width: 90%;
    position: absolute;
    top: 150px;
    border: 1px solid #000;
    @media (max-width: 768px){
        top: 240px;
        width: 360px;
    }
`;

const CloseIcon = styled.i`
    position: absolute;
    top: 50px;
    right: 80px;
    font-size: 24px;
    cursor: pointer;
    @media (max-width: 768px){
        font-size: 20px;
        top: 50px;
        right: 40px;
    }
`;

const ShoppingListTitle = styled.h2`
    color: #2B3A39;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-align: left;
    margin-left: 100px;
    @media (max-width: 768px){
    font-size: 24px;
    margin-left: 50px;
    }
`;

const ShoppingList = styled.ul`
    list-style-type: none;
    padding: 0;
    text-align: left; 
    margin-left: 40px;
    overflow-y: auto;
`;

const ShoppingListItem = styled.li`
    color: #2B3A39;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 40px;
    margin-bottom: 10px;
`;
const Checkbox = styled.input`
    margin-right: 10px;
`;
const AddIngrident = styled.button`
    color: #2B3A39;
    font-size: 20px;
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
const AddIngridentInput = styled.input`
    font-size: 18px;
    padding: 10px;
    margin-bottom: 15px;
    width: 300px;
    border: 1px solid #ccc;
    &:focus {
    outline: none;
    border-color: inherit; 
  }
`;
const PDFButton = styled.button`
    color: #2B3A39;
    font-size: 20px;
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
const Icon = styled.i`
    font-size: 18px;
    color: #2B3A39;
    padding: 5px;
`;

const ShoppingListModal = ({ ingredients, onClose }) => {
    const [newIngredient, setNewIngredient] = useState('');
    const [ingredientList, setIngredientList] = useState(ingredients);
    const [showInput, setShowInput] = useState(false);

    // Функція для додавання інгредієнта
    const handleAddIngredient = () => {
        if (newIngredient.trim()) {
            setIngredientList([...ingredientList, newIngredient]);
            setNewIngredient('');
        }
        setShowInput(false); // При додаванні приховуємо поле
    };
    // Обробка натискання клавіші Enter
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleAddIngredient();
        }
    };
    // Функція для створення PDF
    const generatePDF = () => {
        const doc = new jsPDF();
        doc.setFontSize(18);
        doc.text('Shoping ', 20, 20);
        doc.addFont('./assets/fonts/Mulish-VariableFont_wght.ttf', 'Mulish', 'normal');
        doc.setFont('Mulish');

        // Додаємо інгредієнти в PDF
        ingredientList.forEach((ingredient, index) => {
            doc.text(`${index + 1}. ${ingredient}`, 20, 30 + index * 10);
            
        });

        // Зберігаємо файл PDF
        doc.save('shopping-list.pdf');
    };

    return (
        <>
        <ModalOverlay>
            <ModalContent>
                <CloseIcon role="button" aria-label="close" onClick={onClose} className='pi pi-times'/>
                <ShoppingListTitle>Список покупок</ShoppingListTitle>
                <ShoppingList>
                {ingredientList.map((ingredient, index) => (
                        <ShoppingListItem key={index}>
                            <Checkbox type="checkbox" />
                            {ingredient}
                        </ShoppingListItem>
                    ))}
                </ShoppingList>
                {!showInput && (
                    <AddIngrident onClick={() => setShowInput(true)}>
                        <Icon className='pi pi-plus'/>
                        Додати інгредієнт
                    </AddIngrident>
                )}
                {showInput && (
                    <AddIngridentInput
                        type="text"
                        placeholder="Введіть інгредієнт"
                        value={newIngredient}
                        onChange={(e) => setNewIngredient(e.target.value)}
                        onKeyDown={handleKeyPress} // Обробка натискання клавіші
                    />
                )}
                <PDFButton onClick={generatePDF}>
                    <Icon className='pi pi-file-pdf'/>
                    Експортувати в PDF
                </PDFButton>
            </ModalContent>
        </ModalOverlay>
        </>
        
    );
};

export default ShoppingListModal;
