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


// DELETE /api/content/:id
router.delete('/:id', async (req, res) => {
  try {
    const content = await Content.findById(req.params.id);
    if (!content) {
      return res.status(404).json({ message: 'Content not found' });
    }

    // Delete the PDF file from disk
    const filePath = path.join(__dirname, '../', content.pdfUrl);
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    // Remove from database
    await Content.findByIdAndDelete(req.params.id);

    res.json({ message: 'PDF content deleted successfully' });
  } catch (err) {
    console.error('Error deleting content:', err);
    res.status(500).json({ message: 'Server error while deleting content' });
  }
});

module.exports = router;
