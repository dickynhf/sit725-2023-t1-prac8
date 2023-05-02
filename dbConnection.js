const { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://dickynhf:undercover25J@cluster1.dvtbbp3.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

client.connect((err) => {
  if (!err) {
    console.log("DB connected");
  } else {
    console.error(err);
  }
});

module.exports = client;
