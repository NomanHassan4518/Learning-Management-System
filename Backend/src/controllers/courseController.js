import Course from "../models/courseModel.js";
import Lesson from "../models/lessonModel.js";

export const createCourse = async (req, res) => {
  try {
    const newCourse = new Course(req.body);
    const savedCourse = await newCourse.save();
    res.status(201).json(savedCourse);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    const coursesWithLessons = await Promise.all(
      courses.map(async (course) => {
        const lessons = await Lesson.find({ courseId: course._id });
        return { ...course._doc, lessons };
      })
    );
    res.status(200).json(coursesWithLessons);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) return res.status(404).json({ message: "Course not found" });
    const lessons = await Lesson.find({ courseId: course._id });
    res.status(200).json({ ...course._doc, lessons });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateCourse = async (req, res) => {
  try {
    const updatedCourse = await Course.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedCourse)
      return res.status(404).json({ message: "Course not found" });
    const lessons = await Lesson.find({ courseId: updatedCourse._id });
    res.status(200).json({ ...updatedCourse._doc, lessons });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteCourse = async (req, res) => {
  try {
    const deletedCourse = await Course.findByIdAndDelete(req.params.id);
    if (!deletedCourse)
      return res.status(404).json({ message: "Course not found" });
    await Lesson.deleteMany({ courseId: req.params.id });
    res
      .status(200)
      .json({ message: "Course and its lessons deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
