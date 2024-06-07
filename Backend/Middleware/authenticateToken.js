const jwt = require("jsonwebtoken");
const User = require("../Models/Users");

module.exports = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.sendStatus(401);

  try {
    const decoded = jwt.verify(token, "secret");
    req.user = await User.findOne({ email: decoded.email });
    next();
  } catch (err) {
    res.sendStatus(403);
  }
};

