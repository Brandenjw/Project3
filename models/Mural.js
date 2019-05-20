const mongoose = require("../DB/connection");


const muralSchema = mongoose.Schema({
  //object that defines the type of values for each key
  location: String,
  artist: String,
  Image: String,
  Date: Object
});

module.exports = mongoose.model("muralSchema", muralSchema)