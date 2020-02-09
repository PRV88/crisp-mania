const express = require("express");
const router = express.Router();

// Commands 
const { addRecipeController, editRecipeController, removeRecipeController } = require("../controller/commands/index");
router.post("/add", addRecipeController);
router.put("/edit", editRecipeController);
router.delete("/remove/:id", removeRecipeController);


// Queries

const { findAllRecipesController, findRecipeController } = require("../controller/queries/index");

router.get("/", findAllRecipesController);
router.get("/:id", findRecipeController);

module.exports = router;