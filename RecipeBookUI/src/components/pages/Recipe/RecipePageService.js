import HttpHelper from '../../common/Utils/HttpHelper.js'
import Constants from '../../common/Utils/constants.js';

/**
 * @name fetchRecipes
 * @description Utilizes HttpHelper to make a request to an API
 * @param {*} setRecipe sets state for recipes 
 * @param {*} setApiError sets error if response other than 200 is returned
 * @returns sets state for products if 200 response, else sets state for apiError
 */
const fetchRecipeById = async (id) => {
    try {
        const response = await HttpHelper(`${Constants.RECIPE_ENDPOINT}/${id}`, 'GET');
        if(response.ok) {
            const recipe = await response.json();
            return recipe;
        }
        throw new Error('Failed to fetch the recipe.');
    } catch (error) {
        console.error('Error fetching recipe', error);
        throw error;
    }
}
export default fetchRecipeById;