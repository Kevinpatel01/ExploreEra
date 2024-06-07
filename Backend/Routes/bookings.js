const express = require("express");
const router = express.Router();
const Booking = require("../Models/booking");
const authMiddleware = require("../Middleware/authenticateToken");

function parseCost(cost) {
  return parseFloat(cost.replace(/[^\d.]/g, ""));
}

router.post("/booking", authMiddleware, async (req, res) => {
  try {
    const bookingData = { ...req.body, userId: req.user._id };
    bookingData.location.cost = parseCost(bookingData.location.cost);

    bookingData.startdate = new Date(bookingData.startdate);
    bookingData.enddate = new Date(bookingData.enddate);

    const booking = new Booking(bookingData);
    await booking.save();
    res.status(201).send(booking);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get("/booking", authMiddleware, async (req, res) => {
  try {
    const bookings = await Booking.find({ userId: req.user._id });
    res.status(200).json(bookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
