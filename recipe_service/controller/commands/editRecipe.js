const { updateRecipe } = require("../../recipe/index");
const Promise = require("promise");
exports.editRecipeController = async(req, res) => {
    const { recipeInfo } = req.body;
    const recipe = await updateRecipe(recipeInfo)
    res.status(200).json(recipe);
}