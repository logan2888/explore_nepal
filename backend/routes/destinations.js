const express = require('express');
const router = express.Router();
const Destination = require('../models/Destination');

router.get('/', async (req, res) => {
  const data = await Destination.find();
  res.json(data);
});

router.post('/', async (req, res) => {
  const dest = new Destination(req.body);
  await dest.save();
  res.json({ message: 'Added ✅', dest });
});

router.delete('/:id', async (req, res) => {
  await Destination.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted ✅' });
});

module.exports = router;