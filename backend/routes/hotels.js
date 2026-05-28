const express = require('express');
const router = express.Router();
const Hotel = require('../models/Hotel');

router.get('/', async (req, res) => {
  const data = await Hotel.find();
  res.json(data);
});

router.post('/', async (req, res) => {
  const hotel = new Hotel(req.body);
  await hotel.save();
  res.json({ message: 'Added ✅', hotel });
});

router.delete('/:id', async (req, res) => {
  await Hotel.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted ✅' });
});

module.exports = router;