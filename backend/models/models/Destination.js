const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({
  id:          String,
  name:        String,
  province:    String,
  category:    String,
  image:       String,
  description: String,
  latitude:    Number,
  longitude:   Number,
  bestSeason:  String,
  entryFee:    String,
  activities:  [String]
});

module.exports = mongoose.model('Destination', destinationSchema);