import React, { useState } from "react";
import { Link } from "react-router-dom";
import CourseCard from "../Components/CourseCard";

const Courses = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 5;
  const courses = JSON.parse(localStorage.getItem("courses"));

  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = courses.slice(indexOfFirstCourse, indexOfLastCourse);

  const nextPage = () => {
    if (indexOfLastCourse < courses.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="bg-[#fdf6ea] min-h-screen">
      <div className="bg-[#da853d] px-6 sm:px-10 py-6 pt-24 w-full text-white text-center sm:text-left">
        <h1 className="text-3xl sm:text-4xl font-alice font-semibold">
          Courses
        </h1>
        <p className="mt-2 text-xs sm:text-sm space-x-2 font-extralight">
          <Link to="/">Home</Link>
          <span>|</span>
          <span>Courses</span>
        </p>
      </div>

      <div className="px-5 sm:px-10 lg:px-16 pt-10 pb-20">
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 font-alice text-gray-800">
            Our Popular Courses
          </h2>
          <div className="w-20 h-[2px] bg-green-600"></div>
        </div>

        <div className="mt-6 space-y-6">
          {currentCourses.map((course) => (
            <CourseCard key={course._id} course={course} />
          ))}
        </div>

        <div className="flex flex-wrap justify-center items-center mt-10 space-x-3 sm:space-x-5">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className={`px-4 sm:px-6 py-2 rounded-md text-white text-sm sm:text-base font-semibold transition ${
              currentPage === 1
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#da853d] hover:bg-[#c3742f]"
            }`}
          >
            Previous
          </button>

          <span className="text-sm sm:text-base font-medium text-gray-700">
            Page {currentPage} of {Math.ceil(courses.length / coursesPerPage)}
          </span>

          <button
            onClick={nextPage}
            disabled={indexOfLastCourse >= courses.length}
            className={`px-4 sm:px-6 py-2 rounded-md text-white text-sm sm:text-base font-semibold transition ${
              indexOfLastCourse >= courses.length
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#da853d] hover:bg-[#c3742f]"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Courses;
