const {
    findAllRecipes,
    findRecipe
} = require("../../querybypass/query_service/index");

const Promises = require("promise");

// This Function returns paginated data
const findAllRecipesController = async(req, res) => {
    const size = parseInt(req.query.size);
    var pageNo = parseInt(req.query.pageNo);
    console.log(size + "&&" + pageNo);
    query = {};
    if (pageNo < 0 || pageNo === 0) {
        response = { "error": true, "message": "Invalid Page no" };
        return res.json(response);
    }

    query.skip = size * (pageNo - 1);
    query.limit = size;

    findAllRecipes(query)
        .then(data => {
            return res.status(200).json({
                "status": 200,
                "data": data
            });
        })
        .catch(err => {
            return res.status(500).json({
                "status": 500,
                "Error": err.errmsg
            })
        })
}



// This Function responsible for return single recipe data using corresponding recipe _id 
const findRecipeController = async(req, res) => {

    const _id = req.params.id;
    findRecipe({ _id })
        .then(data => {
            return res.status(200).json({
                "status": 200,
                "data": data
            });
        })
        .catch(err => {
            return res.status(500).json({
                "status": 500,
                "Error": err.errmsg
            })
        });
}


module.exports = {
    findAllRecipesController,
    findRecipeController
}