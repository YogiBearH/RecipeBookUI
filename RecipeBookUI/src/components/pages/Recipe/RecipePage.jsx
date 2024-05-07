import React, { useEffect, useState } from 'react';
import RecipeCard from '../../common/Recipe-Card/RecipeCard.jsx';
import fetchRecipes from './RecipePageService.js';

const RecipePage = () => {
    const [recipe, setRecipe] = useState([]);
    const [apiError, setApiError] = useState(false);

    useEffect(() => {
        fetchRecipes(setRecipe, setApiError);
    }, []);

    return (
        // <RecipeCard
        //     recipe={recipe}
        // />
        // <div>
        //     <p>{recipes.recipeName}</p>    
        // </div>
        /* // <Grid item xs={8} sx={{marginLeft: '320px'}}>
        //     {recipes.map((recipe) => (
        //         <div key={recipe.id || 'recipe-${index}'}>
        //             <RecipeCard recipe={recipe}/>
        //         </div>
        //     ))}
        // </Grid> */
    );
};

export default RecipePage;