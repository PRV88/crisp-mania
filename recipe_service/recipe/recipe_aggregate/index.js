const buildRecipe = require("./recipe");
const makeId = require("./id");

const { makeRecipe } = buildRecipe({ makeId });


// const recipeInfo = {
//     title: "title",
//     description: "Lorem ipsum ",
//     time: {
//         prepTime: "30",
//         cookTime: "1"
//     },
//     yeilds: "3",
//     ingredinets: [{
//         "step1": "skldjs"
//     }, { "step2": "dnfskd" }],
//     procedure: [{
//         "step1": "skldjs"
//     }, { "step2": "dnfskd" }],

//     nutrients: [{
//         "step1": "skldjs"
//     }, { "step2": "dnfskd" }]
// }


// let {
//     getId,
//     getTitle,
//     getdescription,
//     getTime,
//     getYeilds,
//     getIngredinets,
//     getProcedure,
//     getNutrients
// } = makeRecipe(recipeInfo);


module.exports = makeRecipe;