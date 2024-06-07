const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const profileRoute = require("./Routes/profile");
const bookingRoute = require("./Routes/bookings");

const app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose
  .connect(
    "mongodb+srv://kevinkavita118:GeNgptKvKvJPyB2k@travel.soybrzt.mongodb.net/Travel?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });

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

function generateAccessToken(user) {
  return jwt.sign(user, "secret");
}

app.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const passwordHash = await bcrypt.hash(password, 10);
    const user = new User({ username, email, passwordHash });
    await user.save();
    const token = generateAccessToken({ username, email });
    res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error registering new user");
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send("User not found.");
    }
    const validPassword = await bcrypt.compare(password, user.passwordHash);
    if (!validPassword) {
      return res.status(401).send("Invalid password.");
    }
    const token = generateAccessToken({ username: user.username, email });
    res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error logging in user");
  }
});

app.use("/api", profileRoute);
app.use("/api", bookingRoute);


app.listen(3001, () => {
  console.log("Server running on port 3001");
});
