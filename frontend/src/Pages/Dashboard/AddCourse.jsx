import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSpinner } from "../../Context/SpinnerContext";

const AddCourse = () => {
  const [courseData, setCourseData] = useState({
    title: "",
    desc: "",
    category: "",
    duration: "",
    instructor: "",
    image: "",
    price: "Free",
  });

  const { setLoading } = useSpinner();
  const handleChange = (e) => {
    setCourseData({ ...courseData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:5000/api/courses",
        courseData
      );
      console.log(res.data);

      toast.success(" Course added successfully!");
      setCourseData({
        title: "",
        desc: "",
        category: "",
        duration: "",
        instructor: "",
        image: "",
        price: "Free",
      });
    } catch (error) {
      console.error(error);
      toast.error("Failed to add course. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pb-20">
      <div className="bg-[#da853d] px-10 py-6 pt-24 w-full text-white">
        <h1 className="text-3xl font-alice font-semibold">Add New Course</h1>
        <p className="mt-2 text-xs space-x-2 font-extralight">
          <Link to="/">Home</Link>
          <span>|</span>
          <Link to="/dashboard">Dashboard</Link>
          <span>|</span>
          <span>Add Course</span>
        </p>
      </div>

      <div className="md:p-10 p-5 flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="bg-[#fff8ef] border border-[#f0e0c9] p-8 rounded-2xl shadow-lg w-full max-w-2xl"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 font-alice text-center">
            Create a New Course
          </h2>

          <div className="grid grid-cols-1 gap-5">
            <input
              type="text"
              name="title"
              placeholder="Course Title"
              value={courseData.title}
              onChange={handleChange}
              required
              className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#da853d]"
            />

            <textarea
              name="desc"
              placeholder="Course Description"
              value={courseData.desc}
              onChange={handleChange}
              rows="3"
              required
              className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#da853d]"
            ></textarea>

            <input
              type="text"
              name="category"
              placeholder="Category (e.g. Web Development)"
              value={courseData.category}
              onChange={handleChange}
              required
              className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#da853d]"
            />

            <input
              type="text"
              name="duration"
              placeholder="Duration (e.g. 10h 30m)"
              value={courseData.duration}
              onChange={handleChange}
              required
              className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#da853d]"
            />

            <input
              type="text"
              name="instructor"
              placeholder="Instructor Name"
              value={courseData.instructor}
              onChange={handleChange}
              required
              className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#da853d]"
            />

            <input
              type="url"
              name="image"
              placeholder="Course Image URL"
              value={courseData.image}
              onChange={handleChange}
              required
              className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#da853d]"
            />

            <select
              name="price"
              value={courseData.price}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#da853d]"
            >
              <option value="Free">Free</option>
              <option value="Paid">Paid</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full mt-6 bg-[#27ae60] text-white py-3 rounded-md font-semibold hover:bg-gray-800 transition"
          >
            Add Course
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCourse;
