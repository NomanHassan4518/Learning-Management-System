import Enrollment from "../models/enrollmentModel.js";

// Create a new enrollment
export const createEnrollment = async (req, res) => {
  try {
    const { user_id, course_id } = req.body;

    const exists = await Enrollment.findOne({ user_id, course_id });
    if (exists) {
      return res
        .status(400)
        .json({ message: "User already enrolled in this course." });
    }

    const enrollment = new Enrollment({ user_id, course_id })
    const savedEnrollment = await enrollment.save();
    res.status(201).json(savedEnrollment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all enrollments
export const getEnrollments = async (req, res) => {
  try {
    const enrollments = await Enrollment.find()
      .populate("user_id", "name email")
      .populate("course_id", "title category price");
    res.status(200).json(enrollments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get enrollments for a specific user
export const getUserEnrollments = async (req, res) => {
  try {
    const enrollments = await Enrollment.find({
      user_id: req.params.userId,
    }).populate("course_id", "title category duration instructor desc price image");
    res.status(200).json(enrollments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete enrollment by ID
export const deleteEnrollment = async (req, res) => {
  try {
    const deleted = await Enrollment.findByIdAndDelete(req.params.id);
    if (!deleted)
      return res.status(404).json({ message: "Enrollment not found" });
    res.status(200).json({ message: "Enrollment deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
