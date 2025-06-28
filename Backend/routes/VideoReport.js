const express = require('express');
const router = express.Router();
const videoReportController = require('../controllers/videoReportController');

// For production you should secure these with authentication & authorization middleware (e.g. isAuth, isAdmin)

// @route POST /api/video-reports
// @desc Submit a new report (student)
router.post('/', videoReportController.createReport);

// @route GET /api/video-reports
// @desc Get all reports (admin)
router.get('/', videoReportController.getAllReports);  

// @route GET /api/video-reports/:id
// @desc Get single report by ID (admin)
router.get('/:id', videoReportController.getReportById);

// @route PATCH /api/video-reports/:id
// @desc Update report status (admin)
router.patch('/:id', videoReportController.updateReportStatus);

// @route DELETE /api/video-reports/:id
// @desc Delete a report (admin)
router.delete('/:id', videoReportController.deleteReport);

module.exports = router;
