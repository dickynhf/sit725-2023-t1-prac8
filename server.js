var express = require("express");
var app = express();
const { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://dickynhf:undercover25J@cluster1.dvtbbp3.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
let dbCollection;

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get("/api/pokemon", (req, res) => {
  getAllPokemon((err, result) => {
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
});

function dbConnection(collectionName) {
  client.connect((err) => {
    dbCollection = client.db().collection(collectionName);
    if (!err) {
      console.log("DB connected");
      console.log(dbCollection);
    } else {
      console.error(err);
    }
  });
}

app.post("/api/pokemon", (req, res) => {
  let pokemon = req.body;
  insert(pokemon, (err, result) => {
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
});

function insert(pokemon, callback) {
  dbCollection.insertOne(pokemon, callback);
}

function getAllPokemon(callback) {
  dbCollection.find().toArray(callback);
}

var port = process.env.port || 3000;
app.listen(port, () => {
  console.log("App listening to: " + port);
  dbConnection("Pokemon");
});
