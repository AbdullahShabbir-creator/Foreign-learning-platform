// models/listeningProgress.model.js
const mongoose = require('mongoose');

const ListeningProgressSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
    unique: true, // each user has one progress document
  },
  progress: {
    type: Map,
    of: Number, // e.g. { ilerts: 2, german: 1, chinese: 4 }
    default: {},
  },
}, { timestamps: true });

module.exports = mongoose.model("ListeningProgress", ListeningProgressSchema);
