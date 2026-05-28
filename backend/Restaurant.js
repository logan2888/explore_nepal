const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  name:        String,
  cuisine:     String,
  location:    String,
  priceRange:  String,
  description: String,
  image:       String,
  rating:      Number
});

module.exports = mongoose.model('Restaurant', restaurantSchema);