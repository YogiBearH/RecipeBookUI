export const mapIngredients = (ingredients) => {
    if (!ingredients || !Array.isArray(ingredients) || ingredients.length === 0) {
        return <li>No ingredients available</li>;
    }

    return ingredients.map((ingredient) => (
        <li key={ingredient.id}>
            {ingredient.ingredientName} {ingredient.quantity} {ingredient.measurementName}
        </li>
    ));
};

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