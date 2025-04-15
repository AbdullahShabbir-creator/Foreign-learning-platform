const mongoose = require('mongoose');

const PlaylistSchema = new mongoose.Schema({
  title: { type: String, required: true },
  instructor: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  videos: [
    {
      courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
      videoUrl: { type: String, required: true },
      videoTitle: { type: String, required: true }
    }
  ]
}, { timestamps: true });

module.exports = mongoose.model('Playlist', PlaylistSchema);
