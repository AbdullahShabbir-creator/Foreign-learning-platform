const express = require('express');
const router = express.Router();

const { requireAuth } = require('../middleware/authMiddleware');
const {
  createFeedback,
  deleteFeedback,
  deleteAllFeedbacks,
  getAllFeedbacks,
  getFeedbackById,
  getFeedbackByCourseId,
  getFeedbackByStudentId
} = require('../controllers/Feedback');  // Adjust path if needed

// ✅ Create feedback (requires auth)
router.post('/', requireAuth, createFeedback);

// ✅ Delete feedback by ID (requires auth)
router.delete('/:id', requireAuth, deleteFeedback);

// ✅ Delete all feedbacks (requires auth — make admin in future)
router.delete('/', requireAuth, deleteAllFeedbacks);

// ✅ Get all feedbacks (public or protect as needed)
router.get('/', getAllFeedbacks);

// ✅ Get feedback by ID
router.get('/id/:id', getFeedbackById);   

// ✅ Get feedbacks by Course ID
router.get('/course/:courseId', getFeedbackByCourseId);

// ✅ Get feedbacks by Student ID
router.get('/student/:studentId', getFeedbackByStudentId);

module.exports = router;
