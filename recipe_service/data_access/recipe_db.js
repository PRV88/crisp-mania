module.exports = makeODM = ({ model }) => {
    return {
        save,
        updateOne,
        removeById
    }

    // To save data assest in database 
    function save(recipeInfo) {
        console.log(recipeInfo);
        try {
            const recipe = model(recipeInfo);
            return recipe.save()
        } catch (err) {
            return err;
        }
    }

    // To Update one data assest in database
    function updateOne(recipeInfo) {
        console.log(recipeInfo._id);
        console.log(recipeInfo);

        try {
            return model.findOneAndUpdate({ _id: recipeInfo._id }, recipeInfo, { upsert: true });
        } catch (err) {
            return err;
        }
    }

    // To  remove data assest in database 
    function removeById({ _id }) {
        console.log(_id);
        try {
            return model.deleteOne({ _id: _id });
        } catch (err) {
            return err;
        }
    }



}