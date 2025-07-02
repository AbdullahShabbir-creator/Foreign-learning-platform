// routes/listeningProgress.routes.js
const express = require("express");
const router = express.Router();
const { getNextListeningIndex } = require("../controllers/ListeningProgress");

// GET /api/listening-progress/:userId?language=ilerts
router.get("/:userId", getNextListeningIndex);

module.exports = router;
