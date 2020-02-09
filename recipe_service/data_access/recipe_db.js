module.exports = makeODM = ({ model }) => {
    return {
        save,
        updateOne,
        removeById
    }

    // To save data assest in database 
    function save(recipeInfo) {
        try {
            const recipe = model(recipeInfo);
            return recipe.save()
        } catch (err) {
            return err;
        }
    }

    // To Update one data assest in database
    function updateOne(recipeInfo) {
        try {
            return model.findOneAndUpdate({ _id: recipeInfo._id }, recipeInfo);
        } catch (err) {
            return err;
        }
    }

    // To  remove data assest in database 
    function removeById({ _id }) {

        try {
            return model.deleteOne({ _id: _id });
        } catch (err) {
            return err;
        }
    }



}