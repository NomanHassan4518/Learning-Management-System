import React from "react";
import { useNavigate } from "react-router-dom";

const CourseCard = ({ course }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/course/${course.id}`, { state: { course } });
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
      <div className="sm:col-span-4">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-48 sm:h-full object-cover"
        />
      </div>

      <div className="px-5 py-4 sm:col-span-8 text-start flex flex-col justify-between">
        <div>
          <p className="text-[#da853d] text-sm">Free</p>
          <h3 className="text-lg font-alice font-semibold text-gray-800 mb-1">
            {course.title}
          </h3>

          <div className="flex flex-wrap items-center justify-between mt-2 gap-1">
            <div className="flex flex-wrap items-center gap-1 text-xs font-medium text-gray-500">
              <p>{course.category}</p>
              <span>|</span>
              <p>{course.instructor}</p>
            </div>

            <div className="flex flex-wrap items-center gap-1 text-xs font-medium text-gray-500">
              <p>{course.lessons} Lessons</p>
              <span>|</span>
              <p>{course.duration}</p>
            </div>
          </div>

          <p className="text-gray-600 text-xs mt-3 pb-4 border-b border-gray-300">
            {course.desc}
          </p>
        </div>

        <div className="mt-4">
          <button
            onClick={handleNavigate}
            className="bg-[#27ae60] text-white text-sm px-6 py-2 rounded hover:bg-gray-800 transition w-full sm:w-auto"
          >
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
