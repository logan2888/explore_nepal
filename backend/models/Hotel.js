const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
  name:        String,
  type:        String,
  location:    String,
  description: String,
  priceRange:  String,
  image:       String,
  rating:      Number
});

module.exports = mongoose.model('Hotel', hotelSchema);