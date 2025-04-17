const express = require('express');
const router = express.Router();
const Course = require('../models/Course');
const Playlist = require('../models/Playlist');
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
    
    // Validate required fields
    const { title, description, language } = req.body;
    if (!title || !language) {
      return res.status(400).json({ message: 'Title and language are required.' });
    }
    
    // Validate video file
    if (!req.file) {
      return res.status(400).json({ message: 'Video file is required.' });
    }
    
    // Validate video file type
    const allowedTypes = ['video/mp4', 'video/webm', 'video/ogg'];
    if (!allowedTypes.includes(req.file.mimetype)) {
      return res.status(400).json({ message: 'Invalid video format. Only MP4, WebM, and OGG are supported.' });
    }
    
    // Validate video size (max 500MB)
    const maxSize = 500 * 1024 * 1024; // 500MB
    if (req.file.size > maxSize) {
      return res.status(400).json({ message: 'Video file is too large. Maximum size is 500MB.' });
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
    console.error('Upload error:', error);
    
    // Handle specific errors
    if (error.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({ message: 'Video file is too large. Maximum size is 500MB.' });
    }
    
    if (error.code === 'LIMIT_FILE_TYPES') {
      return res.status(400).json({ message: 'Invalid video format. Only MP4, WebM, and OGG are supported.' });
    }
    
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// GET /api/courses - Get all courses
router.get('/', async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// GET /api/courses/instructor - Get courses uploaded by the current instructor
router.get('/instructor', requireAuth, async (req, res) => {
  try {
    if (req.user.role !== 'instructor') {
      return res.status(403).json({ message: 'Only instructors can view their courses.' });
    }
    const courses = await Course.find({ uploadedBy: req.user.id });
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Playlist endpoints

// Create a new playlist
router.post('/playlists', requireAuth, async (req, res) => {
  try {
    if (req.user.role !== 'instructor') {
      return res.status(403).json({ message: 'Only instructors can create playlists.' });
    }
    const { title } = req.body;
    if (!title) return res.status(400).json({ message: 'Playlist title is required.' });
    const playlist = new Playlist({ title, instructor: req.user.id, videos: [] });
    await playlist.save();
    res.status(201).json({ message: 'Playlist created', playlist });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get all playlists for instructor
router.get('/playlists', requireAuth, async (req, res) => {
  try {
    if (req.user.role !== 'instructor') {
      return res.status(403).json({ message: 'Only instructors can view playlists.' });
    }
    const playlists = await Playlist.find({ instructor: req.user.id });
    res.json(playlists);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Update playlist videos
router.put('/playlists/:playlistId', requireAuth, async (req, res) => {
  try {
    if (req.user.role !== 'instructor') {
      return res.status(403).json({ message: 'Only instructors can update playlists.' });
    }
    const { videos } = req.body; // array of { courseId, videoUrl, videoTitle }
    const playlist = await Playlist.findOne({ _id: req.params.playlistId, instructor: req.user.id });
    if (!playlist) return res.status(404).json({ message: 'Playlist not found.' });
    playlist.videos = videos;
    await playlist.save();
    res.json({ message: 'Playlist updated', playlist });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// DELETE a playlist (permanently)
router.delete('/playlists/:playlistId', requireAuth, async (req, res) => {
  try {
    if (req.user.role !== 'instructor') {
      return res.status(403).json({ message: 'Only instructors can delete playlists.' });
    }
    const playlist = await Playlist.findOneAndDelete({ _id: req.params.playlistId, instructor: req.user.id });
    if (!playlist) return res.status(404).json({ message: 'Playlist not found.' });
    res.json({ message: 'Playlist deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// DELETE a course (permanently)
router.delete('/:courseId', requireAuth, async (req, res) => {
  try {
    if (req.user.role !== 'instructor') {
      return res.status(403).json({ message: 'Only instructors can delete courses.' });
    }
    const course = await Course.findOneAndDelete({ _id: req.params.courseId, uploadedBy: req.user.id });
    if (!course) return res.status(404).json({ message: 'Course not found.' });
    res.json({ message: 'Course deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;
