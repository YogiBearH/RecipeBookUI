import React, { useEffect, useState } from 'react';
import styles from './components/RecipePage.module.css'
import { useParams } from 'react-router-dom';
import useRecipe from './components/useRecipe.js';
import { listMapper } from './components/utilityFunctions.jsx';

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
                {listMapper({
                    style: 'ingredientItem',
                    list: recipe.ingredients,
                    keyName: 'name',
                    noDataMessage: 'No ingredients available.'
                })}
            </div>
            <div className={styles.stepBox}>
                <div className={styles.stepHeader}>Steps:</div>
                {listMapper({
                    style: 'step',
                    list: recipe.recipeSteps,
                    keyName: 'stepDescription',
                    type: 'ol',
                    noDataMessage: 'No steps available.'
                })}
            </div>
        </div>
    );
};

export default RecipePage;