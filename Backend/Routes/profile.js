const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const verifyToken = require("../Middleware/verifyToken");

const User =
  mongoose.models.User ||
  mongoose.model(
    "User",
    new mongoose.Schema({
      username: { type: String, required: true },
      email: { type: String, required: true, unique: true },
      passwordHash: { type: String, required: true },
    })
  );

router.get("/profile", verifyToken, async (req, res) => {
  try {
    const user = await User.findOne({ email: req.user.email }).select(
      "-passwordHash"
    );
    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

router.put("/profile", verifyToken, async (req, res) => {
  try {
    const { username, email } = req.body;
    const updatedUser = await User.findOneAndUpdate(
      { email: req.user.email },
      { username, email },
      { new: true, runValidators: true }
    ).select("-passwordHash");

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(updatedUser);
  } catch (error) {
    if (err.code === 11000) {
      return res.status(400).json({ message: "Email already in use!!" });
    }
    res.status(500).json({ message: "Server Error!" });
  }
});

module.exports = router;
