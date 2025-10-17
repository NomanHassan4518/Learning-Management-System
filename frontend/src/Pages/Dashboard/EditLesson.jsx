import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const EditLesson = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const lessonFromState = location.state?.lesson;

  const [formData, setFormData] = useState({
    title: "",
    course: "",
    type: "",
    content: "",
    duration: "",
  });

  useEffect(() => {
    if (lessonFromState) {
      setFormData(lessonFromState);
    }
  }, [lessonFromState]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Lesson updated successfully!");
    navigate("/admin/manage-courses");
  };

  return (
    <div className="bg-[#fdf6ea] min-h-screen pb-20">
      <div className="bg-[#da853d] px-10 py-6 pt-24 w-full text-white">
        <h1 className="text-4xl font-alice font-semibold">Edit Lesson</h1>
        <p className="mt-2 text-xs space-x-2 font-extralight">
          <span onClick={() => navigate("/")} className="cursor-pointer">Home</span>
          <span>|</span>
          <span onClick={() => navigate("/admin/manage-courses")} className="cursor-pointer">Manage Courses</span>
          <span>|</span>
          <span>Edit Lesson</span>
        </p>
      </div>

      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-2xl p-10 mt-10 border border-[#f0e0c9]">
        <h2 className="text-2xl font-alice font-semibold mb-8 text-center text-gray-800">
          Update Lesson Details
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700">Lesson Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-[#da853d] focus:outline-none"
              placeholder="Enter lesson title"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Associated Course</label>
            <input
              type="text"
              name="course"
              value={formData.course}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-[#da853d] focus:outline-none"
              placeholder="Enter course name"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Lesson Type</label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-[#da853d] focus:outline-none"
              required
            >
              <option value="">Select Type</option>
              <option value="Video">Video</option>
              <option value="Document">Document</option>
              <option value="Quiz">Quiz</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Lesson Content</label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-[#da853d] focus:outline-none h-24"
              placeholder="Enter lesson details, link, or description"
              required
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Duration</label>
            <input
              type="text"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-[#da853d] focus:outline-none"
              placeholder="e.g. 15 min"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#27ae60] text-white py-2 rounded-md hover:bg-green-700 transition"
          >
            Update Lesson
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditLesson;
