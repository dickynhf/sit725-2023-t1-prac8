var express = require("express");
var router = express.Router();
let controller = require("./controller");

router.get("/api/pokemon", (req, res) => {
  controller.getAllPokemon(req, res);
});

router.post("/api/pokemon", (req, res) => {
  controller.createPokemon(req, res);
});

module.exports = router;
