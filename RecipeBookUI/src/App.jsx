import { useState } from 'react'
import Header from './components/common/Header/Header.jsx'
import RecipePage from './components/pages/Recipes/RecipePage.jsx'
import './App.css'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
      <div>
        <p>
          Recipes
        </p>
        <RecipePage />
      </div>
    </>
  )
}

export default App
