const { removeRecipe } = require("../../recipe/index");
const Promise = require("promise");
exports.removeRecipeController = async(req, res) => {
    const _id = req.params.id;
    removeRecipe(_id)
        .then(data => {
            return res.status(200).json({
                "status": 200,
                "data": data
            })
        })
        .then(err => {
            return res.status(500).json({
                "status": 500,
                "Error": err.errmsg
            })
        })

}