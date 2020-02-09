const mongoose = require("mongoose");


function connect() {
    const URI = "mongodb://pravin:pravin@cluster0-shard-00-00-pii9p.mongodb.net:27017,cluster0-shard-00-01-pii9p.mongodb.net:27017,cluster0-shard-00-02-pii9p.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority";
    mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, (err) => {
        console.log("db Connected");
    });
}


module.exports = connect;