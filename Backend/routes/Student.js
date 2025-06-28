const express = require('express');
const { 
  getAllStudents, 
  getStudentById, 
  updateStudent, 
  deleteStudentById 
} = require('../controllers/Student');
const { requireAuth } = require('../middleware/authMiddleware');

const router = express.Router();

// You can protect routes if needed using requireAuth
router.get('/', requireAuth, getAllStudents);
router.get('/:id', requireAuth, getStudentById);
router.put('/:id', requireAuth, updateStudent);
router.delete('/:id', requireAuth, deleteStudentById);

module.exports = router;
