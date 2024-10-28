export const mapIngredients = (ingredients) => {
    if (!ingredients || !Array.isArray(ingredients) || ingredients.length === 0) {
        return 'No ingredients available';
    }

    const ingredientElements = ingredients.map((ingredient) => ({
        key: ingredient.id,
        name: `${ingredient.ingredientName} (${ingredient.quantity} ${ingredient.measurementName})`
    }));
    return { ingredientElements };
};