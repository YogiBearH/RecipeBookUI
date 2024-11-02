export const transformIngredients = (recipe) => {
    const ingredients = recipe.ingredients;

    if (ingredients && Array.isArray(ingredients) && ingredients.length > 0) {
        return ingredients.map((ingredient) => ({
            id: ingredient.id,
            name: `${ingredient.ingredientName} ${ingredient.quanitity} ${ingredient.measurementName}`
        }))
    } else {
        return []
    }
}

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