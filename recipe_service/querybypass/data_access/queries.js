module.exports = makeQuerySet = (model) => {

    return {
        find,
        findById
    }

    function find() {
        return model.find();
    }

    function findById({ _id }) {
        console.log(_id)
        return model.findOne({ _id: _id });
    }

}