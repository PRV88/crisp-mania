const mongoose = require("mongoose");
const recipeScheema = mongoose.Schema({
    _id: {
        type: String
    },
    title: {
        type: String,
        unique: true
    },
    description: {
        type: String
    },
    category: {
        type: Array
    },
    yeilds: {
        type: String
    },
    time: {
        type: Object
    },
    ingredients: {
        type: Array
    },

    procedure: {
        type: Array
    },
    nutrients: {
        type: Array
    },
    createdOn: {
        type: Date,
        default: Date.now()
    }
});


module.exports = mongoose.model("recipe", recipeScheema, "recipe");