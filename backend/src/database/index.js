const mongoose = require("mongoose");

// const databaseLink = {};

mongoose.connect(
  "mongodb+srv://url-shortner:AvZLuSJxE4XcMAzq@cluster0.mw0rn.mongodb.net/URL?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
mongoose.Promise = global.Promise;

module.exports = mongoose;
