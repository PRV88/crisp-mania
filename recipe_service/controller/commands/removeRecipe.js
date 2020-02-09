const { removeRecipe } = require("../../recipe/index");
const Promise = require("promise");
exports.removeRecipeController = async(req, res) => {
    const _id = req.params.id;
    const recipe = await removeRecipe(_id)
    res.status(200).json(recipe);
}