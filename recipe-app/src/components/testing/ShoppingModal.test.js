import { render, screen, fireEvent } from '@testing-library/react';
import ShoppingListModal from '../RecipeDetailComponents/ShoppingListModal';
import '@testing-library/jest-dom';
import { jsPDF } from 'jspdf';


describe('ShoppingListModal', () => {
  const mockClose = jest.fn();
  const initialIngredients = ['Carrot', 'Potato'];

  it('should render the modal with initial ingredients', () => {
    render(<ShoppingListModal ingredients={initialIngredients} onClose={mockClose} />);

    expect(screen.getByText('Список покупок')).toBeInTheDocument();
    expect(screen.getByText('Carrot')).toBeInTheDocument();
    expect(screen.getByText('Potato')).toBeInTheDocument();
  });

  it('should close the modal when the close button is clicked', () => {
    render(<ShoppingListModal ingredients={initialIngredients} onClose={mockClose} />);
  
    fireEvent.click(screen.getByRole('button', { name: /close/i }));
    expect(mockClose).toHaveBeenCalledTimes(1);
  });
  
  it('should add a new ingredient to the list', () => {
    render(<ShoppingListModal ingredients={initialIngredients} onClose={mockClose} />);

    fireEvent.click(screen.getByText('Додати інгредієнт'));
    fireEvent.change(screen.getByPlaceholderText('Введіть інгредієнт'), { target: { value: 'Tomato' } });
    fireEvent.keyDown(screen.getByPlaceholderText('Введіть інгредієнт'), { key: 'Enter' });

    expect(screen.getByText('Tomato')).toBeInTheDocument();
  });
/*
  it('should generate PDF with ingredient list', () => {
    render(<ShoppingListModal ingredients={initialIngredients} onClose={mockClose} />);

    const pdfButton = screen.getByText('Експортувати в PDF');
    fireEvent.click(pdfButton);

    // Assert that jsPDF's `save` method is called to generate a PDF
    expect(jsPDF).toHaveBeenCalledTimes(1);
    expect(jsPDF.mock.instances[0].save).toHaveBeenCalledTimes(1);
  });
*/
  it('should show input field when "Add Ingredient" is clicked', () => {
    render(<ShoppingListModal ingredients={initialIngredients} onClose={mockClose} />);

    const addButton = screen.getByText('Додати інгредієнт');
    fireEvent.click(addButton);

    expect(screen.getByPlaceholderText('Введіть інгредієнт')).toBeInTheDocument();
  });
});
