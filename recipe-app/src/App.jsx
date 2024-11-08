import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import HomePage from './components/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HomePage></HomePage>
    </>
  )
}

export default App
