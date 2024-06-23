import { useState } from 'react';
import Header from './components/common/Header/Header.jsx';
import './App.css';
import Routing from './Routing.jsx';
//import { RecipePage } from './components/pages/Recipe';

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
      <div>
        <Routing />
      </div>
    </>
  )
}

export default App
