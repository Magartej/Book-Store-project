const express = require("express");
const User = require("./user.model");
const jwt = require("jsonwebtoken");
const { verifyToken, verifyAdmin } = require('../middleware/auth');

const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET_KEY;

// Admin login
router.post("/admin", async (req, res) => {
  const { username, password } = req.body;
  try {
    const admin = await User.findOne({ username });
    if (!admin) {
      return res.status(404).send({ message: "Admin not found!" });
    }
    if (admin.password !== password) {
      return res.status(401).send({ message: "Invalid password!" });
    }

    const token = jwt.sign(
      { id: admin._id, username: admin.username, role: admin.role },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    return res.status(200).json({
      message: "Authentication successful",
      token: token,
      user: {
        username: admin.username,
        role: admin.role,
      },
    });
  } catch (error) {
    console.error("Failed to login as admin", error);
    res.status(401).send({ message: "Failed to login as admin" });
  }
});

// Verify admin token
router.get("/verify-admin", verifyToken, async (req, res) => {
  try {
    // The verifyToken middleware already checked the token validity
    // Now check if the user is an admin
    if (req.user && req.user.role === 'admin') {
      return res.status(200).json({ isAdmin: true });
    } else {
      return res.status(403).json({ isAdmin: false });
    }
  } catch (error) {
    console.error("Error verifying admin token", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
