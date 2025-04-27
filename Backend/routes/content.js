const express = require('express');
const router = express.Router();
const multer = require('multer');
const Content = require('../models/Content');
const path = require('path');
const fs = require('fs');

// Ensure uploads/pdfs exists
const uploadDir = path.join(__dirname, '../uploads/pdfs');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Multer config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage });

// POST /api/content
router.post('/', upload.single('pdf'), async (req, res) => {
  try {
    const { title, description } = req.body;
    if (!req.file) return res.status(400).json({ message: 'PDF file required' });
    const pdfUrl = `/uploads/pdfs/${req.file.filename}`;
    const newContent = new Content({ title, description, pdfUrl });
    await newContent.save();
    res.json(newContent);
  } catch (err) {
    res.status(500).json({ message: 'Upload failed' });
  }
});

// GET /api/content
router.get('/', async (req, res) => {
  try {
    const contents = await Content.find().sort({ createdAt: -1 });
    res.json(contents);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch content' });
  }
});

module.exports = router;
