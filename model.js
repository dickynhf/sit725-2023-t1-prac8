let client = require("./dbConnection");
let collection = client.db("test").collection("Pokemon");

function insertPokemon(pokemon, callback) {
  collection.insertOne(pokemon, callback);
}

function getAllPokemon(callback) {
  collection.find().toArray(callback);
}

module.exports = { insertPokemon, getAllPokemon };
