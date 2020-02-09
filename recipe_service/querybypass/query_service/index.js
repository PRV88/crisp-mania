const { find, findById } = require("../data_access/index");

module.exports = {
    findAllRecipes,
    findRecipe
}



function findAllRecipes() {
    return find();
}

function findRecipe({ _id }) {
    console.log("Step Sucess", _id)
    return findById({ _id });
}