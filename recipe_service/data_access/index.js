const model = require("../model/recipe");
const makeODM = require("./recipe_db");

const { save, updateOne, removeById } = makeODM({ model });

module.exports = {
    save,
    updateOne,
    removeById
};