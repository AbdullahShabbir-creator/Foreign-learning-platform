const express = require("express");
const { 
  registerUser, 
  loginUser, 
  getAllUsers, 
  deleteUser, 
  updatePassword, 
  changePasswordByEmail, 
  verifySecurityQuestions, 
  resetPassword,
  resetPasswordByEmail
} = require("../controllers/authController");
const { requireAuth } = require("../middleware/authMiddleware");

const router = express.Router();

// Public routes
router.post("/signup", registerUser);
router.post("/login", loginUser);
router.post("/change-password", changePasswordByEmail);
router.post("/verify-security-questions", verifySecurityQuestions);
router.post("/reset-password", resetPassword);
router.post("/reset-password-by-email", resetPasswordByEmail);

// Protected routes
router.get("/profile", requireAuth, (req, res) => {
  res.json({
    user: {
      id: req.user.id,
      name: req.user.name,
      email: req.user.email,
      role: req.user.role
    }
  });
});

// Update password (protected)
router.put("/update-password", requireAuth, updatePassword);

// Admin routes
router.get("/users", requireAuth, getAllUsers);
router.delete("/users/:id", requireAuth, deleteUser);

module.exports = router;
