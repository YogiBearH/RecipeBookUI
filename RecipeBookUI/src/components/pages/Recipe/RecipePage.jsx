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

    const ingredients = recipe.ingredients && Array.isArray(recipe.ingredients) ? (
        recipe.ingredients.map(ingredient => (
            <div key={ingredient.id} className={styles.ingredientItem}>
                {ingredient.ingredientName}
            </div>
        ))
    ) : (
        <div>No ingredients available</div>
    );

    return (
        <div>
            <div className={styles.header}>{recipe.recipeName || errorMessage}</div>
            <div>{recipe.description || 'No data ¯\\_(ツ)_/¯'}</div>
            <div>{"Prep time: " + recipe.prepTime + " minutes" || 'No data ¯\\_(ツ)_/¯'}</div>
            <div>{"Cook time: " + recipe.cookTime + " minutes" || 'No data ¯\\_(ツ)_/¯'}</div>
            <div className={styles.ingredientBox}>
                <div className={styles.ingredientHeader}>{"Ingredients:"}</div>
                <ul className={styles.ingredientItem}>
                    {ingredients}
                </ul>
            </div>
        </div>
    );
};

export default RecipePage;