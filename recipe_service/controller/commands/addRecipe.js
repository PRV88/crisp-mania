const { addRecipe } = require("../../recipe/index");
const Promise = require("promise");
exports.addRecipeController = async(req, res) => {
    const { recipeInfo } = req.body;
    const recipe = await addRecipe(recipeInfo)
    res.status(200).json(recipe);
}