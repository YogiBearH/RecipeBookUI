import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/pages/Main/MainPage.jsx';
import RecipePage from './components/pages/Recipe/RecipePage.jsx';

const Routing = () => {
    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<MainPage />} />
                <Route exact path='/recipes/:id' element={<RecipePage />} />
            </Routes>
        </Router>
    )
}

export default Routing;