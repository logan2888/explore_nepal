const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

// GET all bookings
router.get('/', async (req, res) => {
  const data = await Booking.find();
  res.json(data);
});

// POST new booking
router.post('/', async (req, res) => {
  const booking = new Booking(req.body);
  await booking.save();
  res.json({ message: 'Booking saved ✅', booking });
});

// GET bookings by email
router.get('/:email', async (req, res) => {
  const data = await Booking.find({ email: req.params.email });
  res.json(data);
});

module.exports = router;