const { addRecipe } = require("../../recipe/index");
const Promise = require("promise");

// This function responsible for inserting  recipe
exports.addRecipeController = async(req, res) => {

    const { recipeInfo } = req.body;
    addRecipe(recipeInfo)
        .then(data => {
            return res.status(201).json({
                "status": 201,
                "data": data
            });
        })
        .catch(err => {
            return res.status(500).json({
                "status": 500,
                "Error": err.errmsg
            });
        })

}