import express from "express";
import {
  createEnrollment,
  getEnrollments,
  getUserEnrollments,
  deleteEnrollment,
} from "../controllers/enrollmentController.js";

const router = express.Router();

router.post("/", createEnrollment); // Enroll a user in a course
router.get("/", getEnrollments); // Get all enrollments
router.get("/user/:userId", getUserEnrollments); // Get enrollments of a specific user
router.delete("/:id", deleteEnrollment); // Delete an enrollment

export default router;
