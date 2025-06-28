const User = require('../models/User');

// Get all instructors
exports.getAllInstructors = async (req, res) => {
  try {
    const instructors = await User.find({ role: 'instructor' });
    res.json(instructors);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get instructor by ID
exports.getInstructorById = async (req, res) => {
  try {
    const instructor = await User.findOne({ _id: req.params.id, role: 'instructor' });
    if (!instructor) {
      return res.status(404).json({ message: 'Instructor not found' });
    }
    res.json(instructor);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update instructor
exports.updateInstructor = async (req, res) => {
  try {
    const updates = {
      ...req.body,  // will include address, mobile, about if sent
    };

    const instructor = await User.findOneAndUpdate(
      { _id: req.params.id, role: 'instructor' },
      updates,
      { new: true }
    );

    if (!instructor) {
      return res.status(404).json({ message: 'Instructor not found' });
    }

    res.json(instructor);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
