const { updateRecipe } = require("../../recipe/index");
const Promise = require("promise");


// Edit recipe route callback function 
exports.editRecipeController = async(req, res) => {
    const { recipeInfo } = req.body;
    updateRecipe(recipeInfo)
        .then(data => {
            return res.json({
                "status": 200,
                "data": data
            })
        })
        .catch(err => {
            return res.json({
                "status": 500,
                "Error": err.errmsg
            })
        })
}