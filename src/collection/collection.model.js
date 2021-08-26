const mongoose = require("mongoose");

const Collection = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  showNbTracks: {
    type: Number,
    require: true,
  },
  createdDate: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model('Collection', Collection)
