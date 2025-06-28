const express = require('express');
const router = express.Router();
const instructorController = require('../controllers/Instructor');

// GET all instructors
router.get('/', instructorController.getAllInstructors);

// GET instructor by ID
router.get('/:id', instructorController.getInstructorById);

// PUT (or PATCH) update instructor by ID
router.put('/:id', instructorController.updateInstructor);
// Optionally, you could also support PATCH if you want partial updates:
// router.patch('/:id', instructorController.updateInstructor);

module.exports = router;
