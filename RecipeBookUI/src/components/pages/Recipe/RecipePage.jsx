import React, { useEffect, useState } from 'react';
import styles from './components/RecipePage.module.css'
import { useParams } from 'react-router-dom';
import useRecipe from './components/useRecipe.js';
import { mapIngredients } from './components/utilityFunctions.js';
import useSteps from './components/useSteps.js';

const RecipePage = () => {
    const { id } = useParams();
    console.log(id);
    const { recipe, errorMessage: recipeError } = useRecipe(id);

    if (recipeError) {
        return <div>{recipeError}</div>
    };

    if (!recipe) {
        return <div>Loading. . .</div>
    };
    console.log(recipe.recipeName);

    return (
        <div className={styles.page}>
            <div className={styles.header}>
                <div>{recipe.recipeName}</div>
            </div>
            <div>{"Prep time: " + recipe.prepTime + " minutes"}</div>
            <div>{"Cook time: " + recipe.cookTime + " minutes"}</div>
            <div>{recipe.description || 'No data ¯\\_(ツ)_/¯'}</div>
            <div className={styles.ingredientBox}>
                <div className={styles.ingredientHeader}>{"Ingredients:"}</div>
                <ul className={styles.ingredientItem}>
                    {mapIngredients(recipe.ingredient)}
                </ul>
            </div>
            {/* <div className={styles.stepBox}>
                <div className={styles.stepHeader}>{"Recipe Steps:"}</div>
                {stepsError ? (
                    <div className={styles.errorMessage}>{stepsError}</div>
                ) : (
                    <ol type="1" className={styles.step}>
                        {stepElements.map((step) => (
                            <li key={step.id} className={styles.step}>
                                {step.description}
                            </li>
                        ))}
                    </ol>
                )}
            </div> */}
        </div>
    );
};

export default RecipePage;