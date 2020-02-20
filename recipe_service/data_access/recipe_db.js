module.exports = makeODM = ({ model }) => {
    return {
        save,
        updateOne,
        removeById
    }

    // To save data assest in database 
    function save(recipeInfo) {
        // try {
        const recipe = model(recipeInfo);
        console.log("okoko")
            // recipe.save()
            //     .then((data) => {
            //         console.log("promise");
            //         console.log(data);
            //     })
            //     .catch((err) => {
            //         console.log("err");
            //         console.log(err);
            //     })
        return recipe.save()
        console.log("execute");
        // } catch (err) {
        //     return err;
        // }
        // console.log("end");
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