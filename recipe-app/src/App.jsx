import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import RecipeDetails from './components/RecipeDetails';
import AddRecipePage from './components/AddRecipe/AddRecipePage';
import UserPage from './components/UserPage/UserPage';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="/add-recipe" element={<AddRecipePage />} />
        <Route path="/user/:userId" element={<UserPage />} />
        <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
