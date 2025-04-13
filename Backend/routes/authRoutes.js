const express = require("express");
const { registerUser, loginUser, getAllUsers, deleteUser } = require("../controllers/authController");
const isAdmin = require("../middleware/adminMiddleware");

const router = express.Router();

// Public routes
router.post("/signup", registerUser);
router.post("/login", loginUser);

// Admin routes
router.get("/users", isAdmin, getAllUsers);
router.delete("/users/:id", isAdmin, deleteUser);

module.exports = router;
