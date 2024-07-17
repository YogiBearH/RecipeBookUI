import React, { useEffect, useState } from 'react';
import styles from './RecipePage.module.css'
import RecipeCard from '../../common/Recipe-Card/RecipeCard.jsx';
import fetchRecipesById from './RecipePageService.js';
import { Card, CardText, CardTitle } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import fetchRecipeById from './RecipePageService.js';

const RecipePage = () => {
    const { id } = useParams();
    const [apiError, setApiError] = useState(false);
    const [recipe, setRecipe] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                if (!id || isNaN(id)) {
                    throw new Error('Invalid recipe ID.');
                }
                const fetchedRecipe = await fetchRecipeById(id);
                if (fetchedRecipe) {
                    setRecipe(fetchedRecipe);
                } else {
                    throw new Error('Oops, something went wrong!');
                }
            } catch (error) {
               setApiError(true);
               setErrorMessage(error.message);
            }
        };
        fetchRecipe();
    }, [id]);

    if (apiError) {
        return <div>{errorMessage}</div>; 
    }

    if (!recipe) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className={styles.header}>{recipe.recipeName || errorMessage}</div>
            <div>{recipe.description || 'No idea ¯\_(ツ)_/¯'}</div>
        </div>
    );
};

export default RecipePage;