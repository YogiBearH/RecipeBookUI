import HttpHelper from '../../common/Utils/HttpHelper.js'
import Constants from '../../common/Utils/constants.js';

/**
 * @name fetchRecipes
 * @description Utilizes HttpHelper to make a request to an API
 * @param {*} setRecipe sets state for recipes 
 * @param {*} setApiError sets error if response other than 200 is returned
 * @returns sets state for products if 200 response, else sets state for apiError
 */
const fetchRecipeById = async (setRecipe, setApiError, id, recipe) => {
    await HttpHelper(`${Constants.RECIPE_ENDPOINT}/${id}`, 'GET', recipe)
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            throw new Error(Constants.API_ERROR);
        })
        .then(setRecipe)
        .catch(() => {
            setApiError(true);
        })
}
export default fetchRecipesById;