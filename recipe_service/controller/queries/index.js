const {
    findAllRecipes,
    findRecipe
} = require("../../querybypass/query_service/index");

const findAllRecipesController = async(req, res) => {
    try {
        const recipes = await findAllRecipes();
        res.status(200).json(recipes);
    } catch (error) {

    }

}


const findRecipeController = async(req, res) => {
    try {

        const _id = req.params.id;
        const recipes = await findRecipe({ _id });
        console.log("okoko")
        res.status(200).json(recipes);
    } catch (error) {

    }
}


module.exports = {
    findAllRecipesController,
    findRecipeController
}