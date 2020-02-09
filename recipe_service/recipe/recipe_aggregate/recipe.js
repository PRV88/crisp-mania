module.exports = buildRecipe = ({ makeId }) => {

    return Object.freeze = {
        makeRecipe
    }

    function makeRecipe({ existing, title, description, category, time, yeilds, ingredients, procedure, nutrients } = {}) {



        if (!existing) {
            existing = {
                _id: null
            }
        }
        console.log(time);
        try {

            return Object.freeze = {
                getId: () => ID(existing),
                getTitle: () => title,
                getdescription: () => description,
                getCategory: () => category,
                getTime: () => time,
                getYeilds: () => yeilds,
                getIngredients: () => ingredients,
                getProcedure: () => procedure,
                getNutrients: () => nutrients
            }

        } catch (e) {
            console.log(e);
        }
    }

    function ID({ _id }) {
        if (_id != null) {
            return _id;
        } else {
            return makeId();
        }
    }

}