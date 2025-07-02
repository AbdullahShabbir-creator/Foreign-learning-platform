const mongoose = require('mongoose');

const detailSchema = new mongoose.Schema({
  question: { type: String, required: true },
  studentAnswer: { type: String, required: false },  // optional in case left blank
  comment: { type: String, required: true }
}, { _id: false });

const resultItemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  score: { type: Number, required: true },
  feedback: { type: String, required: true },
  remark: { type: String, required: true },
  total_score: { type: Number, required: true },
  details: { type: [detailSchema], required: false }  // ✅ Optional field
}, { _id: false });

const resultSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  test: { type: String, required: true },
  type: { type: String, required: true },
  total_score: { type: Number, required: true },
  results: [resultItemSchema]
}, { timestamps: true });

module.exports = mongoose.model('Result', resultSchema);
