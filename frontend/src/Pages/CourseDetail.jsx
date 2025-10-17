import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";

const CourseDetail = () => {
  const { state } = useLocation();
  const course = state?.course;

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`🎉 Enrollment Successful!\nThank you, ${formData.name}!`);
    setFormData({ name: "", email: "", message: "" });
  };

  if (!course) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-semibold text-gray-700">Course not found.</h2>
        <Link to="/courses" className="mt-4 inline-block text-[#27ae60] hover:underline">
          Go Back to Courses
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#fdf6ea] min-h-screen pb-20">
      <div className="bg-[#da853d] px-6 sm:px-10 py-6 pt-24 w-full text-white text-center sm:text-left">
        <h1 className="text-3xl sm:text-4xl font-alice font-semibold">{course.title}</h1>
        <p className="mt-2 text-xs sm:text-sm space-x-2 font-extralight">
          <Link to="/">Home</Link>
          <span>|</span>
          <Link to="/courses">Courses</Link>
          <span>|</span>
          <span>{course.title}</span>
        </p>
      </div>

      <div className="px-5 sm:px-10 lg:px-16 py-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-56 sm:h-64 object-cover rounded-lg shadow-md"
          />

          <div className="mt-5">
            <p className="bg-[#da853d] text-white inline px-3 py-1 rounded font-semibold text-sm">
              {course.price}
            </p>
            <h2 className="text-2xl font-alice font-semibold mt-3 text-gray-800">
              {course.title}
            </h2>
            <p className="text-gray-600 text-sm mt-3">{course.desc}</p>

            <div className="flex flex-col sm:flex-row sm:justify-between mt-4 text-xs sm:text-sm text-gray-600">
              <p>
                <strong>Category:</strong> {course.category}
              </p>
              <p>
                <strong>Instructor:</strong> {course.instructor}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:justify-between mt-2 text-xs sm:text-sm text-gray-600">
              <p>
                <strong>Lessons:</strong> {course.lessons}
              </p>
              <p>
                <strong>Duration:</strong> {course.duration}
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4">
          <h2 className="text-2xl font-alice font-semibold mb-5 text-gray-800 text-center lg:text-left">
            Enroll in this Course
          </h2>

          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-lg rounded-lg p-6 border border-gray-200"
          >
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-[#27ae60]"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-[#27ae60]"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Message (Optional)
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="3"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-[#27ae60]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-[#27ae60] w-full py-2 text-white rounded-md text-sm font-semibold hover:bg-gray-800 transition"
            >
              Submit Enrollment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
