const { save, updateOne, removeById } = require("../data_access/index");
module.exports = recipeService = ({ makeRecipe }) => {
    return {
        addRecipe,
        updateRecipe,
        removeRecipe
    }

    function addRecipe(recipeInfo) {
        const recipe = makeRecipe(recipeInfo);

        return save({
            _id: recipe.getId(),
            title: recipe.getTitle(),
            description: recipe.getdescription(),
            category: recipe.getCategory(),
            time: recipe.getTime(),
            yeilds: recipe.getYeilds(),
            ingredients: recipe.getIngredients(),
            procedure: recipe.getProcedure(),
            nutrients: recipe.getNutrients()
        });
    }


    function updateRecipe(recipeInfo) {

        const existing = {
            _id: recipeInfo._id
        }
        const recipe = makeRecipe({ existing, ...recipeInfo });

        return updateOne({
            _id: recipe.getId(),
            title: recipe.getTitle(),
            description: recipe.getdescription(),
            category: recipe.getCategory(),
            time: recipe.getTime(),
            yeilds: recipe.getYeilds(),
            ingredients: recipe.getIngredients(),
            procedure: recipe.getProcedure(),
            nutrients: recipe.getNutrients()
        });
    }

    function removeRecipe(_id) {
        return removeById({ _id });
    }
}