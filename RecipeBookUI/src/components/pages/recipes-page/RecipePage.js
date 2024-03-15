import React, { useEffect, useState } from 'react';
import styles from './RecipePage.module.css';
import Constants from '../../common/Utils/constants.js';

const RecipePage = () => {
    const [recipes, setRecipes] = useState([]);
    const [apiError, setApiError] = useState(false);

    useEffect(() => {
        fetchRecipes(setRecipes, setApiError);
    });
}