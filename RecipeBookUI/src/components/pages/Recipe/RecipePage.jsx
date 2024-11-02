import React, { useEffect, useState } from 'react';
import styles from './components/RecipePage.module.css'
import { useParams } from 'react-router-dom';
import useRecipe from './components/useRecipe.js';

const RecipePage = () => {
    const { id } = useParams();
    const { recipe, errorMessage: recipeError } = useRecipe(id);

    if (recipeError) {
        return <div>{recipeError}</div>
    };

    if (!recipe) {
        return <div>Loading. . .</div>
    };

    return (
        <div className={styles.page}>
            <div className={styles.header}>
                <div>{recipe.recipeName}</div>
            </div>
            <div>{"Prep time: " + recipe.prepTime + " minutes"}</div>
            <div>{"Cook time: " + recipe.cookTime + " minutes"}</div>
            <div>Description:</div>
            <div>{recipe.description || 'No data ¯\\_(ツ)_/¯'}</div>
            <div className={styles.ingredientBox}>
                <div className={styles.ingredientHeader}>Ingredients:</div>
                <ul className={styles.ingredientItem}>
                    {recipe.ingredients ? recipe.ingredients.map((ingredient) => (
                        <li key={ingredient.id}>
                            {ingredient.name}
                        </li>
                    )) :
                    <li>No ingredients available</li>}
                </ul>
            </div>
            <div className={styles.stepBox}>
                <div className={styles.stepHeader}>Steps:</div>
                <ol type="1" className={styles.step}>
                    {recipe.recipeSteps ? recipe.recipeSteps.map((step) => (
                        <li key={step.id}>
                            {step.name}
                        </li>
                    )) : 
                    <li>No steps available</li>
                    }
                </ol>
            </div>
        </div>
    );
};

export default RecipePage;