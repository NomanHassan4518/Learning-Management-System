import React, { useState } from "react";
import { courses } from "../../assets/data";
import { Link } from "react-router-dom";

const AddLessons = () => {
  const [selectedCourse, setSelectedCourse] = useState("");
  const [lessonTitle, setLessonTitle] = useState("");
  const [lessonType, setLessonType] = useState("video"); // video or text
  const [lessonDesc, setLessonDesc] = useState("");
  const [lessonVideo, setLessonVideo] = useState("");
  const [lessonContent, setLessonContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newLesson = {
      course: selectedCourse,
      title: lessonTitle,
      type: lessonType,
      desc: lessonDesc,
      ...(lessonType === "video"
        ? { video: lessonVideo }
        : { content: lessonContent }),
    };

    console.log("Lesson Added:", newLesson);

    setSelectedCourse("");
    setLessonTitle("");
    setLessonType("video");
    setLessonDesc("");
    setLessonVideo("");
    setLessonContent("");
  };

  return (
    <div className="pb-20">
      <div className="bg-[#da853d] px-10 py-6 pt-24 w-full text-white">
        <h1 className="text-3xl font-alice font-semibold">Add New Lesson</h1>
        <p className="mt-2 text-xs space-x-2 font-extralight">
          <Link to="/">Home</Link>
          <span>|</span>
          <Link to="/dashboard">Dashboard</Link>
          <span>|</span>
          <span>Add New Lesson</span>
        </p>
      </div>

      <div className="md:p-10 p-5 flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="bg-[#fff8ef] border border-[#f0e0c9] p-8 rounded-2xl shadow-lg w-full max-w-2xl"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Select Course
            </label>
            <select
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
            >
              <option value="">-- Choose a course --</option>
              {courses.map((course) => (
                <option key={course.id} value={course.title}>
                  {course.title}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Lesson Title
            </label>
            <input
              type="text"
              value={lessonTitle}
              onChange={(e) => setLessonTitle(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
              placeholder="Enter lesson title"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Lesson Type
            </label>
            <select
              value={lessonType}
              onChange={(e) => setLessonType(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
            >
              <option value="video">Video</option>
              <option value="text">Text</option>
            </select>
          </div>

          {lessonType === "video" ? (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Video URL
              </label>
              <input
                type="text"
                value={lessonVideo}
                onChange={(e) => setLessonVideo(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
                placeholder="Enter video URL (e.g., YouTube or hosted video)"
              />
            </div>
          ) : (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Lesson Text Content
              </label>
              <textarea
                value={lessonContent}
                onChange={(e) => setLessonContent(e.target.value)}
                rows="5"
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
                placeholder="Write or paste lesson text here"
              ></textarea>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Lesson Description
            </label>
            <textarea
              value={lessonDesc}
              onChange={(e) => setLessonDesc(e.target.value)}
              rows="3"
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
              placeholder="Enter a short lesson description"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-[#27ae60] text-white px-8 py-2 rounded-md hover:bg-green-700 transition"
            >
              Add Lesson
            </button>
          </div>
        </form>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Select Course
          </label>
          <select
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
          >
            <option value="">-- Choose a course --</option>
            {courses.map((course) => (
              <option key={course.id} value={course.title}>
                {course.title}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Lesson Title
          </label>
          <input
            type="text"
            value={lessonTitle}
            onChange={(e) => setLessonTitle(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
            placeholder="Enter lesson title"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Lesson Type
          </label>
          <select
            value={lessonType}
            onChange={(e) => setLessonType(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
          >
            <option value="video">Video</option>
            <option value="text">Text</option>
          </select>
        </div>

        {lessonType === "video" ? (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Video URL
            </label>
            <input
              type="text"
              value={lessonVideo}
              onChange={(e) => setLessonVideo(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
              placeholder="Enter video URL (e.g., YouTube or hosted video)"
            />
          </div>
        ) : (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Lesson Text Content
            </label>
            <textarea
              value={lessonContent}
              onChange={(e) => setLessonContent(e.target.value)}
              rows="5"
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
              placeholder="Write or paste lesson text here"
            ></textarea>
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Lesson Description
          </label>
          <textarea
            value={lessonDesc}
            onChange={(e) => setLessonDesc(e.target.value)}
            rows="3"
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
            placeholder="Enter a short lesson description"
          ></textarea>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-[#27ae60] text-white px-8 py-2 rounded-md hover:bg-green-700 transition"
          >
            Add Lesson
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddLessons;
