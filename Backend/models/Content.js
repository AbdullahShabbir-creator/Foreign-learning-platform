const mongoose = require('mongoose');

const ContentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  pdfUrl: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Content', ContentSchema);
