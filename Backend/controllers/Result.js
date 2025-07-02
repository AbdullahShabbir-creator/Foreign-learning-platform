const Result = require('../models/Result.js');

// POST /api/results
const postResult = async (req, res) => {
  try {
    const { userId, test, type, total_score, results } = req.body;

    if (
      userId == null ||
      test == null ||
      total_score == null ||
      results == null
    ) {
      console.log(userId, test, total_score, results);
      return res.status(400).json({ error: 'Missing required fields.' });
    }

    // ✅ Log if details exist
    if (results.some(r => r.details)) {
      console.log('Details detected in some result items');
    }

    const sanitizedResults = results.map(r => ({
      title: r.title,
      score: r.score,
      feedback: r.feedback,
      remark: r.remark,
      total_score: r.total_score,
      ...(r.details ? { details: r.details } : {}) // ✅ only include if provided
    }));

    const newResult = new Result({
      userId,
      test,
      type,
      total_score,
      results: sanitizedResults
    });

    await newResult.save();

    res.status(201).json({ message: 'Result saved successfully.', result: newResult });

  } catch (err) {
    console.error('Error saving result:', err);
    res.status(500).json({ error: 'Server error while saving result.' });
  }
};
// GET /api/results/user/:userId
const getResultsByUserId = async (req, res) => {
  try {
    const results = await Result.find({ userId: req.params.userId }).sort({ createdAt: -1 });
    res.status(200).json(results);
  } catch (err) {
    console.error('Error fetching user results:', err);
    res.status(500).json({ error: 'Server error while fetching results.' });
  }
};

// GET /api/results/:resultId
const getResultById = async (req, res) => {
  try {
    const result = await Result.findById(req.params.resultId);
    if (!result) return res.status(404).json({ error: 'Result not found.' });
    res.status(200).json(result);
  } catch (err) {
    console.error('Error fetching result by ID:', err);
    res.status(500).json({ error: 'Server error while fetching result.' });
  }
};

// DELETE /api/results/:resultId
const deleteResultById = async (req, res) => {
  try {
    const deleted = await Result.findByIdAndDelete(req.params.resultId);
    if (!deleted) return res.status(404).json({ error: 'Result not found.' });
    res.status(200).json({ message: 'Result deleted successfully.' });
  } catch (err) {
    console.error('Error deleting result:', err);
    res.status(500).json({ error: 'Server error while deleting result.' });
  }
};

// DELETE /api/results/user/:userId
const deleteAllResultsByUserId = async (req, res) => {
  try {
    const deleted = await Result.deleteMany({ userId: req.params.userId });
    res.status(200).json({ message: `${deleted.deletedCount} result(s) deleted.` });
  } catch (err) {
    console.error('Error deleting all user results:', err);
    res.status(500).json({ error: 'Server error while deleting all results.' });
  }
};

module.exports = {
  postResult,
  getResultsByUserId,
  getResultById,
  deleteResultById,
  deleteAllResultsByUserId
};
