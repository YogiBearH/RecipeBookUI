import HttpHelper from './utils/HttpHelper.js';
import Constants from '../../common/Utils/constants.js';

/**
 * @name fetchRecipes
 * @description Utilizes HttpHelper to make a request to an API
 * @param {*} setRecipes sets state for recipes 
 * @param {*} setApiError sets error if response other than 200 is returned
 * @returns sets state for products if 200 response, else sets state for apiError
 */
const fetchRecipes = async (setRecipes, setApiError) => {
    await HttpHelper(`${Constants.RECIPE_ENDPOINT}`, 'GET')
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            throw new Error(Constants.API_ERROR);
        })
        .then(setRecipes)
        .catch(() => {
            setApiError(true);
        })
}
export default fetchRecipes;