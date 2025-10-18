import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./src/config/db.js";
import authRoutes from "./src/routes/authRoutes.js";
import courseRoutes from "./src/routes/courseRoutes.js";
import lessonRoutes from "./src/routes/lessonRoutes.js";
import enrollmentRoutes from "./src/routes/enrollmentRoutes.js"

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000", " http://192.168.1.125:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use("/api/auth", authRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/lessons", lessonRoutes);
app.use("/api/enrollments", enrollmentRoutes);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on Port ${port}`);
});
