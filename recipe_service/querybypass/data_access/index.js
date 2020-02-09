const makeQuerySet = require("./queries");
const model = require("../../model/recipe");
const { find, findById } = makeQuerySet(model);

module.exports = {
    find,
    findById
}