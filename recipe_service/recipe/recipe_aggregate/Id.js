const mongoose = require("mongoose");

module.exports =
    function makeId() {
        return mongoose.Types.ObjectId();
    }