// models/VideoReport.js
const mongoose = require('mongoose');

const videoReportSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // assuming you have a User model for students
    required: true
  },
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course', // assuming your course model is named 'Course'
    required: true
  },
  videoPath: {
    type: String,
    required: true
  },
  reason: {
    type: String,
    enum: [
      'Inappropriate content',
      'Poor quality',
      'Incorrect information',
      'Other'
    ],
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  status: {
    type: String,
    enum: ['pending', 'reviewed', 'resolved'],
    default: 'pending'
  },
  reviewedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    default: null
  },
  resolvedAt: {
    type: Date,
    default: null
  }
}, { timestamps: true });

module.exports = mongoose.model('VideoReport', videoReportSchema);
