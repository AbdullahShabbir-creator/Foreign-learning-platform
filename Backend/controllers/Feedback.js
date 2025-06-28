const Feedback = require('../models/Feedback');

// ✅ Create feedback
exports.createFeedback = async (req, res) => {
  try {
    const { courseId, comment, rating } = req.body;
    const studentId = req.user._id;  // assuming you use auth middleware

    const feedback = new Feedback({
      course: courseId,
      student: studentId,
      comment,
      rating
    });

    await feedback.save();
    res.status(201).json({ message: 'Feedback submitted', feedback });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// ✅ Delete feedback by ID
exports.deleteFeedback = async (req, res) => {
  try {
    const { id } = req.params;
    const feedback = await Feedback.findByIdAndDelete(id);

    if (!feedback) {
      return res.status(404).json({ message: 'Feedback not found' });
    }

    res.status(200).json({ message: 'Feedback deleted', feedback });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// ✅ Get all feedbacks
exports.getAllFeedbacks = async (req, res) => {
  try {
    const feedbacks = await Feedback.find()
      .populate('student', 'name email')
      .populate('course', 'title');
      
    res.status(200).json(feedbacks);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// ✅ Delete all feedbacks
exports.deleteAllFeedbacks = async (req, res) => {
  try {
    await Feedback.deleteMany();
    res.status(200).json({ message: 'All feedbacks deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// ✅ Get feedback by ID
exports.getFeedbackById = async (req, res) => {
  try {
    const { id } = req.params;
    const feedback = await Feedback.findById(id)
      .populate('student', 'name email')
      .populate('course', 'title');

    if (!feedback) {
      return res.status(404).json({ message: 'Feedback not found' });
    }

    res.status(200).json(feedback);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// ✅ Get feedbacks by Course ID
exports.getFeedbackByCourseId = async (req, res) => {
  try {
    const { courseId } = req.params;
    const feedbacks = await Feedback.find({ course: courseId })
      .populate('student', 'name email')
      .populate('course', 'title');

    res.status(200).json(feedbacks);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// ✅ Get feedbacks by Student ID
exports.getFeedbackByStudentId = async (req, res) => {
  try {
    const { studentId } = req.params;
    const feedbacks = await Feedback.find({ student: studentId })
      .populate('student', 'name email')
      .populate('course', 'title');

    res.status(200).json(feedbacks);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};
