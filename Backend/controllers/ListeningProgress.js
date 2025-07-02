// controllers/listeningProgress.controller.js
const ListeningProgress = require("../models/ListeningProgress");

// GET current index and return next test index for a language
exports.getNextListeningIndex = async (req, res) => {
  const { userId } = req.params;
  const { language } = req.query; // "ilerts", "german", "chinese"
  const TOTAL_TESTS = 5;

  if (!userId || !language) return res.status(400).json({ error: "Missing userId or language" });

  try {
    let progressDoc = await ListeningProgress.findOne({ userId });

    if (!progressDoc) {
      progressDoc = new ListeningProgress({ userId, progress: {} });
    }

    const currentIndex = progressDoc.progress.get(language) || 0;
    const nextIndex = currentIndex % TOTAL_TESTS;

    // Update index for next round
    progressDoc.progress.set(language, nextIndex + 1);
    await progressDoc.save();

    return res.json({ testIndex: nextIndex }); // return which test to serve
  } catch (err) {
    console.error("Error in getNextListeningIndex:", err);
    res.status(500).json({ error: "Server error" });
  }
};
