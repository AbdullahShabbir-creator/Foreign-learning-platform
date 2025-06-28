const VideoReport = require('../models/VideoReport');

// @desc Submit a new report
// @route POST /api/video-reports
// @access Public (or protected if you want only logged-in users)
exports.createReport = async (req, res) => {
  try {
    const { studentId, courseId, videoPath, reason, description } = req.body;

    if (!studentId || !courseId || !videoPath || !reason) {
      return res.status(400).json({ message: 'studentId, courseId, videoPath, and reason are required.' });
    }

    const report = new VideoReport({
      studentId,
      courseId,
      videoPath,
      reason,
      description
    });

    await report.save();
    res.status(201).json({ message: 'Report submitted successfully.', report });
  } catch (err) {
    console.error('Error creating report:', err);
    res.status(500).json({ message: 'Server error while creating report.' });
  }
};

// @desc Get all reports (for admin review)
// @route GET /api/video-reports
// @access Admin
exports.getAllReports = async (req, res) => {
  try {
    const reports = await VideoReport.find()
      .populate('studentId', 'name email') 
      .populate('courseId', 'title description')  // Populate course title + description
      .sort({ createdAt: -1 });

    res.json(reports);
  } catch (err) {
    console.error('Error fetching reports:', err);
    res.status(500).json({ message: 'Error fetching reports', error: err.message });
  }
};

// @desc Get a single report by ID
// @route GET /api/video-reports/:id
// @access Admin
exports.getReportById = async (req, res) => {
  try {
    const report = await VideoReport.findById(req.params.id)
      .populate('studentId', 'name email')
      .populate('reviewedBy', 'name email')
      .populate('courseId', 'title description');

    if (!report) {
      return res.status(404).json({ message: 'Report not found.' });
    }

    res.json(report);
  } catch (err) {
    console.error('Error fetching report:', err);
    res.status(500).json({ message: 'Server error while fetching report.' });
  }
};

// @desc Update report status (e.g. mark as reviewed/resolved)
// @route PATCH /api/video-reports/:id
// @access Admin
exports.updateReportStatus = async (req, res) => {
  try {
    const { status, reviewedBy } = req.body;

    if (!status || !['pending', 'reviewed', 'resolved'].includes(status)) {
      return res.status(400).json({ message: 'Valid status is required.' });
    }

    const updateData = { status };
    if (status === 'resolved') {
      updateData.resolvedAt = new Date();
    }
    if (reviewedBy) {
      updateData.reviewedBy = reviewedBy;
    }

    const report = await VideoReport.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    if (!report) {
      return res.status(404).json({ message: 'Report not found.' });
    }

    res.json({ message: 'Report updated successfully.', report });
  } catch (err) {
    console.error('Error updating report:', err);
    res.status(500).json({ message: 'Server error while updating report.' });
  }
};

// @desc Delete a report
// @route DELETE /api/video-reports/:id
// @access Admin
exports.deleteReport = async (req, res) => {
  try {
    const report = await VideoReport.findByIdAndDelete(req.params.id);

    if (!report) {
      return res.status(404).json({ message: 'Report not found.' });
    }

    res.json({ message: 'Report deleted successfully.' });
  } catch (err) {
    console.error('Error deleting report:', err);
    res.status(500).json({ message: 'Server error while deleting report.' });
  }
};
