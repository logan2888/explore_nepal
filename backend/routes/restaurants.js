const express = require('express');
const router = express.Router();
const Restaurant = require('../models/Restaurant');

router.get('/', async (req, res) => {
  const data = await Restaurant.find();
  res.json(data);
});

router.post('/', async (req, res) => {
  const resto = new Restaurant(req.body);
  await resto.save();
  res.json({ message: 'Added ✅', resto });
});

router.delete('/:id', async (req, res) => {
  await Restaurant.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted ✅' });
});

module.exports = router;