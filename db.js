const mongoose = require("mongoose");

const mongoURI = "mongodb://127.0.0.1:27017/blogs";

const connectToMongo = () => {
  mongoose
    .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to Mongo Successfully"))
    .catch((err) => console.error("Could not connect to Mongo", err));
};
module.exports = connectToMongo;
