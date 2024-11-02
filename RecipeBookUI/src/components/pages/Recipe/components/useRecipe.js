import { useState, useEffect } from 'react';
import { fetchRecipeById } from './RecipePageService';
import { transformRecipeSteps, transformIngredients } from './utilityFunctions';

const useRecipe = ( recipeId ) => {
    const [recipe, setRecipe] = useState(null);
    const [apiError, setApiError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    useEffect(() => {
        if (!recipeId || isNaN(recipeId)) {
            setErrorMessage('Invalid recipe ID');
            return
        }
        const fetchRecipe = async () => {
            try {
                const fetchedRecipe = await fetchRecipeById(recipeId);
                if (fetchedRecipe) {``
                    fetchedRecipe.recipeSteps = transformRecipeSteps(fetchedRecipe);
                    fetchedRecipe.ingredients = transformIngredients(fetchedRecipe);
                    setRecipe(fetchedRecipe);
                } else {
                    throw new Error('Oops, something went wrong!');
                }
            } catch (error) {
                setErrorMessage(error.message || 'An error occurred while fetching the recipe.');
            }
        };
        fetchRecipe();
    }, [recipeId]);

    return { recipe, errorMessage };
}

export default useRecipe;