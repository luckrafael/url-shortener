const mongoose = require("../database");

const UrlSchema = new mongoose.Schema({
  url: {
    type: String,
    require: true,
  },
  urlCode: {
    type: String,
    require: true,
  },
  CreatedAt: {
    type: Date,
    default: Date.now,
  },
});

const UrlShortner = mongoose.model("UrlShortner", UrlSchema);

module.exports = UrlShortner;
