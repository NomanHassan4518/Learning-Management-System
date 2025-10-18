import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSpinner } from "../../Context/SpinnerContext";

const Dashboard = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [courses, setCourses] = useState([]);

  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const { setLoading } = useSpinner();

  useEffect(() => {
    if (user.isAdmin) {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  }, [setIsAdmin, user.isAdmin]);

  useEffect(() => {
    const fetchEnrollment = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          `http://localhost:5000/api/enrollments/user/${user.id}`
        );
        setCourses(res.data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchEnrollment();
  }, [setLoading, user.id]);

  const handleNavigate = (course) => {
    navigate(`/course/${course._id}`, { state: { course } });
  };

  return (
    <div className="pb-20">
      <div className="bg-[#da853d] px-10 py-6 pt-24 w-full text-white flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-alice font-semibold">Dashboard</h1>
          <p className="mt-2 text-xs space-x-2 font-extralight">
            <Link to="/">Home</Link>
            <span>|</span>
            <span>Dashboard</span>
          </p>
        </div>
        {user.isAdmin && (
          <button
            onClick={() => setIsAdmin(!isAdmin)}
            className="bg-white text-[#da853d] px-4 py-2 text-xs font-semibold rounded-md hover:bg-gray-100 transition"
          >
            Switch to {isAdmin ? "Student" : "Admin"}
          </button>
        )}
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
                  Add lessons under an existing course and manage content
                  easily.
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

            {courses.length === 0 ? (
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
                {courses.map((course) => (
                  <div
                    key={course._id}
                    className="bg-[#fff8ef] border border-[#f0e0c9] rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
                  >
                    <img
                      src={course.course_id.image}
                      alt={course.course_id.title}
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-4">
                      <p className="text-[#da853d] text-sm font-semibold mb-1">
                        {course.course_id.price}
                      </p>
                      <h3 className="text-lg font-alice font-semibold mb-2 text-gray-800">
                        {course.course_id.title}
                      </h3>
                      <p className="text-gray-600 text-xs mb-3">
                        {course.course_id.desc}
                      </p>
                      <button
                        onClick={() => handleNavigate(course.course_id)}
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
