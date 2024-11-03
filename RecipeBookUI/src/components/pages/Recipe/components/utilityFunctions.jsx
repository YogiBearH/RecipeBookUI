import styles from './RecipePage.module.css';
import React, { createElement } from "react";

/**
 * Changes the recipe data for easier mapping to list.
 * @param {Array} recipe The recipe's ingredients list/array.
 * @returns A transformed data of the data where id is the ingredient id and the name has the ingredient name, quantity and measurement.
 */
export const transformIngredients = (recipe) => {
    const ingredients = recipe.ingredients;

    if (ingredients && Array.isArray(ingredients) && ingredients.length > 0) {
        return ingredients.map((ingredient) => ({
            id: ingredient.id,
            name: `${ingredient.ingredientName} ${ingredient.quantity} ${ingredient.measurementName}`
        }))
    } else {
        return []
    }
}

/**
 * Changes the recipe data for easier mapping to list.
 * @param {Array} recipe The recipe's steps list/array.
 * @returns A each recipe steps with the id = step number, name = description.
 */
export const transformRecipeSteps = (recipe) => {
    const steps = recipe.recipeSteps;

    if (steps && Array.isArray(steps) && steps.length > 0) {
        return steps.map((step) => ({
            id: step.stepNumber,
            name: `${step.stepDescription}`
        }))
    } else {
        return []
    }
}

/**
 * Maps out a list/array into a list. If there is no data found, will display the no data message set.
 * @param {string} style styling that is applied to list being returned.
 * @param {Array} list A list or array of items/objects.
 * @param {string} keyName The name to access the data in the object.
 * @param {string} type Determines what kind of format the list is outputted
 * @param {string} noDataMessage The message that is displayed when no data is found.
 * @returns {JSX.Element} Either a message that says it has no data, or a list of the data in the array
 */
 export const listMapper = ({ style, list, keyName, type = 'ul', noDataMessage = 'No data available'}) => {
    if (!list || !Array.isArray(list) || list.length === 0) {
        return <li>{noDataMessage}</li>
    }

    return createElement(
        type,
        { className: styles[style]},
        list.map((item) => (
            <li key={item.id}>
                {item[keyName]}
            </li>
        ))
    )

 }