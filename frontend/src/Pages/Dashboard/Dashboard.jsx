import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { courses } from "../../assets/data";

const Dashboard = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const myCourses = courses;
  const navigate = useNavigate();

  const handleNavigate = (course) => {
    navigate(`/course/${course.id}`, { state: { course } });
  };

  return (
    <div>
      <div className="bg-[#da853d] px-10 py-6 pt-24 w-full text-white flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-alice font-semibold">Dashboard</h1>
          <p className="mt-2 text-xs space-x-2 font-extralight">
            <Link to="/">Home</Link>
            <span>|</span>
            <span>Dashboard</span>
          </p>
        </div>
        <button
          onClick={() => setIsAdmin(!isAdmin)}
          className="bg-white text-[#da853d] px-4 py-2 text-xs font-semibold rounded-md hover:bg-gray-100 transition"
        >
          Switch to {isAdmin ? "Student" : "Admin"}
        </button>
      </div>

      <div className="md:p-10 px-5 py-7">
        {isAdmin ? (
          <div>
            <h2 className="text-2xl font-alice font-semibold mb-6 text-gray-800">
              Course & Lesson Management
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="border border-[#f0e0c9] bg-[#fff8ef] rounded-2xl p-6 shadow hover:shadow-lg transition">
                <h3 className="font-semibold text-lg mb-3">Add New Course</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Create a new course with title, description, and details.
                </p>
                <Link
                  to="/admin/add-course"
                  className="bg-[#27ae60] text-white px-4 py-2 text-sm rounded-md hover:bg-gray-800 transition"
                >
                  Add Course
                </Link>
              </div>

              <div className="border border-[#f0e0c9] bg-[#fff8ef] rounded-2xl p-6 shadow hover:shadow-lg transition">
                <h3 className="font-semibold text-lg mb-3">Add Lessons</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Add lessons under an existing course and manage content easily.
                </p>
                <Link
                  to="/admin/add-lesson"
                  className="bg-[#27ae60] text-white px-4 py-2 text-sm rounded-md hover:bg-gray-800 transition"
                >
                  Add Lesson
                </Link>
              </div>

              <div className="border border-[#f0e0c9] bg-[#fff8ef] rounded-2xl p-6 shadow hover:shadow-lg transition">
                <h3 className="font-semibold text-lg mb-3">Manage Courses</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Edit or delete existing courses and lessons anytime.
                </p>
                <Link
                  to="/admin/manage-courses"
                  className="bg-[#27ae60] text-white px-4 py-2 text-sm rounded-md hover:bg-gray-800 transition"
                >
                  Manage
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-alice font-semibold mb-6 text-gray-800">
              Student Dashboard
            </h2>

            {myCourses.length === 0 ? (
              <div className="text-center py-20">
                <h3 className="text-gray-700 mb-2">
                  You haven’t enrolled in any courses yet.
                </h3>
                <Link
                  to="/courses"
                  className="bg-[#27ae60] text-white px-5 py-2 rounded-md text-sm hover:bg-gray-800 transition"
                >
                  Browse Courses
                </Link>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {myCourses.map((course) => (
                  <div
                    key={course.id}
                    className="bg-[#fff8ef] border border-[#f0e0c9] rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
                  >
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-4">
                      <p className="text-[#da853d] text-sm font-semibold mb-1">
                        {course.price}
                      </p>
                      <h3 className="text-lg font-alice font-semibold mb-2 text-gray-800">
                        {course.title}
                      </h3>
                      <p className="text-gray-600 text-xs mb-3">
                        {course.desc}
                      </p>
                      <button
                        onClick={() => handleNavigate(course)}
                        className="text-sm text-[#27ae60] hover:underline"
                      >
                        Access Lessons →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
