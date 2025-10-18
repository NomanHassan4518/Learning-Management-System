import express from "express";
import {
  createLesson,
  getLessons,
  getLessonById,
  updateLesson,
  deleteLesson,
  getLessonsByCourse,
} from "../controllers/lessonController.js";

const router = express.Router();

// Routes
router.post("/", createLesson);              // Add new lesson
router.get("/", getLessons);                 // Get all lessons
router.get("/:id", getLessonById);          // Get lesson by ID
router.get("/course/:course", getLessonsByCourse); // Get lessons by course
router.put("/:id", updateLesson);           // Update lesson
router.delete("/:id", deleteLesson);        // Delete lesson

export default router;
