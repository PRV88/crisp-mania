const makeRecipe = require("./recipe_aggregate/index");
const recipeService = require("./recipe_service");
const { addRecipe, updateRecipe, removeRecipe } = recipeService({ makeRecipe });

module.exports = {
    addRecipe,
    updateRecipe,
    removeRecipe
};