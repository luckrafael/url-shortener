const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

// const databaseLink = {};

mongoose.connect(
  `mongodb+srv://url-shortner:${process.env.PASSWORD}@cluster0.mw0rn.mongodb.net/URL?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
mongoose.Promise = global.Promise;

module.exports = mongoose;
