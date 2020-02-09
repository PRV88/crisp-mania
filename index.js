const express = require("express");
const app = express();
const connect = require("./dbConfig/config");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const helmet = require("helmet");
const recipe_command = require("./recipe_service/router/recipe_router");
// const { PORT } = require("./config/app_config");
// For db conection
connect();
app.use(morgan("combind"));
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/recipe", recipe_command);

app.listen(5000, () => { console.log("Server is up and running !") });