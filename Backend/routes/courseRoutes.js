const express = require('express');
const router = express.Router();
const Course = require('../models/Course');
const { requireAuth } = require('../middleware/authMiddleware');
const multer = require('multer');
const path = require('path');

// Set up multer for video uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });

// POST /api/courses - Instructor uploads a course
router.post('/', requireAuth, upload.single('video'), async (req, res) => {
  try {
    if (req.user.role !== 'instructor') {
      return res.status(403).json({ message: 'Only instructors can upload courses.' });
    }
    const { title, description, language } = req.body;
    if (!req.file) {
      return res.status(400).json({ message: 'Video file is required.' });
    }
    const videoUrl = `/uploads/${req.file.filename}`;
    const course = new Course({
      title,
      description,
      language,
      videoUrl,
      uploadedBy: req.user.id
    });
    await course.save();
    res.status(201).json({ message: 'Course uploaded successfully', course });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// GET /api/courses?language=IELTS - Get courses by language
router.get('/', async (req, res) => {
  try {
    const { language } = req.query;
    const filter = language ? { language } : {};
    const courses = await Course.find(filter).populate('uploadedBy', 'name email');
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;
