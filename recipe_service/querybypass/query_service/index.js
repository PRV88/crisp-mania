const { find, findById } = require("../data_access/index");

module.exports = {
    findAllRecipes,
    findRecipe
}

function findAllRecipes(query) {

    return find()
        .select(query.select)
        .skip(query.skip)
        .limit(query.limit);
}

function findRecipe({ _id }) {

    return find()
        .where({ _id: _id })
}