import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const EditCourse = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const courseFromState = location.state?.course;

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    desc: "",
    duration: "",
    lessons: "",
    instructor: "",
    image: "",
    price: "",
  });

  useEffect(() => {
    if (courseFromState) {
      setFormData(courseFromState);
    }
  }, [courseFromState]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ Course updated successfully!");
    navigate("/admin/manage-courses");
  };

  return (
    <div className="bg-[#fdf6ea] min-h-screen pb-20">
      <div className="bg-[#da853d] px-10 py-6 pt-24 w-full text-white">
        <h1 className="text-4xl font-alice font-semibold">Edit Course</h1>
        <p className="mt-2 text-xs space-x-2 font-extralight">
          <span onClick={() => navigate("/")} className="cursor-pointer">Home</span>
          <span>|</span>
          <span onClick={() => navigate("/admin/manage-courses")} className="cursor-pointer">
            Manage Courses
          </span>
          <span>|</span>
          <span>Edit Course</span>
        </p>
      </div>

      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-2xl p-10 mt-10 border border-[#f0e0c9]">
        <h2 className="text-2xl font-alice font-semibold mb-8 text-center text-gray-800">
          Update Course Details
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700">Course Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter course title"
              required
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-[#da853d] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Category</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              placeholder="Enter category (e.g. Web Development)"
              required
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-[#da853d] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Instructor</label>
            <input
              type="text"
              name="instructor"
              value={formData.instructor}
              onChange={handleChange}
              placeholder="Enter instructor name"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-[#da853d] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              name="desc"
              value={formData.desc}
              onChange={handleChange}
              placeholder="Write a short description about the course"
              rows="4"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-[#da853d] focus:outline-none"
            ></textarea>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Duration</label>
              <input
                type="text"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                placeholder="e.g. 10h 30m"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-[#da853d] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">No. of Lessons</label>
              <input
                type="number"
                name="lessons"
                value={formData.lessons}
                onChange={handleChange}
                placeholder="Enter number of lessons"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-[#da853d] focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Course Image URL</label>
            <input
              type="url"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="Paste image URL"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-[#da853d] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Price</label>
            <select
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-[#da853d] focus:outline-none"
            >
              <option value="">Select Price Type</option>
              <option value="Free">Free</option>
              <option value="Paid">Paid</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-[#27ae60] text-white py-2 rounded-md hover:bg-green-700 transition"
          >
            Update Course
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditCourse;
