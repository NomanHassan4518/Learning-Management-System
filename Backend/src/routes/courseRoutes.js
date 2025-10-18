import express from "express";
import {
  createCourse,
  getCourses,
  getCourseById,
  updateCourse,
  deleteCourse,
} from "../controllers/courseController.js";

const router = express.Router();

router.post("/", createCourse);           
router.get("/", getCourses);             
router.get("/:id", getCourseById);       // Get course by ID
router.put("/:id", updateCourse);        // Update course
router.delete("/:id", deleteCourse);     

export default router;
