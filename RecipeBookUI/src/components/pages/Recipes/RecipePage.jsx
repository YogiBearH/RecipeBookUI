import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import RecipeCard from '../../common/Recipe-Card/RecipeCard.jsx';
import fetchRecipes from './RecipePageService.js';

const RecipePage = () => {
    const [recipes, setRecipes] = useState([]);
    const [apiError, setApiError] = useState(false);

    useEffect(() => {
        fetchRecipes(setRecipes, setApiError);
    }, []);

    return (
        <RecipeCard
            recipe={recipes}
        />
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