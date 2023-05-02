let model = require("./model");

const createPokemon = (req, res) => {
  let pokemon = req.body;
  model.insertPokemon(pokemon, (err, result) => {
    if (err) {
      res.json({ statusCode: 400, message: err });
    } else {
      res.json({
        statusCode: 200,
        data: result,
        message: "Pokemon Successfully Add",
      });
    }
  });
};

const getAllPokemon = (req, res) => {
  model.getAllPokemon((err, result) => {
    if (err) {
      res.json({ statusCode: 400, message: err });
    } else {
      res.json({
        statusCode: 200,
        data: result,
        message: "Successful",
      });
    }
  });
};

module.exports = { createPokemon, getAllPokemon };
