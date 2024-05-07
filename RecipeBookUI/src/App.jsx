import { useState } from 'react'
import Header from './components/common/Header/Header.jsx'
import MainPage from './components/pages/Main/MainPage.jsx'
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
        <MainPage />
      </div>
    </>
  )
}

export default App
