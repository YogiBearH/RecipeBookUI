import React, { useEffect, useState } from 'react';
import styles from './RecipePage.module.css';
import Constants from '../../common/Utils/constants.js';
import { Grid } from '@mui/material';
import RecipeCard from '../../common/Recipe-Card/RecipeCard.js';

const RecipePage = () => {
    const [recipes, setRecipes] = useState([]);
    const [apiError, setApiError] = useState(false);

    useEffect(() => {
        fetchRecipes(setRecipes, setApiError);
    });

    return (
        <Grid item xs={8} sx={{marginLeft: '320px'}}>
            <RecipeCard />
        </Grid>
    )
}