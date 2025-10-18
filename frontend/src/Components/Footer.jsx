import React from "react";
import { FaPhone, FaFax, FaEnvelope, FaArrowRight } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const courses = JSON.parse(localStorage.getItem("courses"));
  const navigate = useNavigate();

  const handleNavigate = (course) => {
    navigate(`/course/${course._id}`, { state: { course } });
  };
  return (
    <footer className="bg-[#f5e9d4] text-gray-800 relative pt-20 font-alice">
      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-[#fff8ef] p-2 rounded-full">
        <img
          src="https://dtlmselementor.wpengine.com/wp-content/uploads/2023/11/lms-logo.png"
          alt=""
        />
      </div>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 border-b border-[#e6decf] pb-10">
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <p className="text-xs text-gray-600 mb-4">
            Our LMS enables easy online teaching and learning for instructors
            and students.
            <span className="block mt-3">
              A smart and user-friendly platform to create, manage, and learn
              courses online.
            </span>
          </p>
          <button className="border border-[#b5b375] text-[#6f7135] text-sm px-5 py-2 rounded hover:bg-[#e8e3d3] transition">
            START LEARNING NOW
          </button>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Popular Courses</h3>
          <ul className="space-y-2 text-sm">
            {courses?.slice(0, 3).map((course) => (
              <button
                onClick={() => handleNavigate(course)}
                className="text-start border-b border-[#e6decf] pb-2 cursor-pointer hover:text-green-700 transition"
              >
                <p>{course.title}</p>{" "}
                <p className="text-[#da853d] mt-1">Free</p>
              </button>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>
              <Link
                to="/"
                className="flex items-center gap-2 cursor-pointer hover:text-green-700 transition"
              >
                <FaArrowRight size={10} /> Home
              </Link>
            </li>
            <li>
              <Link
                to="/about-us"
                className="flex items-center gap-2 cursor-pointer hover:text-green-700 transition"
              >
                <FaArrowRight size={10} /> About
              </Link>
            </li>
            <li>
              <Link
                to="/courses"
                className="flex items-center gap-2 cursor-pointer hover:text-green-700 transition"
              >
                <FaArrowRight size={10} /> Courses
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="flex items-center gap-2 cursor-pointer hover:text-green-700 transition"
              >
                <FaArrowRight size={10} /> Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="flex items-center gap-2 cursor-pointer hover:text-green-700 transition"
              >
                <FaArrowRight size={10} /> Terms of Use
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <MdLocationOn className="text-green-700 mt-1" />
              <p>Mary Jane St, Sydney 2233 Australia.</p>
            </li>
            <li className="flex items-center gap-2">
              <FaPhone className="text-green-700" /> +11 (2) 7654 2233
            </li>
            <li className="flex items-center gap-2">
              <FaFax className="text-green-700" /> +11 (5) 7654 2244
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-green-700" /> lms@gmail.com
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-[#788a3d] text-white text-sm py-4 text-center">
        <p>Copyright © 2025 | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
