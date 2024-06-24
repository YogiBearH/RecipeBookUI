import React, { useEffect, useState } from 'react';
import RecipeCard from '../../common/Recipe-Card/RecipeCard.jsx';
import fetchRecipes from './RecipePageService.js';
import { Card, CardText, CardTitle } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const RecipePage = ( recipes ) => {
    const { id } = useParams;
    const [recipe, setRecipe] = useState([]);
    const [recipeName, setRecipeName] = useState(recipe.recipeName);
    const [description, setDescription] = useState(recipe.recipeDescription);
    useEffect(() => {
        const recipeDetails = recipe.filter((recipe) => recipe.id === +id)[0];
        if (recipeDetails !== undefined) {
            setRecipe(recipeDetails);
        }
    }, [recipes]);

    useEffect(() => {
        setRecipeName(recipe.recipeName);
        setDescription(recipe.description);
    }, [
        recipe.recipeName, recipe.description
    ]);


    return (
        <Card className={styles.card}>
            <CardTitle className={styles.title}>
                {recipeName}
            </CardTitle>
            <CardText>
                {description}
            </CardText>
        </Card>
    );
};

export default RecipePage;