import React, { useEffect, useState } from 'react';
import RecipeCard from '../../common/Recipe-Card/RecipeCard.jsx';
import fetchRecipes from './MainPageService.js';
import styles from './MainPage.module.css'

const MainPage = () => {
    const [recipes, setRecipes] = useState([]);
    const [apiError, setApiError] = useState(false);

    useEffect(() => {
        fetchRecipes(setRecipes, setApiError);
    }, []);

    return (
        <div className={styles.cardGrid}>
            {recipes.map((recipe, index) =>(
                <RecipeCard key={index} recipe={recipe} />
            ))}
        </div>
    );
};

export default MainPage;