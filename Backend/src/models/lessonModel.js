import mongoose from "mongoose";

const lessonSchema = new mongoose.Schema(
  {
    courseId: {
      type: mongoose.Schema.ObjectId,
      ref: "Course",
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    type: {
      type: String,
      enum: ["video", "text"],
      default: "video",
      required: true,
    },
    desc: {
      type: String,
      required: true,
      trim: true,
    },
    video: {
      type: String, // URL of the video
      required: function () {
        return this.type === "video";
      },
    },
    content: {
      type: String, // Text content of lesson
      required: function () {
        return this.type === "text";
      },
    },
  },
  { timestamps: true }
);

const Lesson = mongoose.model("Lesson", lessonSchema);
export default Lesson;
